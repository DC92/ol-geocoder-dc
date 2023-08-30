import Geocoder from '../src/base';

//Instantiate with some options and add the Control
const geocoder = new Geocoder('nominatim', {
	provider: 'osm',
	lang: 'en',
	placeholder: 'Search for ...',
	limit: 5,
	debug: false,
	autoComplete: true,
	keepOpen: true
});

const map = new ol.Map({
	target: document.getElementById('map'),
	view: new ol.View({
		center: [0, 0],
		zoom: 2
	}),
	layers: [new ol.layer.Tile({
		source: new ol.source.OSM()
	})]
});

const popup = new ol.Overlay.Popup();

map.addControl(geocoder);
map.addOverlay(popup);

//Listen when an address is chosen
geocoder.on('addresschosen', function(evt) {
	console.info(evt);
	window.setTimeout(function() {
		popup.show(evt.coordinate, evt.address.formatted);
	}, 3000);
});