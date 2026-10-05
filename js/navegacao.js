export function inicializarNavegacao() {

    const menuToggle = document.querySelector("#menu-toggle");
    const menu = document.querySelector("#site-menu");
    const links = document.querySelectorAll(
        ".site-nav__link, .site-nav__sublink"
    );

    if (!menuToggle || !menu) {
        return;
    }

    menuToggle.addEventListener("click", function() {

        const menuAberto = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!menuAberto)
        );

        menuToggle.setAttribute(
            "aria-label",
            menuAberto ? "Abrir menu" : "Fechar menu"
        );

        menu.classList.toggle(
            "site-nav__list--open",
            !menuAberto
        );
    });

    links.forEach(function(link) {

        link.addEventListener("click", function() {

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");

            menu.classList.remove("site-nav__list--open");
        });
    });

    menuToggle.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");

            menu.classList.remove("site-nav__list--open");

            menuToggle.focus();
        }
    });
}
 
