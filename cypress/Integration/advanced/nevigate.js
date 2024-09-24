///<reference types="cypress" />

describe('Nevigate test', () => {
    it('to navigate', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//a[text()='Free Access to InterviewQues/ResumeAssistance/Material']").click()


        cy.xpath("(//a[.='Learning paths'])[1]").click()


        // Navigate command
        cy.wait(2000)
        cy.go('back')     // to back previous page 
        cy.wait(2000)
        cy.go('back') // this navigate to next page
        cy.wait(2000)
        cy.go('forward')
        cy.wait(4000)
        cy.reload();

        
    });
});