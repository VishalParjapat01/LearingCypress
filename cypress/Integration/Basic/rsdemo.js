///<reference types="cypress" />

describe('Rahul shety test', () => {
    it.skip('checkbox test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
// Assert URL
        cy.url().should('include','AutomationPractice')

        //checking on Check box using check
        cy.get('#checkBoxOption1').check().should('be.checked');
        cy.get('#checkBoxOption2').check().should('be.checked');
        cy.get('#checkBoxOption3').check().should('be.checked');

        // for uncheck
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked');

    });
    it('hide / show test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // asserting whether the textbox is visible

        cy.get('[name="show-hide"]').should('be.visible')

        // clicking on hide element

        cy.get('#hide-textbox').click();

        // assert  for the invisible of the textbox

        cy.get('[name="show-hide"]').should('not.be.visible')

        // Click on show element

        cy.get('#show-textbox').click();

        cy.get('#displayed-text').should('be.visible').type('Element name')


    });

it.only('radio Test', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //Radio button
    cy.get('[value="radio1"]').should('not.be.checked').click().should('be.checked')
    cy.get('[value="radio2"]').should('not.be.checked').click().should('be.checked')
    cy.get('[value="radio3"]').click().should('be.checked')
    
});
});