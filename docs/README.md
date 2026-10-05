# Casa do Idoso Vovô Nunuca

Aplicação web desenvolvida para apresentar informações sobre a **Casa do Idoso Vovô Nunuca**, seus serviços, projetos, formas de contribuição e cadastro de voluntários.

O projeto foi desenvolvido como uma aplicação **Single Page Application (SPA)** utilizando JavaScript modular, permitindo a navegação entre diferentes conteúdos sem o carregamento de várias páginas HTML.

## Tecnologias utilizadas

* **HTML5** — estrutura semântica da aplicação.
* **CSS3** — estilização, responsividade e adaptação para diferentes tamanhos de ecrã.
* **JavaScript (ES6)** — lógica da aplicação, manipulação do DOM, eventos e navegação SPA.
* **ES6 Modules** — organização do JavaScript em módulos através de `import` e `export`.
* **LocalStorage** — armazenamento local dos dados do formulário.
* **Git** — controlo de versões.
* **GitHub** — armazenamento remoto e gestão do repositório.

## Estrutura do projeto

```text
projeto-terceiro-setor/
│
├── index.html
│
├── css/
│   └── style.css
│
├── img/
│   └── logo.png
│
└── js/
    ├── app.js
    ├── router.js
    ├── navegacao.js
    ├── templates.js
    ├── formulario.js
    └── storage.js
```

## Funcionalidades

* Navegação entre diferentes secções da aplicação.
* Roteamento através de JavaScript e hash da URL.
* Menu de navegação responsivo.
* Renderização dinâmica dos conteúdos através de templates JavaScript.
* Formulário de cadastro de voluntários.
* Validação dos campos do formulário.
* Feedback ao utilizador após o envio.
* Armazenamento de dados através do `localStorage`.
* Layout responsivo para diferentes dispositivos.

## Pré-requisitos

Para executar o projeto localmente, é necessário ter:

* Um navegador moderno, como Firefox, Chrome ou Edge.
* Python 3 instalado para executar um servidor HTTP local.
* Git, caso seja necessário clonar o projeto através do GitHub.

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/felipe-simario/projeto-terceiro-setor.git
```

### 2. Aceder à pasta do projeto

```bash
cd projeto-terceiro-setor
```

### 3. Iniciar o servidor local

```bash
python3 -m http.server 8000
```

### 4. Aceder à aplicação

Abrir o navegador e aceder a:

```text
http://localhost:8000
```

O projeto deve ser executado através de um servidor HTTP porque utiliza **ES6 Modules** (`import` e `export`).

## Versionamento

O projeto utiliza **Git e GitHub** para controlo de versões e segue uma estrutura baseada no **GitFlow**.

### Branches

* `main` — versão estável do projeto.
* `develop` — desenvolvimento contínuo.
* `feature/*` — desenvolvimento de funcionalidades específicas.

O fluxo principal utilizado é:

```text
feature/* → develop → main
```

As alterações são desenvolvidas em branches específicas e posteriormente integradas à `develop`. A `main` representa a versão estável destinada ao lançamento.

## Commits

Os commits são utilizados para registrar as principais alterações realizadas durante o desenvolvimento.

Exemplos:

```text
chore: versão inicial do projeto
```

```text
feat: implementa navegação e módulos JavaScript
```

```text
feat: implementa formulário e localStorage
```

## Acessibilidade

O projeto utiliza elementos semânticos do HTML5, textos alternativos nas imagens, labels associados aos campos do formulário e recursos de navegação compatíveis com tecnologias assistivas.

A aplicação será revisada de acordo com as recomendações da **WCAG 2.1**, com o objetivo de identificar e corrigir problemas básicos de acessibilidade.

## Testes

Os testes da aplicação são realizados através do navegador, verificando:

* funcionamento da navegação;
* carregamento dos módulos JavaScript;
* funcionamento do formulário;
* validação dos campos;
* armazenamento dos dados;
* comportamento responsivo da interface.

## Desenvolvimento

O projeto foi desenvolvido utilizando uma abordagem modular, separando as responsabilidades entre diferentes arquivos JavaScript.

Por exemplo:

* `app.js` — inicialização da aplicação.
* `router.js` — gerenciamento das rotas.
* `templates.js` — templates e conteúdos das páginas.
* `navegacao.js` — comportamento da navegação.
* `formulario.js` — comportamento e validação do formulário.
* `storage.js` — armazenamento e recuperação de dados.

## Estado do projeto

O projeto encontra-se em desenvolvimento, com as próximas etapas destinadas à revisão de acessibilidade, otimização, preparação para produção, deploy e documentação final.
