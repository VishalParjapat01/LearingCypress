/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Automate facebook sign-up page', () => {
    it('TC001', () => {

        // URL link to visit
        cy.visit('https://www.facebook.com/')

        cy.url().should('include','facebook')

        //cy.xpath("//div[.='Create a new account']").should('be.visible','Create a new account')

        // Facebook sign-up page form

        // firstname
        //cy.get('#u_0_8_EV').type('User')
        
        // surname
        // cy.get('#u_0_a_YN').type('dummy')

        // //Email & phone number
        // cy.get('#u_0_d_Ty').type('userdum@gmail.com')

        // // New Password
        // cy.get('#password_step_input').type('User@0217')

        // //Date
        // cy.get('#day').select('17')  // for selector used text

        // //Month
        // cy.get('#month').select(1)  // for selector used index

        // // Year
        // cy.get('#year').select('2000')

        // // Gender
        // cy.get('[class="_8esa"][value="2"]').should('not.be.checked').click().should('be.checked')

        // //Ckicl on Sign-up button
        // cy.get('#u_0_n_ym').click()





        
    });
});