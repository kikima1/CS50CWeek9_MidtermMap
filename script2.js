 "use strict"

        function initMap() {
          $.getJSON( "map.json",
               function(jsonData) {
          //for geolocate for center
            
          /*  if ( navigator.geolocation ) {
                    
                   console.log("yes!");
                  navigator.geolocation.getCurrentPosition(
                      
                        function(position) {
                            
                           var geoCoord1 = {
                                
                                lat: position.coords.latitude,
                                
                                lng: position.coords.longitude
                            };
                          console.log("geoCoord1  " + geoCoord1);
                         
                        }
                      );
            
            } //is this out of scope?
                 
                  
*/
            
                                        //$.getJSON( "map.json",
                                       //   function(jsonData) {
                   
                    
                    // Hardcoding the center
                   var geocoord1 = {
                        lat: 38.465098,
                        lng: -122.7215907
                    };
                    
                    // create a google Map object
                    var map1 = new google.maps.Map(
                        // tell gmap the html element to draw map inside of
                        document.getElementById('midMap'),
                        {
                            // provide the center in latitude and longitude
                            center: geocoord1,
                          
                            // set the zoom level for the map
                            zoom: 3
                        }
                    );

                    for ( var c=0; c < jsonData.length; c++ ) {
                        // inside these curlies we are making a block of code associated with the for loop
                        // step 3. create a marker that is placed on the map
                        var geocoord = {
                            lat: jsonData[c].lat,
                            lng: jsonData[c].lng
                        };
                        var marker1 = new google.maps.Marker(
                            {
                                // 1. the position of the marker geocoord
                                position: geocoord,
                                // 2. which google map js var to place marker inside
                                map: map1,
                                // 3. title to show when user points at marker
                                title: jsonData[c].title
                            }
                        );
                    }//forloop with geo
               // }//position for geolocate
                      
                     }//4
                  
            //);//3 getcurrentposition for geolocate
              //}//2 ifnavigator for geolocate
          );//getJSON
        }
        
        