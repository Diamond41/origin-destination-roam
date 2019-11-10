function init_map()
var myOptions = 
    zoom:12,
      center:new google.maps.LatLng(53.1659,-1.2612000000000307),
      mapTypeId: google.maps.MapTypeId.ROADMAP};
      map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
      marker = new google.maps.Marker({map: map,position: 
      new google.maps.LatLng(53.1659,-1.2612000000000307)});
      infowindow = new google.maps.InfoWindow({content:
     '<strong>Venice</strong>
     <br>
     del Bovolo, 4303<br>30124 Venezia VE Venezia<br>'});
     google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
     infowindow.open(map,marker);}
     google.maps.event.addDomListener(window, 'load', init_map);
