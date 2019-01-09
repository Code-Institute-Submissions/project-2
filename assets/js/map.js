// Custom Map File

//Global declarations
      var map;
      var autocomplete;
      var locations;
      var markers = [];
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      
      var countryRestriction = {'country': []};
      
      var countries = {
        'irl': {
          center: {lat: 53.1,lng: -7.6},
          zoom: 5
        },
        'us': {
          center: {lat: 37.1, lng: -95.7},
          zoom: 3
        },
        'uk': {
          center: {lat: 54.8, lng: -4.6},
          zoom: 5
        }
      };

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
        if(autocomplete.getPlace() != null && document.getElementById('autocomplete').value != ''){
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
      }
      function setCountry() {
        var country = document.getElementById('country').value;
        if (country == 'all') {
          map.setCenter({lat: 15, lng: 0});
          map.setZoom(2);
          autocomplete.setComponentRestrictions({'country': []});
        } else {
          map.setCenter(countries[country].center);
          map.setZoom(countries[country].zoom);
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

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }

      