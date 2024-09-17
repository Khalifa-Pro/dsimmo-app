document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Ajoute un événement de clic pour afficher/masquer le menu sur mobile
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}

function initMap() {
    // Crée la carte, centrée sur une position spécifique (par exemple, Paris)
    var location = { lat: 48.8566, lng: 2.3522 }; // Coordonnées pour Paris
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12, // Niveau de zoom
        center: location
    });

    // Ajouter un marqueur à cette position
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

