import { before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

// Given block in step defination
Given('open browser enter simpleform url',()=>{

    cy.visit('https://v1.training-support.net/selenium/simple-form')

  
    
})

// When block in step defination
When('user enter firstname,lastname,email,contact',()=>{

    cy.get('#firstName').type('vishal')
    cy.get('#lastName').type('parjapat')
    cy.get('#email').type('vishal@gmail.com')
    cy.get('#number').type('9689758719')
    // cy.get('[value="submit"]').click()


})

// And block in step defination
And('user clicks on submit',()=>{

    cy.get('input[type="submit"]').click()



})

// Then block in step defination
Then('Successful alert should be displayed with a message',()=>{


    cy.on('window:alert',(text)=>{

        expect(text).to.contains("vishal")
    })


})
