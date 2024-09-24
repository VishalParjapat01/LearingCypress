class Search{

    Searchitem(searchtext){

        //cy.get('.oxd-input--active').click()

        cy.get('.oxd-input--active').type(searchtext)

        //cy.get('.oxd-main-menu-item--name').click()
        cy.contains('searchtext').click()
    }
}
export default Search;