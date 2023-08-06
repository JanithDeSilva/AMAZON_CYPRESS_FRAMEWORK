# AMAZON_CYPRESS_FRAMEWORK

Get started
1. Clone the project first (https://github.com/JanithDeSilva/AMAZON_CYPRESS_FRAMEWORK.git)
2. Open the project in an IDE like VS Code.
3. Open the terminal and execute (npx cypress open)
4. Then execute the file called "amazonAddToCart.cy.js" in the specs.


Challenges
1. It was a bit of a difficult task to locate some elements, and most of the time some elements don't get captured from the test and it fails.
Ex: Selecting the Book title and clicking on it on the product list page

Framework
1. A framework has been created with proper folder structures, as with:
fixtures to maintain test data
helpers to maintain functions and commands
pageobects to storing web elements
testbase to maintain Cypress commands

Custom added
1. Enabled multi browser testing
2. Enabled mochawesome reporter
3. Gave the retry count to two since most of the time applications fail with loads of API calls or application errors.
