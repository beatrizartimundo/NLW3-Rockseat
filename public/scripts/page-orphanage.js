const options={
    dragging: false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}


var map = L.map('mapid',options).setView([-23.5605429,-46.3145073], 13);

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

//const spanLat = document.querySelector('span[data-lat]')
//const spanLng = document.querySelector('span[data-lng]')

L.marker([-23.5605429,-46.3145073],{icon})
    .addTo(map)
    
    // image galery

    function selectImage(event){
        const button = event.currentTarget
        console.log(button.children)
        //remover todas as classes selecionadas 
        const buttons = document.querySelectorAll(".images button")
        buttons.forEach((button)=>{
            button.classList.remove("active")
        })
        // selecionar a imagem clicada
        const image = button.children[0]
        const imageContainer = document.querySelector(".orphanage-details > img")

        imageContainer.src= image.src
        //adiciona o active na imagem
        button.classList.add('active')
    }