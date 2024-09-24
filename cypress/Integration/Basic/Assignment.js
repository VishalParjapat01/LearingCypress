///<reference types="cypress" />

describe('Books to Scrape - Verify Page Title', () => {
   
    it('Verify that the page title is "My Store"', () => {
        cy.visit('https://books.toscrape.com/')
        // cy.title().should('eq.','My Store') // Verify the page title
    })
    it('Click on "Non Fiction" link and verify the results page', () => {
        cy.visit('https://books.toscrape.com/catalogue/category/books/nonfiction_13/index.html')
        
        // Verify URL contains 'category/books/nonfiction'
        cy.url().should('include', 'category/books/nonfiction')

        // Verify the page contains 'Nonfiction' in the heading
        cy.get('h1').should('contain', 'Nonfiction')

        // add to basket
        cy.xpath('(//button[text()="Add to basket"])[1]').click() 
    })

    
});