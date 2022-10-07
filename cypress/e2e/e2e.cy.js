/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import EnderecoPage from '../support/page_objects/endereco.page' 

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Devo fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        
        //escolha do primeiro produto
        cy.addProduto('Ajax Full-Zip Sweatshirt', 'S', 'Green', '1')
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
        //escolher do segundo produto
        cy.addProduto('Atlas Fitness Tank', 'S', 'Blue', '1')
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho') 
        //escolher do terceiro produto
        cy.addProduto('Argus All-Weather Tank', 'L', 'Gray', '1')  
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho') 
        //escolher do quarto produto
        cy.addProduto('Arcadio Gym Short', '34', 'Blue', '1')   
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')

        //clique no botão carrinho de compra
        cy.get('.woocommerce-message > .button').click()
        // clicar no botão de cocluir compra
        cy.get('.checkout-button').click()
        // clicar no texto 'Já está cadastrado? Clique aqui para entrar' para realizar o login
        cy.get('.showlogin').click()
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false}) //log: false irá garantir que não será exibido a senha nos testes
            cy.get('.woocommerce-button').click()
        })


        // Preencher os dados do Faturamento
        EnderecoPage.editarEnderecoFaturamento('Larissa', 'Castro', 'EBAC TESTE', 'Brasil', 'Av Brasil', '1', 'Sorocaba', 'São Paulo', '14096600', '1699190076', 'teste@teste.com', 'teste')
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

       // cy.get('.page-title').should('contain', 'Pedido recebido')


        
    });



})