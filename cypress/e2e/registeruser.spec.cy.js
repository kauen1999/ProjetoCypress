

describe('Registro de Usuário', () => {
    beforeEach (() => cy.visit('https://automationexercise.com/login'));
    it("Deve registrar um novo usuário preenchendo todos os campos com dados validos.", () => {
      
      cy.get('[data-qa="signup-name"]').type('Jocean Ferreira da Silva Filho');
      cy.get('[data-qa="signup-email"]').type('kauen1999@gmail.com');
      cy.get('[data-qa="signup-button"]').click();
      cy.get('#id_gender1').check();
      cy.get('[data-qa="password"]').type('Senh@2023');
      cy.get('[data-qa="days"]').select('26');
      cy.get('[data-qa="months"]').select('June');
      cy.get('[data-qa="years"]').select('1999');

      cy.get('#newsletter').check();
      cy.get('#optin').check();

      cy.get('[data-qa="first_name"]').type('Jocean');
      cy.get('[data-qa="last_name"]').type('Silva');
      cy.get('[data-qa="company"]').type('Multimarcas')
      cy.get('[data-qa="address"]').type('E C E, Hs 28, K Gandhi Marg, Delhi 110001');
      cy.get('[data-qa="address2"]').type('D106, Street No 7, Safdarjung Enclave, Krishna Nagar, Delhi 110001');
      cy.get('[data-qa="country"]').select('India');
      cy.get('[data-qa="state"]').type('Délhi');
      cy.get('[data-qa="city"]').type('Nova Délhi');
      cy.get('[data-qa="zipcode"]').type('110029');
      cy.get('[data-qa="mobile_number"]').type('+55 (83) 981596698');
  
      cy.get('[data-qa="create-account"]').click();

  
      // Verificar a mensagem de sucesso
      cy.get('[data-qa="account-created"]').should('have.text','Account Created!');
    });
    
    it.only("Deve registrar um novo usuário preenchendo somente os campos obrigatorios com dados validos.", () => {
        
        cy.get('[data-qa="signup-name"]').type('Jocean Ferreira da Silva Filho');
        cy.get('[data-qa="signup-email"]').type('kauen1999@gmail.com');
        cy.get('[data-qa="signup-button"]').click(); 
        cy.get('[data-qa="password"]').type('Senh@2023');
        cy.get('[data-qa="first_name"]').type('Jocean');
        cy.get('[data-qa="last_name"]').type('Silva');
        cy.get('[data-qa="address"]').type('E C E, Hs 28, K Gandhi Marg, Delhi 110001');
        cy.get('[data-qa="country"]').select('India');
        cy.get('[data-qa="state"]').type('Délhi');
        cy.get('[data-qa="city"]').type('Nova Délhi');
        cy.get('[data-qa="zipcode"]').type('110029');
        cy.get('[data-qa="mobile_number"]').type('+55 (83) 981596698');
    
        cy.get('[data-qa="create-account"]').click();
  
    
        // Verificar a mensagem de sucesso
        cy.get('[data-qa="account-created"]').should('have.text','Account Created!');
      });
});
  