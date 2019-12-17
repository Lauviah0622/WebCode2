console.log('contact');
let map;

function initMap() {
    let good = { lat: 25.0439532, lng: 121.5254763 };
    let mapStyle = [
        {
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#0049ff"
                },
                {
                    "saturation": 7
                },
                {
                    "lightness": 19
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": "-3"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#f39247"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#ff0000"
                },
                {
                    "saturation": "-78"
                },
                {
                    "lightness": "-1"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#ff0000"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 100
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": "-53"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#0098ef"
                },
                {
                    "lightness": "95"
                },
                {
                    "saturation": "-94"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "hue": "#00b3ff"
                },
                {
                    "lightness": "2"
                },
                {
                    "gamma": "1.34"
                },
                {
                    "saturation": "3"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffd055"
                },
                {
                    "saturation": "0"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "saturation": -93
                },
                {
                    "lightness": 31
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {
                    "weight": "4.00"
                },
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "saturation": "1"
                },
                {
                    "lightness": "1"
                },
                {
                    "gamma": "1.00"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": "-50"
                },
                {
                    "lightness": "-34"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "lightness": "1"
                },
                {
                    "saturation": "100"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "weight": "10.00"
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": "-2"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "0"
                },
                {
                    "lightness": "10"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#4eaee4"
                },
                {
                    "saturation": "-55"
                },
                {
                    "lightness": "4"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                {
                    "hue": "#008eff"
                },
                {
                    "saturation": -93
                },
                {
                    "lightness": -2
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#009aff"
                },
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "14"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#ffa800"
                },
                {
                    "saturation": "60"
                },
                {
                    "lightness": "17"
                },
                {
                    "visibility": "on"
                },
                {
                    "gamma": "1"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#007fff"
                },
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "100"
                },
                {
                    "visibility": "simplified"
                }
            ]
        }
    ]
    let map = new google.maps.Map(document.querySelector('#map'), {
        center: good,
        zoom: 18,
        styles: mapStyle
    });
    let marker = new google.maps.Marker({
        position: good,
        map: map,
        title: '好應整合'
    });

}