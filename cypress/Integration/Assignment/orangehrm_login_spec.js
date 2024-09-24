/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('OrangeHRM', () => {

    // i wrote two way one is precondition use before loop and another below  because of assignment i have to do both
    // beforeEach(() => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //      // Username
    //     cy.get('[name=username]').type('Admin');

    //      // Password
    //     cy.get('[type="password"]').type('admin123');

    //      //Button
    //     cy.get('[type="submit"]').click();
    // });
    it('Valid Login', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // For Login page

        //Username
        cy.get('[name="username"]').type('Admin')
        //Password
        cy.get('[name="password"]').type('admin123')
        //Button
        cy.get('[type="submit"]').click()

        
        // for url dashboard

        cy.url().should('include','dashboard')
        

       

        // for label check
        cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard').should('be.visible')
        
    });
});