/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('mouse test', () => {
    it('right click', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        
        cy.xpath("//span[contains (text(),'right click me')]").rightclick().should('to.be.visible')

        cy.get('.context-menu-list').contains('Quit').click()

        cy.on('window:alert',(text)=>{
            expect(text).to.contains('clicked: quit')
        })
        
        cy.get('[ondblclick="myFunction()"]').dblclick()
        cy.on('window:alert',(text1)=>{
            expect(text1).to.contains('You double clicked me.. Thank You..')
            
        })

        
    });
});