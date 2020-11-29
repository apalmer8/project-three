function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.816255547346536, -88.06295617724754);
	var mapOptions = {
		center: myLocation,
		zoom: 14.5,
		mapTypeIs:["terrain","hybrid"]
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE
	});
	
	// Define the LatLng coordinates for the polygon.
    const polyCoords = [
      { lat: 41.810754021347705, lng: -88.07428582811552 },
      { lat: 41.81857436281201, lng: -88.06905015615003 },
      { lat: 41.81991763818369, lng: -88.05915816933519 }, 
      { lat: 41.81654340481112, lng: -88.05014594703546 },
      { lat: 41.81148971779922, lng: -88.05437310846092 },
    ];
    // Construct the polygon.
    const myPoly = new google.maps.Polygon({
      paths: polyCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: "#FF0000",
      fillOpacity: 0.1,
    });
	myPoly.setMap(myMap);

	var contentString = '<h1>Morton Arboretum</h1><p>Great Location to Spot Northern Saw-whet Owls, crossbills, migrating warblers, vireos, and other birds just west of Chicago.</p><p>(Reference: https://www.birdwatchingdaily.com/hotspots/26-morton-arboretum-lisle-illinois/)</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}


google.maps.event.addDomListener(window, 'load', init);