describe('drag&drop', () => {
    it('tc1', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop')

        // locator for element 1-ball

        //{which:1}--> i want to work with left mouse button
        //{which:2}--> i want to work with middle mouse button
        //{which:3}--> i want to work with right mouse button

        //in trigger() - 2 parameters - mousedown - 1- left - {which:1} - left button of mouse

        //cy.get('[src="/images/ball.png"]').trigger('mousedown',{which:1})*** mousedown use to hold leftclick
        cy.get('#draggable').trigger('mousedown',{which:1})

        // locator for element 1-box

        // we are telling cypress - to  move the mouse from 1 point to the mentioned locator - box

        // instructing cypress to release the button forcefully

        cy.get('#droppable').trigger('mouseup',{force:true})

        // for box - 2

        cy.get('[src="/images/ball.png"]').trigger('mousedown',{which:1})

        cy.get('#dropzone2').trigger('mouseup',{force:true})



        
    });
});