describe('Adicionar Item ao Carrinho', () => {
  beforeEach(() => cy.visit('https://automationexercise.com/products'));
  it('Adicionar um Produto ao Carrinho', () => {
    
    cy.get('input[type="text"]').type('Dress'); 
    cy.get('#submit_search').click(); 

    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0); 
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.product-details').should('exist');

    // Clique no botão "Add to Cart" para adicionar o produto ao carrinho
    cy.get(':nth-child(5) > .btn').click();
    cy.get('.modal-content').should('exist');
    cy.get('.modal-title').should('contain','Added!')

    // Verifique se a mensagem de sucesso de adição ao carrinho é exibida
    cy.get('.modal-body > :nth-child(1)').should('be.visible').and('contain', 'Your product has been added to cart.');
    cy.get('.modal-footer > .btn').click();
  });

  it.only('Cenário 2: Visualizar itens no Carrinho de Compras', () => {
    
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.modal-footer > .btn').click();
    
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('#cart_info').should('exist');
    cy.get('#cart_info_table tbody tr').should('have.length.greaterThan', 0);
  });
});
