// cypress/integration/visualizacao-produto.spec.js

describe('Pesquisa de Produtos', () => {
    beforeEach(() => cy.visit('https://automationexercise.com/products'));
    
    it.only("Deve pesquisar por um produto existente e o mesmo ser exibido.", () => {
        
        cy.get('input[type="text"]').type('Dress'); 
        cy.get('#submit_search').click(); 

        cy.get('.product-image-wrapper').should('have.length.greaterThan', 0); 
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.product-details').should('exist');


        // Verificar se as informações detalhadas do produto estão presentes
        cy.get('.product-information > h2').should('be.visible');
        cy.get(':nth-child(5) > span').should('be.visible');
        cy.get('.product-information > :nth-child(6)').should('be.visible');
        cy.get('.product-information > :nth-child(7)').should('be.visible');
        cy.get('.product-information > :nth-child(8)').should('be.visible');
        cy.get('.product-information > :nth-child(3)').should('be.visible');
    });

    it("Deve pesquisar por um produto inexistente e não encontrar resultados.", () => {
        cy.get('input[type="text"]').type('ProdutoInexistente');
        cy.get('#submit_search').click();
    
        // Verificar se não há produtos na lista de resultados
        cy.get('.product-image-wrapper').should('have.length', 0);
    });
    
});
