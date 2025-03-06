
/*


page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/



const { test, expect } = require('@playwright/test');

test('Built-inLocators', async ({ page }) => {


await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


//page.getByAltText() to locate an element, usually image, by its text alternative.
// const logo = await page.locator('xpath = //*[@id="app"]/div[1]/div/div[1]/div/div[1]/img')
const logo = await page.getByAltText('company-brandin')
await expect(logo).toBeVisible()
// await expect(page.getByAltText('company-branding')).toBeVisible()


//page.getByPlaceholder() to locate an input by placeholder.
await page.getByPlaceholder('Username').fill("Admin")
await page.getByPlaceholder('Password').fill("admin123")


//page.getByRole() to locate by explicit and implicit accessibility attributes.
/*
A button role indicates a clickable button element.
A link role indicates an anchor (<a>) element.
A heading role represents headers (like <h1>, <h2>, etc.).
*/

// await page.getByRole('button',{type:'submit'}).click()
await page.getByRole('button',{name:'Login'}).click()


//page.getByText() to locate by text content.
const name = await page.locator("//p[@class = 'oxd-userdropdown-name']").textContent()
await expect(await page.getByText(name)).toBeVisible()


//looking for dashboard text
await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();



await page.close()
})