// Map.js- inspiration for some functions taken from google api documentation.
// This file provide the functionaity for a city interest finder website.
// It populates the countries drop down box on the website from a data file.
// It Allows a user select a country and uses the google places api to autocomplete the city.
// It displays the search location on a map
// It allows users to search for points of interest depending on the country, city and category selected using the google places api.
// It displays points of interest on a map depending on the search results.
// It displays information on each point of interest when selected by the user.



//Global declarations
var map;
var autocomplete;
var locations;
var infoWindow;
var markers = [];
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');
var countryRestriction = { 'country': [] };

//Load the initial map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: { lat: 15, lng: 0 },
    mapTypeControl: false,
    panControl: false,
    zoomControl: true,
    streetViewControl: false
  });



  // Add a DOM event listener to react when the user selects a country.
  document.getElementById('country').addEventListener(
    'change', setCountry);

  // Initialise autocomplete restricted to cities within a selected country.    
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    (
      document.getElementById('autocomplete')), {
      types: ['(cities)'],
      componentRestrictions: countryRestriction
    });

  locations = new google.maps.places.PlacesService(map);

  //Add listener to update map on place change
  autocomplete.addListener('place_changed', changeLocation);

  //Add listener to radio buttons to find out which category is selected
  document.getElementById('radio-buttons').addEventListener(
    'change', whichCategorySelecion);

  document.getElementById('clear-button').addEventListener(
    'click', resetAll);

  populateCountriesSelectionBox();

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });
}

//Resets the page to its initial state clearing all fields and re-setting the map
function resetAll() {
  clearResults();
  clearMarkers();
  document.getElementById('autocomplete').value = '';
  document.getElementById('country').selectedIndex = 0;
  document.getElementById("attr").checked = false;
  document.getElementById("accom").checked = false;
  document.getElementById("barAndRest").checked = false;
  map.setCenter({ lat: 15, lng: 0 });
  map.setZoom(2);
  autocomplete.setComponentRestrictions({ 'country': [] });
}

//Sets the search criteria depending on radio button selection and calls searchForSelectedPlaces()
function whichCategorySelecion() {
  if (autocomplete.getPlace() != null && document.getElementById('autocomplete').value != '') {
    if (document.getElementById("attr").checked == true) {
      searchForSelectedPlaces(['museum', 'art_gallery', 'park', 'church']);
    }
    if (document.getElementById("accom").checked == true) {
      searchForSelectedPlaces(['lodging']);
    }
    if (document.getElementById("barAndRest").checked == true) {
      searchForSelectedPlaces(['restaurant']);
    }
  }
  else {
    document.getElementById("attr").checked = false;
    document.getElementById("accom").checked = false;
    document.getElementById("barAndRest").checked = false;
  }
}

//Moves the map to focus on selected country and sets autocomplete restrictions.
//Clears previous selection before setting new country
function setCountry() {
  
  document.getElementById('autocomplete').value = '';
  document.getElementById("attr").checked = false;
  document.getElementById("accom").checked = false;
  document.getElementById("barAndRest").checked = false;
  clearResults();
  
  var countryAndCoords = document.getElementById('country').value.split(',');
  var country = countryAndCoords[0];
  if (country == 'all') {
    map.setCenter({ lat: 15, lng: 0 });
    map.setZoom(2);
    autocomplete.setComponentRestrictions({ 'country': [] });
  }
  else {
    map.setCenter({ lat: parseFloat(countryAndCoords[1]), lng: parseFloat(countryAndCoords[2]) });
    map.setZoom(5);
    autocomplete.setComponentRestrictions({ 'country': country });
  }
}

//changes map location on autocomplete city selection
function changeLocation() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
  }
  else {
    document.getElementById('autocomplete').placeholder = 'Enter a city';
  }
}

//Searchs for locations given user radio button selection 
//Drops markers on the map
//Displays infomation about a marker in a table

function searchForSelectedPlaces(selected) {
  var search = {
    bounds: map.getBounds(),
    types: selected
  };
  //clear results of previous search
  clearResults();
  clearMarkers();

  locations.nearbySearch(search, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {

      var resultHeader = document.getElementById('results-header');
      resultHeader.setAttribute('style', 'display: block;');

      for (var i = 0; i < results.length; i++) {

        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';

        // Use marker animation to drop the icons incrementally on the map.

        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon
        });

        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], 'click', showInfoWindow);
        setTimeout(dropMarker(i), i * 100);

        addResultToTable(results[i], i);
      }
    }
  });
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

function dropMarker(i) {
  return function() {
    markers[i].setMap(map);
  };
}

//Adds information about a marker to a html results table.
function addResultToTable(result, i) {

  var results = document.getElementById('results');
  var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  var markerIcon = MARKER_PATH + markerLetter + '.png';

  var tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  tr.onclick = function() {
    google.maps.event.trigger(markers[i], 'click');
  };
  var iconTd = document.createElement('td');
  var nameTd = document.createElement('td');
  var mapAnchorIcon = document.createElement('a');
  mapAnchorIcon.setAttribute('href', '#map-text');
  var mapAnchorName = document.createElement('a');
  mapAnchorName.setAttribute('href', '#map-text');
  var icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  var name = document.createTextNode(result.name);
  mapAnchorName.appendChild(name);
  mapAnchorIcon.appendChild(icon);
  iconTd.appendChild(mapAnchorIcon);
  nameTd.appendChild(mapAnchorName);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

//Clears HTML results table
function clearResults() {
  var resultHeader = document.getElementById('results-header');
  resultHeader.setAttribute('style', 'display: none;');
  var results = document.getElementById('results');
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

//Formats countries.data file, populating the country selection box with data
//This function uses Jquery to read in the file.

function populateCountriesSelectionBox() {

  var countriesTag = document.getElementById('country');
  $(document).ready(function() {
    //fetch text file
    $.get('assets/data/countries.data', function(data) {
      //split on new lines
      var lines = data.split('\n');

      for (var i = 0; i < lines.length; i++) {
        // use lines[i] the way you want
        var values = lines[i].split(',');
        var coords = values[0] + ',' + values[1] + ',' + values[2];
        var optionTag = document.createElement('option');
        var countryName = document.createTextNode(values[3]);
        optionTag.setAttribute('value', coords);
        optionTag.appendChild(countryName);
        countriesTag.appendChild(optionTag);
      }
    });
  });
}


// Displays an info window on a marker when the marker on the HTML table is selected. 
// Taken from google places api documentation

function showInfoWindow() {
  var marker = this;
  locations.getDetails({ placeId: marker.placeResult.place_id },
    function(place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      buildIWContent(place);
    });
}

// Load the place information into the HTML elements used by the info window.
// Taken from google places api documentation

function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
    'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
    '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
      place.formatted_phone_number;
  }
  else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      }
      else {
        ratingHtml += '&#10029;';
      }
      document.getElementById('iw-rating-row').style.display = '';
      document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  }
  else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    var fullUrl = place.website;
    var website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  }
  else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}