///<reference types="cypress" />

describe('Orange test', () => {
    it('Test using expect()', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // expect() to assert name attribute present in username text.

        cy.get('[name="username"]').then(($uname)=>{
            expect($uname).to.have.attr('placeholder','Username')

            // if i want to type some value inside username

            // If we want to tnract with the ele, then we have to convert the jquery ele to cypress project

            cy.wrap($uname).type('Admin')
        })

        cy.get('[name="password"]').then(($upasword)=>{
            expect($upasword).to.have.attr('type','password')

            cy.wrap($upasword).type('admin123')
        })
        cy.get('[type="submit"]').then(($login)=>{

            expect($login).to.have.text(' Login ')

            cy.wrap($login).click()
        })
        //cy.wait(7000) // wait for 2 sec
        //tittle
        cy.title().should('include','OrangeHRM')

        // // click on admin
        cy.xpath("//span[text()='Admin']").click()
        //cy.get('[class="oxd-main-menu-item active"]').click()



        // job Dropdown
        cy.xpath("//span[text()='Job ']").click()
        // cy.get('[class="--active oxd-topbar-body-nav-tab --parent --visited"]').click()

        cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($jobele)=>{
            if($jobele.text()=='Job Categories'){
                cy.wrap($jobele).click()
            }
        })

        // Qualification
        cy.xpath("//span[text()='Qualifications ']").click()
        cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($Qele)=>{
            if($Qele.text()=='Skills'){
                cy.wrap($Qele).click()
            }
        })

        // Organish
        cy.xpath("//span[text()='Organization ']").click()
        
        cy.get('[class=oxd-dropdown-menu]').find('[class="oxd-topbar-body-nav-tab-link"]').each(($Orgele)=>{
            if($Orgele.text()=='General Information'){
                cy.wrap($Orgele).click()
            }
        })

        // configuration dropdown
        cy.xpath("//span[text()='Configuration ']").click()

        cy.get('.oxd-dropdown-menu').find('[class="oxd-topbar-body-nav-tab-link"]').each(($conele)=>{
            if($conele.text()=='Email Configuration'){
                cy.wrap($conele).click()
            }
        })


        // Logout of oranghrm
        // Click on element which opens the dropdown
        // Logout dropdown
        cy.get('.oxd-userdropdown-tab').click()

        cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($ele)=>{
            if($ele.text()=='Logout'){

                cy.wrap($ele).click()
            }
        })


    });
});