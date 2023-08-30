# OpenLayers Control Geocoder
A geocoder extension for [OpenLayers](http://openlayers.org/). **Requires** OpenLayers **v5.7.0** or higher.

## Demos

* [Example using OSM nominatim provider](https://dominique92.github.io/ol-geocoder/examples/control-nominatim.html)
* [Example using glass button & photon provider](https://dominique92.github.io/ol-geocoder/examples/control-glass.html)

# Status of this repository
I have quickly setup this repository to take over the ol-geocoder package,
based on [jonataswalker/ol-geocoder](https://github.com/jonataswalker/ol-geocoder)
and [kirtan-desai/ol-geocoder](https://github.com/kirtan-desai/ol-geocoder)

What's available today :
* Full support of Openlayers 7.5.1
* Generated dist delivery
* Simplified npm build
* Lint tests
* Use as module to build a more complex project. See [example](https://dominique92.github.io/ol-geocoder/examples/module.html).

What's left to do :
* Work existing issues & push from jonataswalker & kirtan-desai repopsitories
* Define & deliver stable version
* Deliver in npm, unpkg, cdn, ...
* Test suite
* No babel is provided (don't support old browsers)
* css generated from sass
* Work with Jonatas Walker & Kirtan Desai to define the way the take over can take place

I will be improving this package soon.
Please come back to this page to follow the evolution
Fell free to provide comments, improvements, issues & push.

## Providers

The plugin supports (for now) the following providers:

* [OSM](https://www.openstreetmap.org/)/[Nominatim](https://nominatim.org/) &mdash; `'osm'`.
* [MapQuest Geocoding API](https://developer.mapquest.com/documentation/open/nominatim-search/) &mdash; requires KEY  &mdash; `'mapquest'`.
* [Photon](https://photon.komoot.io/)  &mdash; `'photon'`.
* [Bing](https://docs.microsoft.com/en-us/bingmaps/rest-services/) &mdash; requires KEY  &mdash; `'bing'`.
* [OpenCage](https://opencagedata.com/) &mdash; requires KEY  &mdash; `'opencage'`.

### Custom Providers

You can also write your own provider, passing an instance of it to the `Geocoder` constructor
via the `provider` property of the options argument.

For an example of defining and using a custom provider see [`examples/custom-provider.js`](examples/custom-provider.js)

Custom providers must implement the following methods:

#### `getParameters(options)`

* `options` `{Object}`
    * `query` Search string entered by the user;
    * `lang` `{string}` Preferable language;
    * `limit` `{number}` Limit of results;

#### `handleResponse(results)`

* `results` `{Object}` Parsed JSON response from API call

## How to use it?

##### Download package

Download the full build & sources [ZIP file](https://github.com/Dominique92/ol-geocoder/archive/refs/heads/main.zip)
from [Dominique92/ol-geocoder](https://github.com/Dominique92/ol-geocoder) & use it in your project.

##### GITHUB Hosted
If you want to try out ol-geocoder without downloading anything (not recommended for production),
include the following in the head of your html page:
```
    <link rel="stylesheet" href="https://dominique92.github.io/ol-geocoder/dist/ol-geocoder.css">
    <script src="https://dominique92.github.io/ol-geocoder/dist/ol-geocoder.js"></script>
```

##### NPM Hosted

To be developped

##### CDN Hosted

To be developped

##### Instantiate with some options and add the Control
```javascript
var geocoder = new Geocoder('nominatim', {
  provider: 'mapquest',
  url: 'https://nominatim.openstreetmap.org/search',
  key: '__some_key__',
  lang: 'pt-BR', //en-US, fr-FR
  placeholder: 'Search for ...',
  targetType: 'text-input',
  limit: 5,
  keepOpen: true
});
map.addControl(geocoder);
```

##### Listen and do something when an address is chosen
```javascript
geocoder.on('addresschosen', function(evt){
  var feature = evt.feature,
      coord = evt.coordinate,
      address = evt.address;
  // some popup solution
  content.innerHTML = '<p>'+ address.formatted +'</p>';
  overlay.setPosition(coord);
});
```

# API

## Constructor

#### `new Geocoder(type, options)`

- `type` `{String}` - Maybe later we will have other types like `'reverse'`. So for now just pass `'nominatim'`.

- `options` is an object with the following possible properties:
  * `provider`             : `'osm'` (default), `'mapquest'`, `'photon'`, `'pelias'`, `'bing'`, `'opencage'`, custom provider instance; Your preferable provider;
  * `url`                  : `'https://nominatim.openstreetmap.org/search''`; API provider url;
  * `key`                  : `''`; API Key if required;
  * `autoComplete`         : `false`; Search as you type;
  * `autoCompleteMinLength`: `2`; The minimum number of characters to trigger search;
  * `autoCompleteTimeout`  : `200`; The mimimum number of ms to wait before triggering search if autoComplete is on and minimum number of characters is satisfied;
  * `placeholder`          : `'Search for an address'`; Placeholder for text input;
  * `targetType`           : `'glass-button'`; Can also be `'text-input'`;
  * `featureStyle`         : `ol.style.Style`; Feature style;
  * `lang`                 : `'en-US'`; Preferable language;
  * `limit`                : `5`; Limit of results;
  * `countrycodes`         : `''`; Only valid for `osm` and `mapquest`; Limit search results to a specific country (or a list of countries). This is an [ISO 3166-1alpha2 code] (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), e.g. `gb` for the United Kingdom, `br` for Brazil, etc;
  * `keepOpen`             : `false`; Whether the results keep openned;
  * `preventDefault`       : `false`; Whether panning (and creating marker) when an address is chosen;
  * `panning`              : `false`; Whether panning when an address is chosen;
  * `marker`               : `false`; Whether creating marker when an address is chosen;
  * `debug`                : `false`; If true logs provider's response;

## Instance Methods

#### `getLayer()`
Returns the layer `{ol.layer.Vector}` created by Geocoder control.

#### `getSource()`
Returns the source `{ol.source.Vector}` created by Geocoder control.

#### `setProvider(provider)`

`@param {String} provider`

Sets a new provider.

#### `setProviderKey(key)`

`@param {String} key`

Sets provider key.

## Events

##### Triggered when an address is chosen
```javascript
geocoder.on('addresschosen', function(evt) {
  // it's up to you
  console.info(evt);
});
```
