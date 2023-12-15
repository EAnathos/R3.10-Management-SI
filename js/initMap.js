// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 45.223428;
var lon = 0.417917;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {

    // Nous définissons le dossier qui contiendra les marqueurs
    var iconBase = '../images/';
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);

    var myIcon = L.icon({
        iconUrl: iconBase + "tente-de-camping.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76],
    });

    // Nous ajoutons un marqueur
    var marker = L.marker([45.223428, 0.417917], { icon: myIcon }).addTo(macarte);
    // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
    marker.bindPopup("Sous les tilleuls");
}
window.onload = function(){
// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
initMap(); 
};