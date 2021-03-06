var map = L.map('mapid').setView([-23.5605429,-46.3145073], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmlhYXJ0aW11bmRvIiwiYSI6ImNrZ2JhcWl6NzBmMHkyc28zNnZjZThrdXYifQ.xK5msJln0nytiRMZNDGwDw'
}).addTo(map);
//create icon

const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

//create popup overlay
// L.marker([-23.5605429,-46.3145073],{icon})
//     .addTo(map)
//     .bindPopup(popup)


    function addMarker({id,name,lat,lng}){
        const popup = L.popup({
            closeButton:false,
            className:'map-popup',
            minWidth:240,
            minHeight:240
    }).setContent(`${name}<a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)
    

        // create and add marker
        L
        .marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)
    }

    const orphanagesSpan = document.querySelectorAll('.orphanages span')
    orphanagesSpan.forEach(span =>{
        const orphanage = {
            id: span.dataset.id,
            name: span.dataset.name,
            lat: span.dataset.lat,
            lng: span.dataset.lng
        }

        addMarker(orphanage)
    })
    