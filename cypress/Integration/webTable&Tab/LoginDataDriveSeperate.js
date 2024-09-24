describe('using data driven approach', () => {

    // define before hook -

    before(() => {

        // code to connect with the external file -  example.json

        cy.fixture('example').then((data)=>{

            // initialize my data , i have top make it a gloabal instance
            globalThis.data=data;//
        
        })
    });
    it('Login Test', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Username
        cy.get('[name=username]').type(data.username);

        // Password
        cy.get('[type="password"]').type(data.password);

        //Button
        cy.get('[type="submit"]').click();
    });
    it('invalid -Login Test', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Username
        cy.get('[name=username]').type(data.invaliduser);

        // Password
        cy.get('[type="password"]').type(data.invalidpass);

        //Button
        cy.get('[type="submit"]').click();
    });
});