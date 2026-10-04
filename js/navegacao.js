export function inicializarNavegacao() {

const menuToggle = document.querySelector("#menu-toggle");
const links = document.querySelectorAll(".site-nav__link, .site-nav__sublink");

if (!menuToggle) {
    return;
}

links.forEach(function(link) {

    link.addEventListener("click", function() {
        menuToggle.checked = false;
    });

});
}
