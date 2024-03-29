<!DOCTYPE html>
<html>

<head>
	<!-- OPEN LAYERS API -->
	<link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/css/ol.css" type="text/css">
	<style>
		.map {
			height: 400px;
			width: 100%;
		}
	</style>

	<script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js"></script>
	<script src="weathermap.js"></script>

	<title>Weather Map</title>



</head>
<body>

	<p> //<!-- paragraph marker added here for spacing -->
		<button onclick="panHome()">Pan to Home</button>

		<button onclick="panLondon()">Pan to London</button>

		<button onclick="panNY()">Pan to NY</button>

		<button onclick="opacityLower()">Lower Opacity</button>

		<button onclick="opacityHigher()">Higher Opacity</button>
	</p>


	 <div id="map" class="map"></div>


	<footer>
		<p>This tutorial is based on code from: <a href="http://openlayers.org/en/latest/examples/animation.html">Open Layers View Animation</a></p>
	</footer>
</body>
</html>
