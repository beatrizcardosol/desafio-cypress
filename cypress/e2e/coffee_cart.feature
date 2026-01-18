# language: pt
Funcionalidade: Fluxo de Compra no Coffee Cart

  Contexto:
    Dado que eu acesso a página inicial do Coffee Cart

  Cenário: Realizar compra de cafés com sucesso aplicando promoção
    Quando eu seleciono 3 tipos de cafés diferentes
    E aceito a oferta de um Mocha por $4 no modal de promoção
    Então o carrinho deve exibir 4 itens com os valores corretos
    Quando eu removo 1 item do carrinho
    E realizo o pagamento no checkout
    Então devo visualizar a mensagem de sucesso final