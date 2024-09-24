///<reference types="cypress" />

describe('Alert test', () => {
    it('Tc_01', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        var name="Vishal";
        cy.get('#name').type(name)
        cy.get('#alertbtn').click() // click in alert button

        // i want to assert the text present in alert

        cy.on('window:alert',(text)=>{

            expect(text).to.contains(name)
        })

        // COnfirmation alert handling

        cy.get('#confirmbtn').click()

        cy.on('window:confirm',(alert2)=>{
            expect(alert2).to.contains('Hello , Are you sure you want to confirm?')
            return true; // it will select on ok
            //return false; // will select cancel
        })
    });
});