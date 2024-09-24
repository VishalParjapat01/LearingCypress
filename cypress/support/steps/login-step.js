import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given ('open the browser and enter url',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

// {word} means it will take it as a string variable
When ('enter username as {word}',(username)=>{

    cy.get('[name="username"]').type(username)

})

And('enter password as {word}',(password)=>{

    cy.get('[name="password"]').type(password)

})
And('click on submit',()=>{

    cy.get('[type="submit"]').click()

})
Then('login should be Successful',()=>{

    //cy.url().should('include','dashboard/index')
})


