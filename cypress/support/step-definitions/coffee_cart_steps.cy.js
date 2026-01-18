import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage"; 

Given('que eu acesso a página inicial do Coffee Cart', () => {
    HomePage.acessarPagina();
});

When('eu seleciono 3 tipos de cafés diferentes', () => {
    HomePage.selecionarTresCafes();
});

When('aceito a oferta de um Mocha por $4 no modal de promoção', () => {
    HomePage.aceitarPromocaoMocha();
});

Then('o carrinho deve exibir 4 itens com os valores corretos', () => {
    HomePage.irParaOCarrinho();
    CartPage.validarItensNoCarrinho(4);
});

When('eu removo 1 item do carrinho', () => {
    CartPage.removerUmItem();
});

When('realizo o pagamento no checkout', () => {
    CartPage.finalizarPagamento();
});

Then('devo visualizar a mensagem de sucesso final', () => {
    CartPage.validarMensagemSucesso();
});