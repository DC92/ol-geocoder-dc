//Instantiate with some options and add the Control
var geocoder = new Geocoder('nominatim', {
	provider: 'osm',
	lang: 'en',
	placeholder: 'Search for ...',
	limit: 5,
	debug: false,
	autoComplete: true,
	keepOpen: true
});

var map = new ol.Map({
	target: document.getElementById('map'),
	view: new ol.View({
		center: [0, 0],
		zoom: 2
	}),
	layers: [new ol.layer.Tile({
		source: new ol.source.OSM()
	})]
});

map.addControl(geocoder);

//Listen when an address is chosen
geocoder.on('addresschosen', function(evt) {
	console.info(evt);
	window.setTimeout(function() {
		//popup.show(evt.coordinate, evt.address.formatted);
	}, 3000);
});