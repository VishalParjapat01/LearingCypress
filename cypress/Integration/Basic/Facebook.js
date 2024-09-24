describe('facebook suite', () => {
    it('Login Test', () => {
        
        cy.visit('https://www.facebook.com/');

        // Enter Username
        cy.get('[name="email"]').type('9667950075');
        //Enter Password
        cy.get('[name="pass"]').type('Vishal@123');
        //Login button
        cy.get('[name="login"]').click();
    });
});