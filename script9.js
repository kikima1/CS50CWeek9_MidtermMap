//shows both geo locate and Json but at separate times

//so run jquery and generate 10 locations and then do geolocate
//or try to define center



"use strict"
var map1, marker1;
function initMap(){
 
    
                          $.getJSON( "map.json",
                function(jsonData) {
                 //center
                    var geocoord1 = {
                        lat: 38.465098,
                        lng: -122.7215907
                    };
                    
                   
                    map1 = new google.maps.Map(
                       
                        document.getElementById('midMap'),
                        {
                            
                            center: geocoord1,
                           
                            zoom: 5,
                           styles:[
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
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
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    },
    {
        "stylers": [
            {
                "saturation": -17
            },
            {
                "gamma": 0.36
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3f518c"
            }
        ]
    }
]
                        }
                    );

                    for ( var c=0; c < jsonData.length; c++ ) {
                        //loop to grab JSON object info
                        // create marker
                        var geocoord = {
                            lat: jsonData[c].lat,
                            lng: jsonData[c].lng
                        };
                        marker1 = new google.maps.Marker(
                            {
                                
                                position: geocoord,
                              
                                map: map1,
                                
                                title: jsonData[c].title
                              
                            }
                           
                        );
                      marker1.addListener(
      'click',
      function(){
        info2.open(
          map1,
          marker1
        )
        var mp3_1 = 'assets/violin.mp3';

(new Audio(mp3_1)).play()
      }
);
                      
                    }

                  
                
 
   
                  //add geolocation marker
                  if ( navigator.geolocation ) {
                    console.log("yes!");
                   
                    navigator.geolocation.getCurrentPosition(
                      
                        function(position) {
                            
                            var geoCoord1 = {
                                
                                lat: position.coords.latitude,
                                
                                lng: position.coords.longitude
                            };
                          map1.setCenter(geoCoord1);
                          //rescale image icon variable with properties
                          const image ="./marker1.png";
                          const myMarker = new google.maps.Marker({
   
                             position: geoCoord1,
                              map: map1,
                              icon:image
  
                              }
                              );
                             

              
  
                                }
                              );
                            }
                      
var info2 = new google.maps.InfoWindow(

  {
 content: "<h2>Whoa!</h2><p>I can't believe I did it!</p>"
}
);
   
                        }
                      );
                }
                                     