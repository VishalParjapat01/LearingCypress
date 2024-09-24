class LoginPage{


    // In this class , we have to write the cypress commands as a re-usable methods

    Enterurl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }
    // Re - usable method for Login

    Logintoapp(){

        cy.get('[name="username"]').type('Admin') // hardcorded
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()

    }

    Forgotpassword(){
        cy.get('.orangehrm-login-forgot').click()

        cy.get('[name="username"]').type('random user')

        cy.get('.orangehrm-forgot-password-button--reset').click()
    }


}  // end  of class

export default LoginPage;