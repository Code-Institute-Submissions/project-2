// Custom Map File

      var countries = {
        'irl': {
          center: {lat: 53.1,lng: -7.6},
          zoom: 5
        }
      };

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: countries['irl'].zoom,
          center: countries['irl'].center,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false
        });
      }