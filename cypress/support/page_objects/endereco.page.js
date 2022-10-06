class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email, comentarioPedido){
       
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_first_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click() //a ação do campo de seleção é clicar, escrever o pais o desejado e depois selecionar o dado desejado
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
       // cy.get('#select2-billing_state-container').click().type('São Paulo').get('[aria-selected="true"]').click()
        cy.get('#select2-billing_state-container').click().type(estado+'{enter}') // entre as chaves são as ações do teclado, ou seja, nessa ação estamos dando enter.
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#order_comments').click().type(comentarioPedido)
    }

    editarEnderecoEntrega(){
        // elementos + ações
    }
}

export default new EnderecoPage() // essa classe ficará exposta para que outros arquivos possam utiliza-la.

