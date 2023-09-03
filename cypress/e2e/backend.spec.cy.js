
describe("Teste da API do  Ecommerce", () => {

    it("Pesquisa de produtos (POST)", () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            body: {
                search_product: 'top' // Você pode alterar isso para o termo de pesquisa desejado
            }
        }).should((response) => {
            const { status, statusText, body } = response;
            expect(status).to.equal(200);
            expect(statusText).to.equal('OK');
        });
    });

    it("Pesquisa de detalhes do usuário por email (GET)", () => {
        const userEmail = "kauen1999@gmail.com";
    
        cy.request({
            method: 'GET',
            url: `https://automationexercise.com/api/getUserDetailByEmail?email=${userEmail}`
        }).should((response) => {
            const { status, statusText, body } = response;
            expect(status).to.equal(200);
            expect(statusText).to.equal('OK');
        });
    });
    
  });
      