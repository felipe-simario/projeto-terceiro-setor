import { renderizarRota } from "./router.js";
import { inicializarNavegacao } from "./navegacao.js";

function inicializarAplicacao() {

inicializarNavegacao();

renderizarRota();


}

window.addEventListener("hashchange", renderizarRota);

document.addEventListener(
"DOMContentLoaded",
inicializarAplicacao
);
