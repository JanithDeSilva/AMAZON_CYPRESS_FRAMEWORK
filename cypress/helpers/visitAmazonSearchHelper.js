const I = require('../testBase/testBase');
const AmazonHome = require('../pageObjects/amazonHome.json');
const AmazonHomeData = require('../fixtures/amazonHomeData.json');

export function VisitAmazonSearch(){

    I.Visit('/')
    I.Select(AmazonHome.Amazon.AmazonSearchDropdownData.SearchDropDownBox, AmazonHome.Amazon.AmazonSearchDropdownData.BooksDropDown)
    I.Fill(AmazonHome.Amazon.AmazonSearchDropdownData.SearchField, AmazonHomeData.Amazon.AmazonData.Automation)
    I.Click(AmazonHome.Amazon.AmazonSearchDropdownData.SearchButton) 
    I.Click(AmazonHome.Amazon.PLPData.Review)
    I.Click(AmazonHome.Amazon.PLPData.English)        
    I.Wait(5000)

}

export function PLPFilterBook(){

    I.GetSetEnv(AmazonHome.Amazon.PLPData.SecondBookTitle, AmazonHomeData.Amazon.PLP.BookNameVar)
    I.Click(AmazonHome.Amazon.PLPData.SecondBookTitle)

}

export function VerifyBookTitle(){

    I.Visit('/')
    I.Select(AmazonHome.Amazon.AmazonSearchDropdownData.SearchDropDownBox, AmazonHome.Amazon.AmazonSearchDropdownData.BooksDropDown)
    I.Fill(AmazonHome.Amazon.AmazonSearchDropdownData.SearchField, AmazonHomeData.Amazon.AmazonData.Automation)
    I.Click(AmazonHome.Amazon.AmazonSearchDropdownData.SearchButton) 
    I.Click(AmazonHome.Amazon.PLPData.Review)
    I.Click(AmazonHome.Amazon.PLPData.English)        
    I.Wait(5000)
    I.GetSetEnv(AmazonHome.Amazon.PLPData.SecondBookTitle, AmazonHomeData.Amazon.PLP.BookNameVar)
    I.Click(AmazonHome.Amazon.PLPData.SecondBookTitle)
    I.GetVerify(AmazonHome.Amazon.PDPData.ProductTitle, AmazonHomeData.Amazon.PLP.BookNameVar)

}

export function AddtoCartGotoCart(){

    I.ClickForce(AmazonHome.Amazon.PDPData.UnitPriceButton)
    I.Click(AmazonHome.Amazon.PDPData.ItemDropDown)
    I.Click(AmazonHome.Amazon.PDPData.DropDownSelectQuantity)
    I.Click(AmazonHome.Amazon.PDPData.AddToCartButton)
    I.Click(AmazonHome.Amazon.PDPData.GoToCartButton)


}

export function ClearCartVerifySubtotal(){

    I.Click(AmazonHome.Amazon.Cart.DeleteCart)
    I.GetVerify(AmazonHome.Amazon.Cart.SubTotal, AmazonHomeData.Amazon.Cart.SubTotal)
    
}