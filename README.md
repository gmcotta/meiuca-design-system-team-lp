# Meiuca - Biblioteca de componentes de time

## [Storybook da aplicação](meiuca-design-system-team-lp.vercel.app)

### Introdução

Esse repositório tem o objetivo de mostrar uma biblioteca de componentes de time de uma landing page para um design system, criada a partir do curso de Design Systems in Code, da Meiuca.

Ao longo do curso, desenvolvemos um design system contendo design tokens, assets (ícones), uma biblioteca de componentes core (contendo os elementos mais primitivos, como botão, input, tipografia...) e uma biblioteca de times (que usa da biblioteca core para criar seus componentes, que serão usados para um produto específico). Dentro da landing page também possuem componentes que não fazem parte do design system e é exclusivo para a página desenvolvida.

Abaixo encontram-se os links para os repositórios do design system:

- [Design Tokens](https://github.com/gmcotta/meiuca-design-tokens)
- [Assets](https://github.com/gmcotta/meiuca-assets)
- [Biblioteca Core](https://github.com/gmcotta/meiuca-design-system-core)
- [Biblioteca de Time](https://github.com/gmcotta/meiuca-design-system-team-lp)
- [Landing Page](https://github.com/gmcotta/meiuca-ds-landing-page)

Abaixo encontra-se também o link para o projeto do design system e da landing page no Figma:

- [Figma](https://www.figma.com/file/ADrWGQ6GfDjIMKkWsJ65M0/DS-in-Code-%7C-Atividade-pr%C3%A1tica?node-id=2%3A3199)

***

### Tecnologias

Os componentes foram desenvolvidos usando a biblioteca core, e também React. Como a landing page será desenvolvida em React, podemos também usar React para desenvolver os componentes dessa biblioteca, usando como base a biblioteca core, que usa web-components.

Para a criação da biblioteca foram usados:
- [React](https://reactjs.org/), como biblioteca de UI;
- [Storybook](https://storybook.js.org/), para apresentar e documentar os componentes e suas propriedades;
- [SASS](https://sass-lang.com/), para estilizar os componentes.

### Componentes
- Card Content

### Como iniciar localmente a página

Primeiramente, baixe o repositório:
```bash
  git clone git@github.com:gmcotta/meiuca-design-system-core.git <nome_da_pasta>
```

Entre na pasta gerada:
```bash
  cd nome_da_pasta
```

Instale as dependências (uso o Yarn para gerenciar os pacotes):
```bash
  yarn
```

Para iniciar o Storybook:
```bash
  yarn storybook
```

Para fazer o build da aplicação:
```bash
  yarn compile
```
A pasta gerada é ```dist```.

Para fazer o build do Storybook:
```bash
  yarn build-storybook
```
A pasta gerada é ```storybook-static```.


Para publicar o pacote:
```bash
  npm publish --access public
```
