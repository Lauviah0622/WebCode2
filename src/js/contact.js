console.log('contact');
let map;

function initMap() {
    let good = { lat: 25.0439532, lng: 121.5254763 };
    let map = new google.maps.Map(document.querySelector('#map'), {
        center: { lat: 25.0439532, lng: 121.5254763 },
        zoom: 18,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
    });
    let marker = new google.maps.Marker({ position: good, map: map });

}