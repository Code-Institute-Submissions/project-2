// Custom Map File

//Global declarations
      var map;
      var autocomplete;
      var locations;
      var infoWindow;
      var markers = [];
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      var hostnameRegexp = new RegExp('^https?://.+?/');
      var countryRestriction = {'country': []};

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: 15, lng: 0},
          mapTypeControl: false,
          panControl: false,
          zoomControl: true,
          streetViewControl: false
        });
        
        
        
        // Add a DOM event listener to react when the user selects a country.
        document.getElementById('country').addEventListener(
            'change', setCountry);
            
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */ (
                document.getElementById('autocomplete')), {
              types: ['(cities)'],
              componentRestrictions: countryRestriction
            });
        
        locations = new google.maps.places.PlacesService(map);    
        
        autocomplete.addListener('place_changed', changeLocation);
        
      document.getElementById('radio-buttons').addEventListener(
            'change', whichSelection);
            
            document.getElementById('clear-button').addEventListener(
            'click', clear);
            
            populateCountries();
            
            infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });
      }
      
      function clear(){
        clearResults();
        clearMarkers();
        document.getElementById('autocomplete').value = '';
        document.getElementById('country').selectedIndex = 0;
        document.getElementById("attr").checked = false;
        document.getElementById("accom").checked = false;
        document.getElementById("barAndRest").checked = false;
        map.setCenter({lat: 15, lng: 0});
        map.setZoom(2);
        autocomplete.setComponentRestrictions({'country': []});
      }
      
      function whichSelection(){
        if(autocomplete.getPlace() != null && document.getElementById('autocomplete').value != '')
        {
            if(document.getElementById("attr").checked == true){
              find(['museum','art_gallery','park','church']);
            }
            if(document.getElementById("accom").checked == true){
            find(['lodging']);
           }
            if(document.getElementById("barAndRest").checked == true){
             find(['restaurant']);
           }
          }
        else
        {
          
            document.getElementById("attr").checked = false;
            document.getElementById("accom").checked = false;
            document.getElementById("barAndRest").checked = false;}
          
      }
      
      function setCountry() {
        var countryAndCoords = document.getElementById('country').value.split(',');
        var country = countryAndCoords[0];
        if (country == 'all') {
          map.setCenter({lat: 15, lng: 0});
          map.setZoom(2);
          autocomplete.setComponentRestrictions({'country': []});
        } else {
          map.setCenter({lat: parseFloat(countryAndCoords[1]), lng: parseFloat(countryAndCoords[2])});
          map.setZoom(5);
          autocomplete.setComponentRestrictions({'country': country});
        }
      }
      
      function changeLocation() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }
      
      function find(selected) {
        var search = {
          bounds: map.getBounds(),
          types: selected
        };
            clearResults();
            clearMarkers();
            
        locations.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            
            var resultHeader = document.getElementById('results-header');
            resultHeader.setAttribute('style','display: block;');
            
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
              
              addResult(results[i], i);
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

function addResult(result, i) {
  
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
        mapAnchorIcon.setAttribute('href','#map-text');
        var mapAnchorName = document.createElement('a');
        mapAnchorName.setAttribute('href','#map-text');
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

      function clearResults() {
        var resultHeader = document.getElementById('results-header');
            resultHeader.setAttribute('style','display: none;');
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }
      
      function populateCountries() {
        
        var countriesTag = document.getElementById('country');
         $(document).ready(function() {
    //fetch text file
    $.get('countries.data', function(data) {
        //split on new lines
        var lines = data.split('\n');
        
        for(var i=0;i<lines.length;i++) {
            // use lines[i] the way you want
            var values = lines[i].split(',');
            var coords = values[0] + ',' + values[1] + ',' + values[2];
            var optionTag = document.createElement('option');
            var countryName = document.createTextNode(values[3]);
            optionTag.setAttribute('value',coords)
            optionTag.appendChild(countryName);
            countriesTag.appendChild(optionTag);
        }
    });
});
      }

///////////////////////////////////////////////////////////////////////////////////////////////////////

 // Get the place details for a hotel. Show the information in an info window,
      // anchored on the marker for the hotel that the user selected.
      function showInfoWindow() {
        var marker = this;
        locations.getDetails({placeId: marker.placeResult.place_id},
            function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              infoWindow.open(map, marker);
              buildIWContent(place);
            });
      }

      // Load the place information into the HTML elements used by the info window.
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
        } else {
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
            } else {
              ratingHtml += '&#10029;';
            }
          document.getElementById('iw-rating-row').style.display = '';
          document.getElementById('iw-rating').innerHTML = ratingHtml;
          }
        } else {
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
        } else {
          document.getElementById('iw-website-row').style.display = 'none';
        }
      }
      