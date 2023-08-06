class testBase{
    
    //navigate to the site
    Visit(url)
    {
        cy.visit(url)
    }

    //creating method to get locator and select
    Select(locator, element)
    {
        cy.get(locator).select(element, { force: true })
    }

    //Fill into text field
    Fill(locator, element)
    {
        cy.get(locator).type(element)
    }

    //Click on the element
    Click(locator)
    {
        cy.get(locator).click({ multiple: true })
    }

    //Click force
    ClickForce(locator)
    {
        cy.get(locator).click({force: true})
    }

    ClickAsButton(locator)
    {
        cy.get(locator).as('btn').click()
    }

    //wait
    Wait(integer)
    {
        cy.wait(integer)
    }

    //get and set to env
    GetSetEnv(locator, variableName)
    {
        cy.get(locator)
            .invoke('text')  // for input or textarea, .invoke('val')
            .then((text) => {                            
                //cy.log("name : "+ text);
                Cypress.env(variableName, text)
            });
    }

    //Get and verify
    GetVerify(locator, text)
    {
        cy.get(locator).should('have.text', text)
    }


}

module.exports = new testBase();