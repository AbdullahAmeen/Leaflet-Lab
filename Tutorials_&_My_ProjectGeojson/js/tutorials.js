// Setting up the map view.

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// Addint a tile layer.
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWJkdWxsYWgxOTc2IiwiYSI6ImNqc2F4Z2s1ajA0YWczem9hb2YwMjUyMDUifQ.MpY_iK6tSYYtLijir8Je9g'
}).addTo(mymap);


// Adding markers to our map.
var marker = L.marker([51.5, -0.09]).addTo(mymap);

// Adding a circle marker to our map.
var circle = L.circle([51.508, -0.11], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
//Adding another circle marker to our map.
var circle = L.circle([51.418723, -0.087666], {
    color: 'blue',
    fillColor: 'white',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
//Adding a polyong to our map.
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047], 
]).addTo(mymap);

//Adding a popup message on our markers above.
marker.bindPopup("<strong>Hello world!</strong><br />I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup();

// Adding the cick function to show the coordinate of the place where the user click.
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("The coordinate for this point is: " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

// GeoJSON Tutorial.

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};
L.geoJSON(geojsonFeature).addTo(mymap);


var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];
var myLayer = L.geoJSON().addTo(mymap);
myLayer.addData(geojsonFeature);

var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(mymap);
