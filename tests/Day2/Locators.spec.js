// const {test,expect} = require('@playwright/test')

import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

  // Navigate to the page
  await page.goto('https://demoblaze.com/');

  // Click the login button by CSS selector
  await page.locator('id=login2').click();

  // Provide username - CSS selector
  await page.fill('#loginusername', 'pavanol');
  
  // Provide password - CSS selector
  await page.fill("input[id='loginpassword']", 'test@123');

  // Click the login button - CSS selector (it seems you might have wanted to click the 'login' button here)
  await page.locator('button[onclick="logIn()"]').click();  // Updated to the correct selector for the login button

  // Verifying logout link presence using XPath
  const logoutLink = await page.locator('//*[@id="logout2"]');
  await expect(logoutLink).toBeVisible();

  // Close the page
  await page.close();
});
