# Banco Web Tests

Este projeto tem como objetivo demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript, seguindo boas práticas de organização e geração de relatórios.

## Objetivo

Automatizar cenários de teste para a aplicação Banco Web, utilizando Cypress, com código organizado em custom commands e geração de relatórios detalhados. O projeto serve como referência didática para alunos da mentoria.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar a escrita e manutenção dos testes, localizados em `cypress/support/commands/`.
- **Relatórios Mochawesome**: Relatórios gerados automaticamente após a execução dos testes, disponíveis em `cypress/reports/html/`.
- **Testes Automatizados**: Exemplos de testes para login e transferência, em `cypress/e2e/`.
- **Fixtures**: Dados de apoio para os testes, em `cypress/fixtures/`.

## Pré-requisitos

- Node.js instalado
- API do banco em execução ([banco-api](https://github.com/juliodelimas/banco-api))
- Aplicação web em execução ([banco-web](https://github.com/juliodelimas/banco-web))

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/GeissyHanie/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes

- Para rodar todos os testes em modo headless:
  ```sh
  npm test
  ```
- Para rodar os testes com interface gráfica do Cypress:
  ```sh
  npm run cy:open
  ```
- Para rodar os testes apontando para o ambiente de produção:
  ```sh
  npm run test-prod
  ```

Os relatórios serão gerados em `cypress/reports/html/index.html`.

## Estrutura dos Testes

- **Testes de Login**: `cypress/e2e/login.cy.js`
- **Testes de Transferência**: `cypress/e2e/transferencia.cy.js`
- **Dados de Teste**: `cypress/fixtures/credenciais.json`, `cypress/fixtures/example.json`

## Custom Commands

Os comandos personalizados estão organizados em:
- `cypress/support/commands/common.js`: Comandos comuns reutilizáveis
- `cypress/support/commands/login.js`: Comandos para automação de login
- `cypress/support/commands/transferencia.js`: Comandos para automação de transferência

Para utilizar um custom command em seus testes, basta importar o arquivo correspondente em `cypress/support/e2e.js`.

Exemplo de uso:
```js
cy.login('usuario', 'senha')
```

## Relatórios

Após a execução dos testes, os relatórios em HTML podem ser encontrados em `cypress/reports/html/index.html`. Eles incluem detalhes dos testes executados, screenshots e vídeos das execuções.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias ou correções.

---
Mentoria 2.0 - Automação de Testes com Cypress
