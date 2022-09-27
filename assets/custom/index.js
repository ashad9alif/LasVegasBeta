// Add leaflet basemap

map = L.map('map',{
    center:[36.24550768205646,-115.19151439864532],
    zoom:11
});

map.attributionControl.setPrefix('')

//.setView([36.184550768205646,-115.19151439864532], 11); 

map.options.minZoom=11;
map.options.maxZoom=11;

// var map = L.map('map', { attributionControl:false });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '© OpenStreetMap'
}).addTo(map);






// Add Data Layer + Pop Up

// var LasLayer = L.geoJSON(LAS, {
//     style: style_LAS,

// }).addTo(map).bindPopup( "<h2> ALIF" + " <p> <img src='./Images/Rancho.jpg'" +  "class = PopUpImage " +"/>");


// Label 
var layerGroup = L.geoJSON(LAS, {
    style: style_LAS,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h1>'+feature.properties.Name + '</h1>' +  " <p> <img src='./Images/Rancho.jpg'" + "class = PopUpImage " + "/>");
    }
  }).addTo(map);




// L.geoJSON(us_states).addTo(map);

// var XX = L.geoJSON(LAS).addTo(map).on('click', function(){
// 	sidebar.setContent('Somewhere else').show();
// });



