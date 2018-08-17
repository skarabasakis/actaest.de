function initMap() {
  var uluru = {lat: 51.2149526, lng: 6.7860385};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}