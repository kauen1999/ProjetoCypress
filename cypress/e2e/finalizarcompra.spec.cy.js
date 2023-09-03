describe('Finalizar Compra', () => {
    beforeEach(() => cy.visit('https://automationexercise.com'));

    it("Tentativa de Finalização da Compra sem Login", () => {
        
        cy.visit('https://automationexercise.com/products')
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.visit('https://automationexercise.com/view_cart')

        cy.get('.col-sm-6 > .btn').click();
      
        cy.get('.col-sm-6 > .btn').should('be.visible');
        cy.get('.modal-body > :nth-child(1)').should('contain','Register / Login account to proceed on checkout.')
        cy.get('.modal-body > :nth-child(2) > a > u').click();
    });
    it("Iniciar a Finalização da Compra com Login", () => {
        
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('kauen1999@gmail.com');
        cy.get('[data-qa="login-password"]').type('Senh@2023');
        cy.get('[data-qa="login-button"]').click();
        
        cy.visit('https://automationexercise.com/products')
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();

        cy.visit('https://automationexercise.com/view_cart');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('.checkout-information').should('be.visible');
        cy.get('.cart_total_price').should('be.visible');
        cy.get('.form-control').type('teste')
        
        cy.get(':nth-child(7) > .btn').click();
      });
      
})