describe('Orange suite', () => {
    it('Login Test', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Username
        cy.get('[name=username]').type('Admin');

        // Password
        cy.get('[type="password"]').type('admin123');

        //Button
        cy.get('[type="submit"]').click();
    });
});