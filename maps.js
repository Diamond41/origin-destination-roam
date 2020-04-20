google.maps.event.addListener(marker,'click',function() {
    map.setZoom(9);
    map.setCenter(marker.getPosition());
    window.setTimeout(function() {map.setZoom(pos);},3000);
});
  
var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Venicw</h1>'+
    '<div id="bodyContent">'+
    	'<p>del Bovolo, 4303<br>30124 Venezia VE Venezia<br></p>'+
      '</div>'+
      '<div id="bodyContent">';
}    
function placeMarker(map, location) {
var marker = new google.maps.Marker({
    position: myCenter,
    animation:google.maps.Animation.BOUNCE
});

var infowindow = new google.maps.InfoWindow({
    content:contentString});
 marker.addListener('click', function() {  
   infowindow.open(map,marker);
 });
}
