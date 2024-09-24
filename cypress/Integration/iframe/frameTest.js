describe('testframe', () => {
    it('test01', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // are loading the required i frame.

        cy.frameLoaded('#courses-iframe')

        // using iframe() i am checking for a blog element and then clicking on it

        cy.iframe('#courses-iframe').contains('Blog').click()

        //cy.iframe().find('(//a[.="Mentorship"])[1]').click()
        
    });
    it.only('test02', () => {
        
        cy.visit('https://v1.training-support.net/selenium/iframes')

        //cy.frameLoaded('iframe[src="/selenium/frame1"]')

        // using find() - provide locator and then click on the first matching

        cy.iframe('iframe[src="/selenium/frame1"]').find('#actionButton').first().click()

        

    });
});