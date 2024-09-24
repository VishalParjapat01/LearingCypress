///<reference types="cypress" />


//describe('vitest suite', () => {
    // it('Form test - using css selector', () => {
        
    //     cy.visit('https://v1.training-support.net/selenium/simple-form')


    //     // for url check
    //     cy.url().should('include','simple-form')  // for right
    //     // cy.url().should('include','simplle-')  // for wrong


    //     // for title
    //     cy.title().should('include','Simple Form')

    //     cy.xpath('(//*[contains(text(),"Simple Form")])[2]').should('be.visible')



    //     //firstname
    //     cy.xpath('//input[@placeholder="First Name"]').should('be.visible')
    //     cy.get('#firstName').should('have.attr','placeholder','First Name')
    //     //Asserting the type value using have.value

    //     //Assertion chaining -- adding multiple assertions in a signle line of code.
    //     cy.get('#firstName').should('have.id','firstName').type('Vishal').should('have.value','Vishal') //Asserting for visiblity and then typing and then asserting the typed value

    //     //lastname
    //     cy.get('#lastName').should('have.id','lastName').type('Parjapat').should('have.attr','placeholder')

    //     //Email
    //     cy.get('#email').type('vishal@gmail.com')

    //     //Phone no
    //     cy.get('[type="tel"]').type('5859674854')


    //     //message

    //     cy.get('[rows="2"]').should('not.have.attr','placeholder')
    //     cy.get('[rows="2"]').type('Vishal')

    //     //Submit button
    //     cy.get('[value="submit"]').click()
    // });
    // it.only('Form test- using xpath', () => {
    //     cy.visit('https://v1.training-support.net/selenium/simple-form');


    //     cy.xpath('//input[@placeholder="First Name"]').type("Vishal")
    //     cy.xpath('//*[@id="lastName"]').type("Parjapat")
    //     cy.xpath('//input[@type="email"]').type('vishal@gmail.com')
    //     cy.xpath('//*[@type="tel"]').type("9667950074")
    //     cy.xpath('//*[@rows="2"]').type("Vishal")
    //     cy.xpath('//input[@class="ui green button"]').click()
        
        
        
    // });

    // it('test', () => {
    //     cy.visit('https://automationteststore.com/index.php?rt=content/contact');

    //     cy.url().should('include','contact')

    //     // Name
    //     cy.get('#ContactUsFrm_first_name').type('Vishal').should('not.have.attr','placeholder','Vihsal')

    //     //Email
    //     cy.get('#ContactUsFrm_email').type('Vishal@gmail.com').should('not.have.attr','placeholder','Vishal@gmail.com')

    //     //Enquiry
    //     cy.get('#ContactUsFrm_enquiry').type('Good Luck!').should('not.have.attr','placeholder','hey')

    //     // Submit Button
    //     cy.get('.lock-on-click').click()


    //     //Next page
    //     cy.xpath("//p[.='Your enquiry has been successfully sent to the store owner!']").should('be.visible')


        
    // });
    // it('redbus test', () => {
    //     cy.visit('https://www.shaadi.com/join-now?ptnr=sribrnext01&aff_url_param=g&gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gxND5iqsJTySLxGDbjWoiAlky2K9y5a6RyCvMInT6Ht8kj0KHhGyo0aAtvuEALw_wcB')
    //     //cy.get('.fOJRFi').should('include')
    // });
    
// });



    
