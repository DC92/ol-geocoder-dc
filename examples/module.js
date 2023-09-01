import Geocoder from '../src/base';
import * as util from 'ol/util';

console.log('Ol v' + util.VERSION);

// Instantiate with some options and add the Control
const geocoder = new Geocoder('nominatim', {
  provider: 'osm',
  targetType: 'text-input',
  lang: 'en',
  placeholder: 'Search for ...',
  limit: 5,
  keepOpen: false,
});

new ol.Map({
  target: document.querySelector('#map'),
  view: new ol.View({
    center: [0, 0],
    zoom: 3,
    minZoom: 2,
    maxZoom: 20,
  }),
  controls: [geocoder],
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
});