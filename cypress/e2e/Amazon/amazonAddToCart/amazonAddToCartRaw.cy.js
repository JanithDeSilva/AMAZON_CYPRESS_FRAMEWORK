const I = require('../../../testBase/testBase');
const AmazonHome = require('../../../pageObjects/amazonHome.json');
const AmazonHomeData = require('../../../fixtures/amazonHomeData.json');
const AmazonVisitSearchHelper = require('../../../helpers/visitAmazonSearchHelper');

describe(AmazonHomeData.Amazon.MainTitle, () => {
    it(AmazonHomeData.Amazon.AmazonData.Name, () => {
        
        AmazonVisitSearchHelper.VisitAmazonSearch() 
        
        cy.get(AmazonHome.Amazon.PLPData.SecondBookTitle)

                .invoke('text')  // for input or textarea, .invoke('val')

                .then((TitleBook) => {                            
                
                     
                I.Click(AmazonHome.Amazon.PLPData.SecondBookTitle)
                I.GetVerify(AmazonHome.Amazon.PDPData.ProductTitle, TitleBook)
                cy.get(AmazonHome.Amazon.PDPData.UnitPrice)
        
                    .invoke('text')  // for input or textarea, .invoke('val')

                    .then((PriceBook) => {                            

                    AmazonVisitSearchHelper.AddtoCartGotoCart()

                    I.GetVerify(AmazonHome.Amazon.PDPData.ProductTitle, TitleBook)
                    I.GetVerify(AmazonHome.Amazon.Cart.QuantityCart, AmazonHomeData.Amazon.Cart.Quantity)
                    I.GetVerify(AmazonHome.Amazon.Cart.BookPriceCart, PriceBook)
                    
                    AmazonVisitSearchHelper.ClearCartVerifySubtotal()

                               
                });

            });

        

    })

    
})