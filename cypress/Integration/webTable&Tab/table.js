/// <reference types='cypress'/>
/// <reference types='cypress-xpath'/>

describe('"Headling mutiple Tabs,Multiple WIndows,webtable', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        
        cy.xpath('//table[@name="courses"]/tbody/tr[10]/td[3]').then(($ele)=>{

            //cy.log is used tp print in the console of cypress
            // we can use log to print and and check
            cy.log($ele.text())
            // through variable

            //var ele2=$ele.text();

        })
    });
    it('multiple element test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            // iterating macthing element using each()
        cy.xpath('//table[@name="courses"]/tbody/tr[8]/td').each(($ele)=>{

            if ($ele.text().includes('Bugzilla')) {
                // next will point to the next element in the iteration
                cy.wrap($ele).next().then((num)=>{

                    cy.log(num.text())

                })
            }
        })
    
        
    });

    it.skip('multiple element test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('(//table[@id="product"])[2]/tbody/tr[7]/td').each(($ele)=>{

            if ($ele.text().includes('Businessman')) {
                cy.wrap($ele).next().then((char)=>{
                    cy.log(char.text()).next().then((ch)=>{
                        if (ch.text().includes('Mumbai')) {
                            cy.log(ch.text())
                        }
                    })
                })
                
            }
        })


        
    });
    it('for google to next', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//table[@class="gf-t"]/tbody/tr/td[4]/ul/li').each(($ele)=>{

            if($ele.text().includes('Social Media')){
                cy.wrap($ele).next().then((char)=>{
                    cy.log(char.text())
                })
            }
        })
        
    });


});