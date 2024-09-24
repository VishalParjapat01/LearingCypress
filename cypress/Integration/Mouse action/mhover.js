/// <reference types='cypress' />


describe('Mouse-hover', () => {
    it('by uses-invoke-show', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //mouse hover -invoke it will show the element present inside mpusehover element
        cy.get('[href="#top"]').invoke('show')

        //now it check the next of top in the UI and clicks on it
        //
        cy.contains('Top').click({force:true})

        cy.url().should('include','top') // asserting the url clicking
    });
    it.only('by uses-trigger-mouseover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //mouse hover -invoke it will show the element present inside mpusehover element
        cy.get('[href="#top"]').trigger('mouseover',{force:true})

        //now it check the next of top in the UI and clicks on it
        //
        cy.contains('Reload').click({force:true})

        cy.url().should('include','AutomationPractice') // asserting the url clicking
    });
});