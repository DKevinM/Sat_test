var map = L.map('map').setView([53.55, -113.5], 7); // Center on Edmonton
// Hardcoded monthly average NO₂ values for January 2024
var no2Stations = [
  { lat: 53.5461, lon: -113.4938, station: "Edmonton Central", value: 33.8 },
  { lat: 53.5557, lon: -113.4687, station: "Edmonton East", value: 30.2 },
  { lat: 53.6436, lon: -113.6220, station: "St. Albert", value: 28.4 }
];

// Add to map
no2Stations.forEach(function(d) {
  L.circleMarker([d.lat, d.lon], {
    radius: 7,
    fillColor: "red",
    color: "#800",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.65
  })
  .bindPopup(`<strong>${d.station}</strong><br>NO₂: ${d.value} ppb`)
  .addTo(map);
});

// Base map
var baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
baseMap.addTo(map);

// OMI NO2 from NASA GIBS (example for Jan 15, 2024)
var no2Layer = L.tileLayer.wms('https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi', {
  layers: 'OMI_NO2d',
  format: 'image/png',
  transparent: true,
  time: '2024-01-15',
  attribution: 'NASA GIBS / OMI NO₂'
}).addTo(map);

// Add toggle control
L.control.layers(null, {
  "OMI NO₂ (Jan 15)": no2Layer
}).addTo(map);
