

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhcnBlNjc4IiwiYSI6ImNseGl2dXVtaDFpencyanF0eHJvNXVmM24ifQ.U-PtA_gyYq-2_jtL8_S6tw';
 const map = new mapboxgl.Map({
    container: 'map', // container ID
    style : "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]  listing.geometry.coordinates
    zoom: 9 ,// starting zoom
  }); 
    const marker = new mapboxgl.Marker({color :"red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ofset:25})
    .setHTML(`<h4>${listing.location}</h4> <p>Exact Location provied after booking</p>`)
   )
   .addTo(map);
