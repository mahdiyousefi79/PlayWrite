// const {test,expect} = require('@playwright/test')

import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {
  await page.goto('https://demoblaze.com/')
  
  // Click the login button by 2 ways:

  // await page.locator('id=login2').click()
  await page.click.locator('id=login2')


  
 
});
