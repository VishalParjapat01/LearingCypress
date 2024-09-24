/// <reference types='cypress'/>

describe('Dropdown', () => {
    it.skip('Select-dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // use attribute value in select
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('').should('have.value','')
        // use attribute by text in select
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('Select').should('have.value','')

        //cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        //from attribute index in select
        cy.wait(2000)
       cy.get('#dropdown-class-example').select(0).should('have.value','')
       cy.wait(2000)
       cy.get('#dropdown-class-example').select(1).should('have.value','option1')
       cy.wait(2000)
       cy.get('#dropdown-class-example').select(2).should('have.value','option2')
       cy.wait(2000)
       cy.get('#dropdown-class-example').select(3).should('have.value','option3')
    });

    it.skip('Dynamic dropdown-with find', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        

        // with find item
        cy.get('[placeholder="Type to Select Countries"]').type('ind')
        cy.wait(2000)
        cy.get('#ui-id-1').find('.ui-menu-item').each(($ele)=>{
            if($ele.text()=='India'){
                cy.wrap($ele).click()
            }
        })
    });

    it.skip('Dynamic dropdown-without find', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        

        // with out find
        cy.get('[placeholder="Type to Select Countries"]').type('ind')
        cy.wait(2000)
        cy.get('.ui-menu-item').each(($sele)=>{
            if($sele.text()=='British Indian Ocean Territory'){
                cy.wrap($sele).click()
            }
        });
    });


    it('dynamic dropdown-using contain', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('[placeholder="Type to Select Countries"]').clear().type('ch')
        cy.get('.ui-menu-item').contains('China')
    });

});
