# Desafio Técnico - Academia de Testes Accenture 2026

Este repositório contém a automação de testes End-to-End (E2E) e de API para a aplicação **Coffee Cart**, desenvolvida como parte do desafio técnico da Academia de Testes da **Accenture (Quality Engineering)**.

## Objetivo do Projeto

Validar o fluxo principal de compra do site [Coffee Cart](https://coffee-cart.app/), cobrindo desde a seleção de produtos até o checkout final, seguindo as melhores práticas de mercado.

## Tecnologias Utilizadas

- **Cypress**: Framework de automação.
- **Cucumber (BDD)**: Escrita de cenários em linguagem Gherkin.
- **JavaScript**: Linguagem de programação.
- **Page Object Model (POM)**: Padrão de arquitetura para organização e reutilização de código.
- **Mochawesome Reporter**: Geração de relatórios de execução em HTML.

## Arquitetura do Projeto

O projeto foi estruturado para garantir escalabilidade e fácil manutenção:

- `cypress/e2e/`: Arquivos `.feature` com os cenários de negócio em BDD.
- `cypress/support/pages/`: Classes Page Objects contendo os seletores e métodos de cada página.
- `cypress/support/step-definitions/`: Implementação técnica dos passos definidos no Gherkin.
- `cypress/support/api/`: Comandos personalizados para testes de API.
- `cypress.config.js`: Configurações globais do Cypress e plugins.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (Versão 14 ou superior)
- [Git](https://git-scm.com/)

## Instalação

1.  Clone este repositório:
    ```bash
    git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
    ```
2.  Acesse a pasta do projeto:
    ```bash
    cd desafio-cypress
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

## Como Rodar os Testes

### Modo Interativo (Interface Gráfica)

Para abrir o Cypress Runner e escolher qual teste rodar visualmente:

```bash
npx cypress open

## Modo Headless (Terminal + Relatório)
Para rodar todos os testes em segundo plano e gerar o relatório de execução:
code
Bash
npx cypress run

## Relatórios de Execução
Após rodar os testes via terminal (npx cypress run), o relatório visual será gerado em:
cypress/reports/html/index.html
Basta abrir esse arquivo em qualquer navegador para visualizar as métricas e evidências da execução.
```
