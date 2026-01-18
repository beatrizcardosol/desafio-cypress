class CartPage {
 

  validarItensNoCarrinho(quantidade) {

    cy.get(".list-item:visible").should("have.length", quantidade);
  }

  removerUmItem() {
    cy.get(".delete:visible").first().click();
  }

  finalizarPagamento() {
    cy.get('[data-test="checkout"]').should("be.visible").click();

  
    cy.get("#name").type("Estudante Academia");
    cy.get("#email").type("estudante@teste.com");
    cy.get("#submit-payment").click();
  }

  validarMensagemSucesso() {
    cy.get(".snackbar.success")
      .should("be.visible")
      .and("contain", "Thanks for your purchase");
  }
}

export default new CartPage();
