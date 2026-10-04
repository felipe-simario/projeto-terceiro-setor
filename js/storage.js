const CHAVE_CADASTROS = "cadastrosVoluntarios";

export function salvarCadastro(cadastro) {


const cadastros = obterCadastros();

cadastros.push(cadastro);

localStorage.setItem(
    CHAVE_CADASTROS,
    JSON.stringify(cadastros)
);


}

export function obterCadastros() {


const dados = localStorage.getItem(CHAVE_CADASTROS);

if (!dados) {
    return [];
}

return JSON.parse(dados);

}
