function initMap() {
  let coordinates = { lat: 50.45265003885453, lng: 30.518164367714164 },
    zoom = 17,
    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: zoom,
    }),
    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
    });
}

document.addEventListener('DOMContentLoaded', function () {
  let wow = new WOW({
    mobile: false,
  });
  wow.init();
});
