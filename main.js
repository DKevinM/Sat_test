var map = L.map('map').setView([53.55, -113.5], 7); // Center on Edmonton

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
