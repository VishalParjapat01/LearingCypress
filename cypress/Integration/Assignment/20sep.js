describe('iframe handle', () => {
    it('TC001', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.iframe('#courses-iframe').contains('JOIN NOW').click()
        
    });
});