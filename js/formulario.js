export function inicializarFormulario() {

const formulario = document.querySelector("#form-voluntario");

if (!formulario) {
    return;
}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const feedback = document.querySelector("#form-feedback");

    if (!formulario.checkValidity()) {

        formulario.reportValidity();

        feedback.textContent = "Verifique os campos obrigatórios.";

        return;
    }

    feedback.textContent =
        "Cadastro enviado com sucesso!";

    formulario.reset();
});

}
