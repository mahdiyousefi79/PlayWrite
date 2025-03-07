const{test,expect} = require('@playwright/test')

test('softAssertion', async({page}) => {


await page.goto('https://demoblaze.com//index.html')

// hard Assertion:
// await expect(page).toHaveTitle('STORE')
// await expect(page).toHaveURL('https://demoblaze.com//index.html')
// await expect(page.locator('.navbar-brand')).toBeVisible()

//softAssertions
await expect.soft(page).toHaveTitle('STORE11')
await expect.soft(page).toHaveURL('https://demoblaze.com//index.html')
await expect.soft(page.locator('.navbar-brand')).toBeVisible()


page.close()
})


