const{test,expect} = require('@playwright/test')

test('AssertionTest', async({page})=> {

await page.goto('https://demo.nopcommerce.com/register')

// assertion page url
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

//assertion page title
await expect(page).toHaveTitle('nopCommerce demo store. Register')

// assertion element is visible:
 const logoElement =  await page.locator('.header-logo')  // find first webElement then assertion
 await expect(logoElement).toBeVisible() // then assertion

 await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()  // in one line

// assertion element is enable
 await expect(page.locator('#small-searchterms')).toBeEnabled()


// check redio button is selected or not:
// First select radio Button male
const radioButton = await page.locator('#gender-male')  // 
await radioButton.click()
await expect(radioButton).toBeChecked()


//check check box is sceleted or not (Newslater)
const newsLaterCheckBox = await page.locator('#Newsletter')
await expect(newsLaterCheckBox).toBeChecked()

// assertion element has expected attibute and value or not
await expect(page.locator('//button[text()="Register"]')).toHaveAttribute('type','submit')

// asserion element exact match for Register

await expect(page.locator('.page-title')).toHaveText('Register')

//Partial text
await expect(page.locator('.page-title')).toContainText('Reg')


// to have value on not for example Email
const emailElement = page.locator('#Email')
await emailElement.fill('mahdi@gmail.com')
await expect(emailElement).toHaveValue('mahdi@gmail.com')


await page.close();

})