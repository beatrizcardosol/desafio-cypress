
Cypress.Commands.add('requisicaoCoffee', () => {
    cy.request({
        method: 'GET',
        url: '/', 
        failOnStatusCode: false
    }).then(response => {
        Cypress.env('responseDataCoffee', response)
    })
})


Cypress.Commands.add('validaResponseCoffee', () => {
    const response = Cypress.env('responseDataCoffee')
    const { status, body } = response

    expect(status).to.eq(200)

    let corpoResponse = JSON.stringify(body)
    cy.log('Resposta recebida com sucesso')

    expect(corpoResponse).to.include('Coffee cart')
})