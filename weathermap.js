var view;
var map;
var initialLocation;
var london;
var newyord;
var opacityStrength

function init() {
  initialLocation = ol.proj.fromLonLat([41.043316, 28.862457]); // [41.043316, 28.862457] africa coods?
  london = ol.proj.fromLonLat([-0.12755, 51.507222]);
  newyork = ol.proj.fromLonLat([40.7535949,-73.9947243]); //[40.730610, -73.935242]coords to NY
  opacityStrength = 1.0

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
     view: view,
     opacity: opacityStrength
   });
 }

 function panHome() {
   view.animate({
     center: initialLocation,
     duration: 2000
   })
 }

function panLondon() {
  view.animate({
    center: london, // "London" location
    duration: 2000
  })
}

function panNY() {
  view.animate({
    center: newyork
  })
}

function opacityLower() {
  document.getElementById("map").style.opacity = "0.5";//opacityStrength.toString(opacityStrength-.05)
}

function opacityHigher() {
  document.getElementById("map").style.opacity = "1.0";
}

window.onload = init;
