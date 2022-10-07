// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addProduto', (produto, tamanho, cor, quantidade) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
});    

Cypress.Commands.add('atualizarFaturamento', (nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email, notasPedido) => {
    cy.get('#billing_first_name').type()
    cy.get('#billing_last_name').type()
    cy.get('#billing_company')
    cy.get('#select2-billing_country-container')
    cy.get('#billing_address_1')
    cy.get('#billing_address_2')
    cy.get('#billing_city_field')
    cy.get('#select2-billing_state-container')
    cy.get('#billing_postcode')
    cy.get('#billing_phone')
    cy.get('#billing_email')
    cy.get('#order_comments')
})

