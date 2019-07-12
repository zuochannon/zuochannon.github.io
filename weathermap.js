var view;
var map;
var initialLocation;
var london;

function init() {
  initialLocation = ol.proj.fromLonLat([40.730610, -73.935242]); //coords to NY
  london = ol.proj.fromLonLat([-0.12755, 51.507222]);

  view: new ol.View({
    center: initialLocation,
    zoom: 4
  });

  map = new ol.Map({
     target: 'map', // The "Target" is our <div> name
     layers: [
       new ol.layer.Tile({
         source: new ol.source.OSM()
       })
     ],
     loadTilesWhileAnimating: true,
     view: view
   });
 }

function panLondon() {
  view.animatie({
    center: london, // "London" location
    duration: 2000
  });
}

window.onload = init;
