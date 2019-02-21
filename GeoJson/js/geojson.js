// Setting up the map view.

var mymap = L.map('mapid').setView([51.505, -0.09], 2);

// Addint a tile layer.
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 21,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWJkdWxsYWgxOTc2IiwiYSI6ImNqc2F4Z2s1ajA0YWczem9hb2YwMjUyMDUifQ.MpY_iK6tSYYtLijir8Je9g'
}).addTo(mymap);



// Loading the GeoJSON data file into the map.
function onEachFeature(feature, layer){
   var popupContent = "";
    if (feature.properties) {
        //loop to add feature property names and values to html string
        for (var property in feature.properties){
            popupContent += "<p>" + property + ": " + feature.properties[property] + "</p>";
        }
        layer.bindPopup(popupContent);
    };
};

// AJAX request.
 $.ajax("data/MegaCity.geojson", {
        dataType: "json",
        success: function(response){

			//create a Leaflet GeoJSON layer and add it to the map
            L.geoJson(response, {
				onEachFeature: onEachFeature
            }).addTo(mymap);
		}
 });
