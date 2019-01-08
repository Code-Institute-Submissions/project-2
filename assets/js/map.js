// Custom Map File

//Global declarations
      var map;
      var autocomplete;
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
            
        autocomplete.addListener('place_changed', changeLocation);
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