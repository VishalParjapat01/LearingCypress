class Logout{

    // Re-uasable methods for logout operation
   logoutofapp(){

    // first click on dropdown
    cy.get('.oxd-userdropdown-tab').click()
    
    cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($ele)=>{
        if($ele.text()=='Logout'){

            cy.wrap($ele).click()
        }
    })

    //cy.get('.oxd-dropdown-menu').contains('Logout').click({force:true})

   } 

}
export default Logout;
