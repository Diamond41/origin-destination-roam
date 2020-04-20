<script function initMap(){
        let venice = {lat: 53.1659, lng: -1.26120};  
        let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: venice}
        );
        let marker = new google.maps.Marker({postion: venice, map: map})};
