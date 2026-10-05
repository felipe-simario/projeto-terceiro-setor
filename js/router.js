import {
    templateInicio,
    templateSobre,
    templateServicos,
    templateProjetos,
    templateVoluntariado,
    templateDoacoes,
    templateCampanhas,
    templateCadastro,
    templateContato
} from "./templates.js";

const app = document.querySelector("#app");

const rotas = {
    "#inicio": templateInicio,
    "#sobre": templateSobre,
    "#servicos": templateServicos,
    "#projetos": templateProjetos,
    "#voluntariado": templateVoluntariado,
    "#doacoes": templateDoacoes,
    "#campanhas": templateCampanhas,
    "#cadastro": templateCadastro,
    "#contato": templateContato
};

export function renderizarRota() {

    const rotaAtual = window.location.hash || "#inicio";
    const template = rotas[rotaAtual];

    if (!template) {

        app.innerHTML = `
            <section class="content-section">
                <h2 tabindex="-1">Página não encontrada</h2>
                <p>
                    A página solicitada não existe.
                </p>
                <a href="#inicio">
                    Voltar para o início
                </a>
            </section>
        `;

        const titulo = app.querySelector("h2");

        if (titulo) {
            titulo.focus();
        }

        return;
    }

    app.innerHTML = template();

    const titulo = app.querySelector("h2");

    if (titulo) {
        titulo.focus();
    }
}
 
