/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>


describe('assignment', () => {

    before(()=>{
        cy.fixture('HukumoLogin18sep').then((data)=>{
            globalThis.data=data
        })
    })

    it('iframe', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.iframe('#mce_0_ifr')
    });
    it.skip('double click', () => {
        //cy.visit('https://api.jquery.com/dblclick/')
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        //cy.get('div[class="dbl"]').dblclick()
        cy.get('[ondblclick="myFunction()"]').dblclick()
    });
    it.skip('right click', () => {
        
        cy.visit('https://the-internet.herokuapp.com/context_menu')

        cy.get('#hot-spot').rightclick()

        //alert
        cy.on('window:alert',(vari)=>{
            expect(vari).to.contains('You selected a context menu')
        })
    });
    it.skip('hovers', () => {
        cy.visit('https://the-internet.herokuapp.com/hovers')

        cy.get('[alt="User Avatar"]').first().trigger('mouseover')
        
    });
    it.skip('Drag and drop', () => {

        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        cy.get('#column-a').trigger('mousedown',{which:1})

        cy.get('#column-b').trigger('mouseup',{force:true})
        
    });
    it.skip('Data Driven Testing', () => {
        cy.visit('https://the-internet.herokuapp.com/login')

        cy.get('#username').type(data.invaliduser)

        cy.get('#password').type(data.invalidpassword)

        cy.get('.fa-sign-in').click()
        
    });
});