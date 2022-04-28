
"use strict"

function initMap(){
  
     if ( navigator.geolocation ) {
                    
                   
                    navigator.geolocation.getCurrentPosition(
                      
                        function(position) {
                            
                            var geoCoord1 = {
                                
                                lat: position.coords.latitude,
                                
                                lng: position.coords.longitude
                            };
                        }
                      }
 $.getJSON("map.JSON",
          function(jsonData)
var map1=new google.maps.Map(
//first parameter to function Map
document.getElementById('midMap'),
//second parameter object:value array
  {
  center: geoCoord1,
  zoom:15,
    //styles
  /*styles:[
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
*/
  //end of styles
}
); 
//add loop
for (var c=0; c<json.length; c++){

  var geocoord = {
                  lat: jsonData[c].lat,
                  lng: jsonData[c].lng
                  };

     var marker1 = new google.maps.Marker(

  {
  position: geoCoord1,
  map: map1,
  title:jsonData[c].title
}
);
// var info1 = new google.maps.InfoWindow(

  //{

 //content: '<h2>You are here!</h2><p>Go to Sebastopol for other markers!</p>'
//}
 }
);
//}
}
 /*  marker1.addListener(
      'click',
      function(){
        info1.open(
          map1,
          marker1
        )
        var mp3_1 = 'assets/fanfare1.mp3';

(new Audio(mp3_1)).play()
      }
);//started here
var geoCoord2 ={
 lat:38.406470,
 lng: -122.826554
};
  var marker2 = new google.maps.Marker(

  {
  position: geoCoord2,
  map: map1,
  title:"My First Sebastopol Home!"
}
);
var info2 = new google.maps.InfoWindow(

  {
 content: '<h2>557 North Main St.</h2><p>Sebastopol CA</p>'
}
);
   marker2.addListener(
      'click',
      function(){
        info2.open(
          map1,
          marker2
        )
        var mp3_1 = 'assets/violin.mp3';

(new Audio(mp3_1)).play()
      }
);
//ended here 
var geoCoord3 ={
 lat:38.408163,
 lng:  -122.847649
};
  var marker3 = new google.maps.Marker(

  {
  position: geoCoord3,
  map: map1,
  title:"My Second Sebastopol Home!"
}
);
var info3 = new google.maps.InfoWindow(

  {
 content: '<h2>8245 Candy Apple Lane </h2><p>Sebastopol CA</p>'
}
);
   marker3.addListener(
      'click',
      function(){
        info3.open(
          map1,
          marker3
        )
         var mp3_1 = 'assets/chicken.mp3';

(new Audio(mp3_1)).play()
      }
);//ended here
var geoCoord4 ={
 lat:38.400381,
 lng:  -122.827537
};
  var marker4 = new google.maps.Marker(

  {
  position: geoCoord4,
  map: map1,
  title:"Sebastopol Fire Station"
}
);

   marker4.addListener(
      'mouseover',
      function(){
      
        var mp3_url = 'assets/siren.mp3';

(new Audio(mp3_url)).play()
      }
);//ended here
  
  
                        
  

                            
                        }
                    );
                }
            }*/