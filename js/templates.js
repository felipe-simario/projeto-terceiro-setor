export function templateInicio() {
return ` <section id="inicio" class="content-section">


        <h2>Casa do Idoso Vovô Nunuca</h2>

        <p>
            A Casa do Idoso Vovô Nunuca da Sociedade de São Vicente de Paulo
            de Santo Antônio do Amparo é uma Instituição de Longa
            Permanência para Idosos.
        </p>

        <p>
            A instituição oferece acolhimento, moradia, higiene,
            alimentação, saúde e bem-estar aos idosos acolhidos.
        </p>

    </section>
`;

}

export function templateSobre() {
return ` <section id="sobre" class="content-section">

        <h2>Sobre Nós</h2>

        <p>
            A Casa do Idoso Vovô Nunuca é uma instituição filantrópica,
            beneficente e sem fins lucrativos.
        </p>

        <p>
            A instituição atende idosos em situação de vulnerabilidade
            social, oferecendo suporte nas necessidades básicas de
            moradia, higiene, saúde, alimentação e bem-estar.
        </p>

        <p>
            Atualmente, a instituição abriga 33 assistidos,
            sendo 20 homens e 13 mulheres.
        </p>

    </section>
`;


}

export function templateServicos() {
return ` <section id="servicos" class="content-section">

        <h2>Serviços &amp; Estrutura Operacional</h2>

        <ul class="content-list">

            <li class="content-list__item">
                <h3>Hospitalidade &amp; Acolhimento</h3>
                <p>
                    Acompanhamento da rotina diária e acomodação
                    com suporte integral.
                </p>
            </li>

            <li class="content-list__item">
                <h3>Serviços de Saúde &amp; Higiene</h3>
                <p>
                    Central própria de esterilização de materiais.
                </p>
            </li>

            <li class="content-list__item">
                <h3>Manutenção &amp; Infraestrutura</h3>
                <p>
                    Lavanderia própria e manutenção de equipamentos.
                </p>
            </li>

            <li class="content-list__item">
                <h3>Nutrição e Bem-estar</h3>
                <p>
                    Preparo de refeições e atividades de socialização.
                </p>
            </li>

        </ul>

    </section>
`;

}

export function templateProjetos() {
return ` <section id="projetos" class="content-section">

        <h2>Projetos e Ações Sociais</h2>

        <p>
            A Casa do Idoso Vovô Nunuca desenvolve ações voltadas
            ao acolhimento, cuidado e bem-estar dos idosos.
        </p>

        <p>
            A comunidade pode contribuir através do voluntariado,
            de doações e da participação em campanhas.
        </p>

        <ul class="content-list">

            <li class="content-list__item">
                <a href="#voluntariado">
                    Voluntariado
                </a>
            </li>

            <li class="content-list__item">
                <a href="#doacoes">
                    Doações
                </a>
            </li>

            <li class="content-list__item">
                <a href="#campanhas">
                    Campanhas
                </a>
            </li>

        </ul>

    </section>
`;

}

export function templateVoluntariado() {
return ` <section id="voluntariado" class="content-section">

        <h2>Voluntariado</h2>

        <p>
            O trabalho voluntário é uma importante forma de contribuir
            diretamente com a instituição.
        </p>

        <h3>Como participar</h3>

        <ol class="content-list">

            <li class="content-list__item">
                Entre em contato com a instituição.
            </li>

            <li class="content-list__item">
                Informe seu interesse em realizar trabalho voluntário.
            </li>

            <li class="content-list__item">
                Conheça as necessidades atuais da instituição.
            </li>

            <li class="content-list__item">
                Combine os dias e horários de participação.
            </li>

        </ol>

        <h3>Atividades voluntárias</h3>

        <ul class="content-list">

            <li class="content-list__item">
                Atividades de convivência com os idosos.
            </li>

            <li class="content-list__item">
                Atividades recreativas e de socialização.
            </li>

            <li class="content-list__item">
                Auxílio em eventos e campanhas.
            </li>

        </ul>

    </section>
`;

}

export function templateDoacoes() {
return ` <section id="doacoes" class="content-section">

        <h2>Doações</h2>

        <p>
            As doações são fundamentais para auxiliar na manutenção
            da instituição e no atendimento dos idosos acolhidos.
        </p>

        <h3>Como contribuir</h3>

        <ul class="content-list">

            <li class="content-list__item">
                Doações financeiras.
            </li>

            <li class="content-list__item">
                Doação de alimentos.
            </li>

            <li class="content-list__item">
                Doação de produtos de higiene.
            </li>

            <li class="content-list__item">
                Doação de materiais necessários à instituição.
            </li>

        </ul>

    </section>
`;

}

export function templateCampanhas() {
return ` <section id="campanhas" class="content-section">

        <h2>Campanhas de Doação</h2>

        <p>
            A instituição realiza campanhas para arrecadar recursos
            e materiais destinados à manutenção e ao atendimento
            dos idosos.
        </p>

        <h3>Participe das campanhas</h3>

        <p>
            A comunidade pode contribuir divulgando as campanhas,
            realizando doações ou ajudando na organização das ações.
        </p>

    </section>
`;

}

export function templateCadastro() {
return ` <section class="content-section">

        <h2>Quero ser voluntário</h2>

        <p>
            Preencha o formulário abaixo para demonstrar seu interesse
            em colaborar com a Casa do Idoso Vovô Nunuca.
        </p>

        <form id="form-voluntario" class="form">

            <fieldset class="form__group">

                <legend class="form__legend">
                    Dados pessoais
                </legend>

                <p class="form__field">
                    <label for="nome">
                        Nome completo:
                    </label>

                    <input
                        class="form__input"
                        type="text"
                        id="nome"
                        name="nome"
                        minlength="3"
                        required
                    >
                </p>

                <p class="form__field">
                    <label for="cpf">
                        CPF:
                    </label>

                    <input
                        class="form__input"
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        required
                    >
                </p>

                <p class="form__field">
                    <label for="data-nascimento">
                        Data de nascimento:
                    </label>

                    <input
                        class="form__input"
                        type="date"
                        id="data-nascimento"
                        name="data-nascimento"
                        required
                    >
                </p>

                <p class="form__field">
                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        class="form__input"
                        type="email"
                        id="email"
                        name="email"
                        required
                    >
                </p>

                <p class="form__field">
                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        class="form__input"
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        required
                    >
                </p>

                <p class="form__field">
                    <label for="cep">
                        CEP:
                    </label>

                    <input
                        class="form__input"
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        pattern="[0-9]{5}-[0-9]{3}"
                        required
                    >
                </p>

            </fieldset>


            <fieldset class="form__group">

                <legend class="form__legend">
                    Endereço
                </legend>

                <p class="form__field">
                    <label for="endereco">
                        Endereço:
                    </label>

                    <input
                        class="form__input"
                        type="text"
                        id="endereco"
                        name="endereco"
                        required
                    >
                </p>

                <p class="form__field">
                    <label for="numero">
                        Número:
                    </label>

                    <input
                        class="form__input"
                        type="number"
                        id="numero"
                        name="numero"
                        min="1"
                        required
                    >
                </p>

                <p class="form__field">
                    <label for="cidade">
                        Cidade:
                    </label>

                    <input
                        class="form__input"
                        type="text"
                        id="cidade"
                        name="cidade"
                        required
                    >
                </p>

                <p class="form__field">
                    <label for="estado">
                        Estado:
                    </label>

                    <select
                        class="form__select"
                        id="estado"
                        name="estado"
                        required
                    >
                        <option value="">
                            Selecione
                        </option>

                        <option value="MG">
                            Minas Gerais
                        </option>

                        <option value="SP">
                            São Paulo
                        </option>

                        <option value="RJ">
                            Rio de Janeiro
                        </option>

                        <option value="ES">
                            Espírito Santo
                        </option>

                        <option value="PR">
                            Paraná
                        </option>

                        <option value="SC">
                            Santa Catarina
                        </option>

                        <option value="RS">
                            Rio Grande do Sul
                        </option>

                        <option value="BA">
                            Bahia
                        </option>

                        <option value="GO">
                            Goiás
                        </option>

                        <option value="DF">
                            Distrito Federal
                        </option>

                    </select>
                </p>

            </fieldset>


            <fieldset class="form__group">

                <legend class="form__legend">
                    Interesse em voluntariado
                </legend>

                <p class="form__field">
                    <label for="area">
                        Área de interesse:
                    </label>

                    <select
                        class="form__select"
                        id="area"
                        name="area"
                        required
                    >
                        <option value="">
                            Selecione uma opção
                        </option>

                        <option value="convivencia">
                            Convivência com os idosos
                        </option>

                        <option value="recreacao">
                            Recreação e socialização
                        </option>

                        <option value="eventos">
                            Eventos e campanhas
                        </option>

                        <option value="outros">
                            Outras atividades
                        </option>

                    </select>
                </p>

                <p>
                    <span>Disponibilidade:</span>
                </p>

                <p class="form__field">
                    <input
                        type="radio"
                        id="manha"
                        name="periodo"
                        value="manha"
                        required
                    >

                    <label for="manha">
                        Manhã
                    </label>
                </p>

                <p class="form__field">
                    <input
                        type="radio"
                        id="tarde"
                        name="periodo"
                        value="tarde"
                    >

                    <label for="tarde">
                        Tarde
                    </label>
                </p>

                <p class="form__field">
                    <input
                        type="radio"
                        id="noite"
                        name="periodo"
                        value="noite"
                    >

                    <label for="noite">
                        Noite
                    </label>
                </p>

                <p class="form__field">
                    <label for="mensagem">
                        Conte um pouco sobre como gostaria de ajudar:
                    </label>

                    <textarea
                        class="form__textarea"
                        id="mensagem"
                        name="mensagem"
                        rows="6"
                        maxlength="500"
                    ></textarea>
                </p>

            </fieldset>


            <fieldset class="form__group">

                <legend class="form__legend">
                    Autorização
                </legend>

                <p class="form__field">

                    <input
                        type="checkbox"
                        id="autorizacao"
                        name="autorizacao"
                        required
                    >

                    <label for="autorizacao">
                        Autorizo o envio dos meus dados para contato
                        relacionado ao trabalho voluntário.
                    </label>

                </p>

            </fieldset>


            <p>

                <button
                    type="submit"
                    class="button form__button"
                >
                    Enviar cadastro
                </button>

                <button
                    type="reset"
                    class="button button--secondary"
                >
                    Limpar formulário
                </button>

            </p>

            <p
                id="form-feedback"
                aria-live="polite"
            ></p>

        </form>

    </section>
`;
}

export function templateContato() {
return ` <section id="contato" class="content-section">

        <h2>Informações da Instituição</h2>

        <address>
            <p>
                <strong>Razão Social:</strong>
                Casa Do Idoso Vovo Nunuca
            </p>

            <p>
                <strong>CNPJ:</strong>
                02.929.814/0001-30
            </p>

            <p>
                <strong>Endereço:</strong>
                Rua Antônio Borges da Silva, nº 435 —
                Quintiliano, Santo Antônio do Amparo - MG
            </p>

            <p>
                <strong>CEP:</strong>
                37262-000
            </p>
        </address>

    </section>
`;

}

