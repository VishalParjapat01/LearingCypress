class link{


    // method to click on a link

    clickonlink(linktext){

        // i am passing the text of the lick from my it block and , in this method am clicking on it

        cy.contains(linktext).click()
    }
}
export default link;