var map;
function initMap() {
	var latlng = {lat: 60.39316, lng: 5.31834};
  	map = new google.maps.Map(document.getElementById('insertMap'), {
    	center: latlng,
   		zoom: 14,
   		scrollwheel: false
  	});
  	var marker = new google.maps.Marker({
    	position: latlng,
    	map: map,
    	title: 'Hello World!'
  	});
}
initMap();