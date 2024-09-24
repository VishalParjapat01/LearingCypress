/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('OrangeHRM', () => {
    it('Tc_001', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // For Login page

        //Username
        cy.get('[name="username"]').type('Admin')
        //Password
        cy.get('[name="password"]').type('admin123')
        //Button
        cy.get('[type="submit"]').click()

        // Home page
        // for desboard

        cy.url().should('include','dashboard')

        // wlecome massage
        cy.contains('Welcome').should('be.visible')


        // Logout visible
        cy.get('.oxd-userdropdown-name').click()
        cy.xpath("//a[.='Logout']").contains('Logout').should('be.visible')

        cy.xpath("//span[.='Admin']").click()
        cy.get('.oxd-main-menu-item-wrapper').should('have.length.gte', 3);
        
    });
});