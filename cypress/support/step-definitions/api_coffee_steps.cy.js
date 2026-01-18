import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('que gero uma requisição para o Coffee Cart', () => {
    cy.requisicaoCoffee()
})

Then('valido as informações do response do servidor', () => {
    cy.validaResponseCoffee()
})