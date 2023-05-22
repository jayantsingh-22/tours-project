/*eslint-disable*/

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiZHJpcGlnbyIsImEiOiJjbGh5eG9qbW8xOGdhM2xtd2JsZ2wyMWhkIn0.75UZ_V0iOUf8yKvrTrI6EQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dripigo/clhyz89p0026g01r09nor1inr/draft',
  scrollZoom: false,
  // center: [-118.251218, 34.031228],
  // zoom: 5,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  //create marker
  const el = document.createElement('div');
  el.className = 'marker';

  //Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  //Add Popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});

// var map = L.map('map', {
//   center: [34.031228, -118.251218],
//   zoom: 9,
// });

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// // map.locate({ setView: true, maxZoom: 8 });

// // Handle the location found event
// // function onLocationFound(e) {
// //   var radius = e.accuracy / 2;
// //   if (typeof marker !== 'undefined') {
// //     // If the marker already exists, update its position
// //     marker.setLatLng(e.latlng);
// //   } else {
// //     // Create a new marker at the user's location
// //     marker = L.marker(e.latlng).addTo(map);
// //   }
// //   marker
// //     .bindPopup('You are within ' + radius + ' meters from this point')
// //     .openPopup();
// //   L.circle(e.latlng, radius).addTo(map);
// // }
// // function onLocationError(e) {
// //   alert(e.message);
// // }

// // // Add event listeners for location found and location error
// // map.on('locationfound', onLocationFound);
// // map.on('locationerror', onLocationError);

// var popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent('You clicked the map at ' + e.latlng.toString())
//     .openOn(map);
// }

// map.on('click', onMapClick);

// // const bounds = new mapboxgl.LngLatBounds();

// // locations.forEach((loc) => {
// //   //create marker
// //   const el = document.createElement('div');
// //   el.className = 'marker';

// //   //Add marker
// //   new mapboxgl.Marker({
// //     element: el,
// //     anchor: 'bottom',
// //   })
// //     .setLngLat(loc.coordinates)
// //     .addTo(map);

// //   bounds.extend(loc.coordinates);
// // });

// var bounds = L.latLngBounds();

// // Iterate over the locations array
// locations.forEach(function (loc) {
//   // Create a marker with a custom icon
//   var marker = L.marker(loc.coordinates, {
//     icon: L.divIcon({
//       className: 'marker',
//       html: '<div></div>',
//       iconSize: [20, 20],
//       iconAnchor: [10, 20],
//       popupAnchor: [0, -200],
//     }),
//   }).addTo(map);

//   // Extend the bounds to include the marker's position
//   bounds.extend(marker.getLatLng());
// });

// Fit the map to the bounds of all markers
