describe('Upload', () => {
    it('test1', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').selectFile('C:/Users/parja/Downloads/images.jpeg')

        cy.get('#file-submit').click()

        cy.xpath("//h3[.='File Uploaded!']").should('be.visible','File Uploaded!')

        
    });
});