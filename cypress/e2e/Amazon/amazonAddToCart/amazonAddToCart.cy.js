const I = require('../../../testBase/testBase');
const AmazonHome = require('../../../pageObjects/amazonHome.json');
const AmazonHomeData = require('../../../fixtures/amazonHomeData.json');
const AmazonVisitSearchHelper = require('../../../helpers/visitAmazonSearchHelper');

describe(AmazonHomeData.Amazon.MainTitle, () => {
    

    it(AmazonHomeData.Amazon.AmazonData.Name, () => {
        
        AmazonVisitSearchHelper.VisitAmazonSearch()
        AmazonVisitSearchHelper.PLPFilterBook()

    })

    it(AmazonHomeData.Amazon.AmazonData.NameSecond, () => {

        const bookHeaderTitleName = Cypress.env(AmazonHomeData.Amazon.PLP.BookNameVar); 
        cy.log(bookHeaderTitleName)   
        
        const bookPrice = Cypress.env(AmazonHomeData.Amazon.PDP.BookPriceVar); 
        cy.log(bookPrice)

        AmazonVisitSearchHelper.VerifyBookTitle()
        AmazonVisitSearchHelper.AddtoCartGotoCart()  
        AmazonVisitSearchHelper.ClearCartVerifySubtotal()
        
    })
    
})