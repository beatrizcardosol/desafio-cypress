const ESPRESSO = '[data-test="Espresso"]';
const CAPPUCCINO = '[data-test="Cappuccino"]';
const FLAT_WHITE = '[data-test="Flat_White"]';
const MOCHA_PROMO_YES = ".promo > button.yes";
const CART_MENU = '[data-test="checkout"]';
const LINK_CARRINHO = 'a[href="/cart"]'; 

class HomePage {
  acessarPagina() {
    cy.visit("/");
  }

  selecionarTresCafes() {
    cy.get(ESPRESSO).should("be.visible").click();
    cy.get(CAPPUCCINO).should("be.visible").click();
    cy.get(FLAT_WHITE).should("be.visible").click();
  }

 aceitarPromocaoMocha() {
    cy.get('.promo', { timeout: 10000 }).should('be.visible');

    cy.get('.promo button').contains('Yes').should('be.visible').click();
  }

  irParaOCarrinho() {
    cy.get(LINK_CARRINHO).should("be.visible").click();
    
    cy.url().should('include', '/cart');
  }
}


export default new HomePage();