function initialize(e,a){var o=document.getElementById("map"),g={lat:e,lng:a},n={center:new google.maps.LatLng(e,a),zoom:9,mapTypeId:google.maps.MapTypeId.ROADMAP},p=new google.maps.Map(o,n);new google.maps.Marker({position:g,map:p,title:"Nuage Networks !"})}