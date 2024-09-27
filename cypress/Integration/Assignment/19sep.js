describe('Assignment 19', () => {
    it.skip('apply wait ', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')

        cy.xpath('//button[.="Start"]').click()

        cy.wait(7000)
        
    });

    it('Table fetch', () => {
        
        cy.visit('https://the-internet.herokuapp.com/tables#delete')

        cy.xpath('//table[@id="table1"]/tbody/tr[4]/td[3]').then(($ele)=>{
            cy.log($ele.text())
        })
        cy.wait(5000)

        cy.xpath('//table[@id="table2"]/tbody/tr[2]/td[6]').then(($el=>{

            cy.log($el.text())
        }))
        cy.wait(5000)
    });

    it.only('Handle tab & window', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.xpath('//a[.="Click Here"]').invoke('removeAttr','target').click()

        
    });

    it('All types Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsAlert()"]').click()
        cy.on('window:alert',(text)=>{
            expect(text).to.contains('I am a JS Alert')
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(text)=>{
            expect(text).to.contains('I am a JS Confirm')
            return true
            
        })
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Hello!');
            cy.get('button[onclick="jsPrompt()"]').click();
        });
        
    });

});