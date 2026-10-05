import { salvarCadastro } from "./storage.js";

export function inicializarFormulario() {

    const formulario = document.querySelector("#form-voluntario");

    if (!formulario) {
        return;
    }

    const feedback = document.querySelector("#form-feedback");

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const campos = formulario.querySelectorAll(
            "input, select, textarea"
        );

        let formularioValido = true;

        campos.forEach(function(campo) {

            campo.removeAttribute("aria-invalid");

            const mensagemErro = document.querySelector(
                `#${campo.id}-erro`
            );

            if (mensagemErro) {
                mensagemErro.textContent = "";
            }

            if (!campo.checkValidity()) {

                formularioValido = false;

                campo.setAttribute("aria-invalid", "true");

                if (mensagemErro) {
                    mensagemErro.textContent =
                        campo.validationMessage;
                }
            }
        });

        if (!formularioValido) {

            feedback.textContent =
                "Existem campos que precisam ser corrigidos.";

            formulario.reportValidity();

            const primeiroCampoInvalido =
                formulario.querySelector(":invalid");

            if (primeiroCampoInvalido) {
                primeiroCampoInvalido.focus();
            }

            return;
        }

        const dadosFormulario = new FormData(formulario);

        const cadastro = Object.fromEntries(dadosFormulario.entries());

        salvarCadastro(cadastro);

        feedback.textContent =
            "Cadastro enviado com sucesso!";

        formulario.reset();

        campos.forEach(function(campo) {
            campo.removeAttribute("aria-invalid");
        });
    });
}
