describe('scrolling', () => {
    it('test1', () => {
        cy.visit('https://www.google.co.in/')
        

        cy.get('#APjFqb').type('Masai{enter}')

        // x is horizontal , y is vertical
        // for below down

        cy.scrollTo(0,200)
        cy.wait(2000)


        // for above down
        cy.scrollTo(0,-500)

        // scroll into a particular element
        cy.contains('Maasai people').scrollTo()

        //cy.get('')
        
    });
});