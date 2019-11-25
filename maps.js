function myMap(){
var mapProp={ 
   center:new google.maps.LatLng(53.1659,-1.2612000000000307),
   zoom:12,
   mapTypeId: google.maps.MapTypeId.HYBRID
};
    
var map = new
google.maps.Map(document.getElementById("googleMap"),mapProp);


google.maps.event.addListener(marker,'click',function() {
    map.setZoom(9);
    map.setCenter(marker.getPosition());
    window.setTimeout(function() {map.setZoom(pos);},3000);
});

function placeMarker(map, location) {
var marker = new google.maps.Marker({
    position: myCenter,
    animation:google.maps.Animation.BOUNCE
});

var infowindow = new google.maps.InfoWindow({
    content:
     '<strong>Venice</strong>
     <br>
     del Bovolo, 4303<br>30124 Venezia VE Venezia<br>'});
 
   infowindow.open(map,marker);
};
    
