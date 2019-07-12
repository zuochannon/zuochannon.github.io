var view;
var map;
var initialLocation;
var london;

function init() {
  initialLocation = ol.proj.fromLonLat([41.043316, 28.862457]); // [41.043316, 28.862457] africa coods? [40.730610, -73.935242]coords to NY
  london = ol.proj.fromLonLat([-0.12755, 51.507222]);

  view = new ol.View({
    center: initialLocation,
    zoom: 6
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

 function panHome() {
   view.animate({
     center: initialLocation,
     duration: 2000
   });
 }

function panLondon() {
  view.animate({
    center: london, // "London" location
    duration: 2000
  });
}





window.onload = init;
