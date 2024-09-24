/// <reference types='cypress'/>
/// <reference types='cypress-xpath'/>

describe('Tabs test', () => {
    it.skip('test 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // removing an attribute in cypress using invoke()

        
        //cy.xpath('//a[@id="opentab"]').click()//( it open new tabs not in same tab)


        // we want the link to be in same tab
        cy.xpath('//a[@id="opentab"]').invoke('removeAttr','target').click()


        // to work on difrent link /origin we have to use cy.origin()
        //then only we can interact with the origin

        cy.origin('https://www.qaclickacademy.com/',()=>{

            cy.contains('Courses').click()

            // log the current url
            cy.log(cy.url())
        })
        cy.log(cy.url())
       
    });


    it('Window ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[id="openwindow"]').invoke('removeAttr','onclick').click()

        cy.origin('https://www.qaclickacademy.com/',()=>{

            cy.contains('Courses').click()
            cy.log(cy.url())
        })
        cy.log(cy.url())
    });
});