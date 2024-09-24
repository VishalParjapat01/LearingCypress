///<reference types="cypress" />

describe('for begore and after block', () => {
// before use only when 1 tect case we have to use 
// before each use everytime before it block

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Username
        cy.get('[name=username]').type('Admin');

        // Password
        cy.get('[type="password"]').type('admin123');

        //Button
        cy.get('[type="submit"]').click();
    })
    it('TC_001', () => {
        cy.contains('Admin').click()

        cy.url().should('include','admin')
        
    });
    it('Tc_002', () => {
        cy.contains('Time').click()

        cy.url().should('include','time')
        
    });
    it('Tc_003', () => {
        cy.contains('Leave').click()

        cy.url().should('include','leave')
    });
    afterEach(() => {
        cy.wait(2000)
        cy.get('.oxd-userdropdown-tab').click()

        //cy.xpath("//a[.='Logout']").click()

        cy.contains('Logout').click()
    });
});

