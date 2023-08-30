/*! A geocoder extension compatible with OpenLayers v7+
 * © Dominique Cavailhez 2023
 * https://github.com/Dominique92/ol-geocoder
 * Based on https://openlayers.org
 * From https://github.com/jonataswalker/ol-geocoder & https://github.com/kirtan-desai/ol-geocoder
 * This file has been generated Wed, 30 Aug 2023 16:20:37 GMT by npm run build from the src/... sources
 * Please don't modify it : modify src/... & npm run build !
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("ol/control/Control"),require("ol/style/Style"),require("ol/style/Icon"),require("ol/layer/Vector"),require("ol/source/Vector"),require("ol/geom/Point"),require("ol/Feature"),require("ol/proj")):"function"==typeof define&&define.amd?define(["ol/control/Control","ol/style/Style","ol/style/Icon","ol/layer/Vector","ol/source/Vector","ol/geom/Point","ol/Feature","ol/proj"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Geocoder=t(e.ol.control.Control,e.ol.style.Style,e.ol.style.Icon,e.ol.layer.Vector,e.ol.source.Vector,e.ol.geom.Point,e.ol.Feature,e.ol.proj)}(this,(function(e,t,s,r,n,o,a,i){"use strict";function l(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(s){if("default"!==s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}})),t.default=e,Object.freeze(t)}var c=l(i),d="gcd-container",u="gcd-button-control",p="gcd-input-query",h="gcd-input-reset",m={namespace:"ol-geocoder",spin:"gcd-pseudo-rotate",hidden:"gcd-hidden",address:"gcd-address",country:"gcd-country",city:"gcd-city",road:"gcd-road",olControl:"ol-control",glass:{container:"gcd-gl-container",control:"gcd-gl-control",button:"gcd-gl-btn",input:"gcd-gl-input",expanded:"gcd-gl-expanded",reset:"gcd-gl-reset",result:"gcd-gl-result"},inputText:{container:"gcd-txt-container",control:"gcd-txt-control",input:"gcd-txt-input",reset:"gcd-txt-reset",icon:"gcd-txt-glass",result:"gcd-txt-result"}},g={containerId:d,buttonControlId:u,inputQueryId:p,inputResetId:h,cssClasses:m};const y=Object.freeze({__proto__:null,buttonControlId:u,containerId:d,cssClasses:m,default:g,inputQueryId:p,inputResetId:h}),f="addresschosen",b="nominatim",w="reverse",v="glass-button",$="text-input",k="osm",x="mapquest",q="photon",C="bing",S="opencage",j={provider:k,placeholder:"Search for an address",featureStyle:null,targetType:v,lang:"en-US",limit:5,keepOpen:!1,preventDefault:!1,autoComplete:!1,autoCompleteMinLength:2,autoCompleteTimeout:200,debug:!1};function L(e,t="Assertion failed"){if(!e){if("undefined"!=typeof Error)throw new Error(t);throw t}}function E(e){const t=function(){if(
// @license http://opensource.org/licenses/MIT
"performance"in window==0&&(window.performance={}),"now"in window.performance==0){let e=Date.now();performance.timing&&performance.timing.navigationStart&&(e=performance.timing.navigationStart),window.performance.now=()=>Date.now()-e}return window.performance.now()}().toString(36);return e?e+t:t}function T(e){return/^\d+$/u.test(e)}function N(e,t,s){if(Array.isArray(e))return void e.forEach((e=>N(e,t)));const r=Array.isArray(t)?t:t.split(/\s+/u);let n=r.length;for(;n--;)R(e,r[n])||F(e,r[n],s)}function P(e,t,s){if(Array.isArray(e))return void e.forEach((e=>P(e,t,s)));const r=Array.isArray(t)?t:t.split(/\s+/u);let n=r.length;for(;n--;)R(e,r[n])&&_(e,r[n],s)}function R(e,t){return e.classList?e.classList.contains(t):O(t).test(e.className)}function A(e,t){return e.replace(/\{\s*([\w-]+)\s*\}/gu,((e,s)=>{const r=void 0===t[s]?"":t[s];return String(r).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}))}function I(e,t){let s;if(Array.isArray(e)){if(s=document.createElement(e[0]),e[1].id&&(s.id=e[1].id),e[1].classname&&(s.className=e[1].classname),e[1].attr){const{attr:t}=e[1];if(Array.isArray(t)){let e=-1;for(;++e<t.length;)s.setAttribute(t[e].name,t[e].value)}else s.setAttribute(t.name,t.value)}}else s=document.createElement(e);s.innerHTML=t;const r=document.createDocumentFragment();for(;s.childNodes[0];)r.append(s.childNodes[0]);return s.append(r),s}function O(e){return new RegExp(`(^|\\s+) ${e} (\\s+|$)`,"u")}function F(e,t,s){e.classList?e.classList.add(t):e.className=`${e.className} ${t}`.trim(),s&&T(s)&&window.setTimeout((()=>_(e,t)),s)}function _(e,t,s){e.classList?e.classList.remove(t):e.className=e.className.replace(O(t)," ").trim(),s&&T(s)&&window.setTimeout((()=>F(e,t)),s)}const M=y.cssClasses;class D{constructor(e){this.options=e,this.els=this.createControl()}createControl(){let e,t,s;return this.options.targetType===$?(t=`${M.namespace} ${M.inputText.container}`,e=I(["div",{id:y.containerId,classname:t}],D.input),s={container:e,control:e.querySelector(`.${M.inputText.control}`),input:e.querySelector(`.${M.inputText.input}`),reset:e.querySelector(`.${M.inputText.reset}`),result:e.querySelector(`.${M.inputText.result}`)}):(t=`${M.namespace} ${M.glass.container}`,e=I(["div",{id:y.containerId,classname:t}],D.glass),s={container:e,control:e.querySelector(`.${M.glass.control}`),button:e.querySelector(`.${M.glass.button}`),input:e.querySelector(`.${M.glass.input}`),reset:e.querySelector(`.${M.glass.reset}`),result:e.querySelector(`.${M.glass.result}`)}),s.input.placeholder=this.options.placeholder,s}}D.glass=`\n  <div class="${M.glass.control} ${M.olControl}">\n    <button type="button" id="${y.buttonControlId}" class="${M.glass.button}"></button>\n    <input type="text" id="${y.inputQueryId}" class="${M.glass.input}" autocomplete="off" placeholder="Search ...">\n    <a id="${y.inputResetId}" class="${M.glass.reset} ${M.hidden}"></a>\n  </div>\n  <ul class="${M.glass.result}"></ul>\n`,D.input=`\n  <div class="${M.inputText.control}">\n    <input type="text" id="${y.inputQueryId}" class="${M.inputText.input}" autocomplete="off" placeholder="Search ...">\n    <span class="${M.inputText.icon}"></span>\n    <button type="button" id="${y.inputResetId}" class="${M.inputText.reset} ${M.hidden}"></button>\n  </div>\n  <ul class="${M.inputText.result}"></ul>\n`;class V{constructor(){this.settings={url:"https://photon.komoot.io/api/",params:{q:"",limit:10,lang:"en"},langs:["de","it","fr","en"]}}getParameters(e){return e.lang=e.lang.toLowerCase(),{url:this.settings.url,params:{q:e.query,limit:e.limit||this.settings.params.limit,lang:this.settings.langs.includes(e.lang)?e.lang:this.settings.params.lang}}}handleResponse(e){return 0===e.features.length?[]:e.features.map((e=>({lon:e.geometry.coordinates[0],lat:e.geometry.coordinates[1],address:{name:e.properties.name,postcode:e.properties.postcode,city:e.properties.city,state:e.properties.state,country:e.properties.country},original:{formatted:e.properties.name,details:e.properties}})))}}class Q{constructor(e){this.settings={url:"https://nominatim.openstreetmap.org/search",params:{q:"",format:"json",addressdetails:1,limit:10,countrycodes:"","accept-language":"en-US"},...e}}getParameters(e){return{url:this.settings.url,params:{q:e.query,format:this.settings.params.format,addressdetails:this.settings.params.addressdetails,limit:e.limit||this.settings.params.limit,countrycodes:e.countrycodes||this.settings.params.countrycodes,"accept-language":e.lang||this.settings.params["accept-language"]}}}handleResponse(e){return 0===e.length?[]:e.map((e=>({lon:e.lon,lat:e.lat,bbox:e.boundingbox,address:{name:e.display_name,road:e.address.road||"",houseNumber:e.address.house_number||"",postcode:e.address.postcode,city:e.address.city||e.address.town,state:e.address.state,country:e.address.country},original:{formatted:e.display_name,details:e.address}})))}}class B{constructor(){this.settings={url:"https://open.mapquestapi.com/nominatim/v1/search.php",params:{q:"",key:"",format:"json",addressdetails:1,limit:10,countrycodes:"","accept-language":"en-US"}}}getParameters(e){return{url:this.settings.url,params:{q:e.query,key:e.key,format:"json",addressdetails:1,limit:e.limit||this.settings.params.limit,countrycodes:e.countrycodes||this.settings.params.countrycodes,"accept-language":e.lang||this.settings.params["accept-language"]}}}handleResponse(e){return 0===e.length?[]:e.map((e=>({lon:e.lon,lat:e.lat,address:{name:e.address.neighbourhood||"",road:e.address.road||"",postcode:e.address.postcode,city:e.address.city||e.address.town,state:e.address.state,country:e.address.country},original:{formatted:e.display_name,details:e.address}})))}}class U{constructor(){this.settings={url:"https://dev.virtualearth.net/REST/v1/Locations",callbackName:"jsonp",params:{query:"",key:"",includeNeighborhood:0,maxResults:10}}}getParameters(e){return{url:this.settings.url,callbackName:this.settings.callbackName,params:{query:e.query,key:e.key,includeNeighborhood:e.includeNeighborhood||this.settings.params.includeNeighborhood,maxResults:e.maxResults||this.settings.params.maxResults}}}handleResponse(e){const{resources:t}=e.resourceSets[0];return 0===t.length?[]:t.map((e=>({lon:e.point.coordinates[1],lat:e.point.coordinates[0],address:{name:e.name},original:{formatted:e.address.formattedAddress,details:e.address}})))}}class G{constructor(){this.settings={url:"https://api.opencagedata.com/geocode/v1/json?",params:{q:"",key:"",limit:10,countrycode:"",pretty:1,no_annotations:1}}}getParameters(e){return{url:this.settings.url,params:{q:e.query,key:e.key,limit:e.limit||this.settings.params.limit,countrycode:e.countrycodes||this.settings.params.countrycodes}}}handleResponse(e){return 0===e.results.length?[]:e.results.map((e=>({lon:e.geometry.lng,lat:e.geometry.lat,address:{name:e.components.house_number||"",road:e.components.road||"",postcode:e.components.postcode,city:e.components.city||e.components.town,state:e.components.state,country:e.components.country},original:{formatted:e.formatted,details:e.components}})))}}function z(e){return new Promise(((t,s)=>{const r=function(e,t){t&&"object"==typeof t&&(e+=(/\?/u.test(e)?"&":"?")+H(t));return e}(e.url,e.data),n={method:"GET",mode:"cors",credentials:"same-origin"};e.jsonp?function(e,t,s){const{head:r}=document,n=document.createElement("script"),o=`f${Math.round(Math.random()*Date.now())}`;n.setAttribute("src",`${e+(e.indexOf("?")>0?"&":"?")+t}=${o}`),window[o]=e=>{window[o]=void 0,setTimeout((()=>r.removeChild(n)),0),s(e)},r.append(n)}(r,e.callbackName,t):fetch(r,n).then((e=>e.json())).then(t).catch(s)}))}function H(e){return Object.keys(e).reduce(((t,s)=>(t.push("object"==typeof e[s]?H(e[s]):`${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`),t)),[]).join("&")}const K=y.cssClasses;class J{constructor(e,t){this.Base=e,this.layerName=E("geocoder-layer-"),this.layer=new r({name:this.layerName,source:new n,displayInLayerSwitcher:!1}),this.options=e.options,this.options.provider="string"==typeof this.options.provider?this.options.provider.toLowerCase():this.options.provider,this.provider=this.newProvider(),this.els=t,this.lastQuery="",this.container=this.els.container,this.registeredListeners={mapClick:!1},this.setListeners()}setListeners(){let e,t;const s=e=>{e.stopPropagation(),R(this.els.control,K.glass.expanded)?this.collapse():this.expand()};this.els.input.addEventListener("keypress",(e=>{const t=e.target.value.trim();(e.key?"Enter"===e.key:e.which?13===e.which:!!e.keyCode&&13===e.keyCode)&&(e.preventDefault(),this.query(t))}),!1),this.els.input.addEventListener("click",(e=>e.stopPropagation()),!1),this.els.input.addEventListener("input",(s=>{const r=s.target.value.trim();0!==r.length?P(this.els.reset,K.hidden):N(this.els.reset,K.hidden),this.options.autoComplete&&r!==t&&(t=r,e&&clearTimeout(e),e=setTimeout((()=>{r.length>=this.options.autoCompleteMinLength&&this.query(r)}),this.options.autoCompleteTimeout))}),!1),this.els.reset.addEventListener("click",(()=>{this.els.input.focus(),this.els.input.value="",this.lastQuery="",N(this.els.reset,K.hidden),this.clearResults()}),!1),this.options.targetType===v&&this.els.button.addEventListener("click",s,!1)}query(e){this.provider||(this.provider=this.newProvider());const t=this.provider.getParameters({query:e,key:this.options.key,lang:this.options.lang,countrycodes:this.options.countrycodes,limit:this.options.limit});if(this.lastQuery===e&&this.els.result.firstChild)return;this.lastQuery=e,this.clearResults(),N(this.els.reset,K.spin);const s={url:t.url,data:t.params};t.callbackName&&(s.jsonp=!0,s.callbackName=t.callbackName),z(s).then((e=>{this.options.debug&&console.info(e),P(this.els.reset,K.spin);const t=this.provider.handleResponse(e);t&&(this.createList(t),this.listenMapClick())})).catch((()=>{P(this.els.reset,K.spin);const e=I("li","<h5>Error! No internet connection?</h5>");this.els.result.append(e)}))}createList(e){const t=this.els.result;e.forEach((e=>{let s;if(this.options.provider===k)s=`<span class="${K.road}">${e.address.name}</span>`;else s=this.addressTemplate(e.address);const r=I("li",`<a href="#">${s}</a>`);r.addEventListener("click",(t=>{t.preventDefault(),this.chosen(e,s,e.address,e.original)}),!1),t.append(r)}))}chosen(e,t,s,r){const n=this.Base.getMap(),o=[Number.parseFloat(e.lon),Number.parseFloat(e.lat)],a=n.getView().getProjection(),i=c.transform(o,"EPSG:4326",a);let{bbox:l}=e;l&&(l=c.transformExtent([parseFloat(l[2]),parseFloat(l[0]),parseFloat(l[3]),parseFloat(l[1])],"EPSG:4326",a));const d={formatted:t,details:s,original:r};if(!1===this.options.keepOpen&&this.clearResults(!0),!0===this.options.preventDefault)this.Base.dispatchEvent({type:f,address:d,coordinate:i,bbox:l,place:e});else{l?n.getView().fit(l,{duration:500}):function(e,t,s=500,r=2.388657133911758){e.getView().animate({duration:s,resolution:r},{duration:s,center:t})}(n,i);const t=this.createFeature(i,d);this.Base.dispatchEvent({type:f,address:d,feature:t,coordinate:i,bbox:l,place:e})}}createFeature(e){const t=new a(new o(e));return this.addLayer(),t.setStyle(this.options.featureStyle),t.setId(E("geocoder-ft-")),this.getSource().addFeature(t),t}addressTemplate(e){const t=[];return e.name&&t.push(['<span class="',K.road,'">{name}</span>'].join("")),(e.road||e.building||e.house_number)&&t.push(['<span class="',K.road,'">{building} {road} {house_number}</span>'].join("")),(e.city||e.town||e.village)&&t.push(['<span class="',K.city,'">{postcode} {city} {town} {village}</span>'].join("")),(e.state||e.country)&&t.push(['<span class="',K.country,'">{state} {country}</span>'].join("")),A(t.join("<br>"),e)}newProvider(){switch(this.options.provider){case k:return new Q(this.options);case x:return new B;case q:return new V;case C:return new U;case S:return new G;default:return this.options.provider}}expand(){P(this.els.input,K.spin),N(this.els.control,K.glass.expanded),window.setTimeout((()=>this.els.input.focus()),100),this.listenMapClick()}collapse(){this.els.input.value="",this.els.input.blur(),N(this.els.reset,K.hidden),P(this.els.control,K.glass.expanded),this.clearResults()}listenMapClick(){if(this.registeredListeners.mapClick)return;const e=this,t=this.Base.getMap().getTargetElement();this.registeredListeners.mapClick=!0,t.addEventListener("click",{handleEvent(s){e.clearResults(!0),t.removeEventListener(s.type,this,!1),e.registeredListeners.mapClick=!1}},!1)}clearResults(e){e&&this.options.targetType===v?this.collapse():function(e){for(;e.firstChild;)e.firstChild.remove()}(this.els.result)}getSource(){return this.layer.getSource()}addLayer(){let e=!1;const t=this.Base.getMap();t.getLayers().forEach((t=>{t===this.layer&&(e=!0)})),e||t.addLayer(this.layer)}}class W extends e{constructor(e=b,r={}){let n,o;L("string"==typeof e,"@param `type` should be string!"),L(e===b||e===w,`@param 'type' should be '${b}'\n      or '${w}'!`),L("object"==typeof r,"@param `options` should be object!"),j.featureStyle=[new t({image:new s({scale:.7,src:"//cdn.rawgit.com/jonataswalker/map-utils/master/images/marker.png"})})];const a=new D(r);if(e===b&&(n=a.els.container),super({element:n}),!(this instanceof W))return new W;this.options=function(e,t){const s={};return Object.keys(e).forEach((t=>{Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t])})),Object.keys(t).forEach((e=>{Object.prototype.hasOwnProperty.call(t,e)&&(s[e]=t[e])})),s}(j,r),this.container=n,e===b&&(o=new J(this,a.els),this.layer=o.layer)}getLayer(){return this.layer}getSource(){return this.getLayer().getSource()}setProvider(e){this.options.provider=e}setProviderKey(e){this.options.key=e}}return W}));
//# sourceMappingURL=ol-geocoder.js.map
