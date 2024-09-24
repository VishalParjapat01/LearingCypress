describe('Ebay suite', () => {
    it('Test home page', () => {
        
        cy.visit('https://www.ebay.com/')
        //Search button
        cy.get('[type="submit"]').click()
        cy.get('class="btn btn-prim gh-spr"').click()
        cy.get('#gh-btn').click()
        cy.get('[type="submit"]').click()
        cy.get('[type="submit"]').click()

    });
});