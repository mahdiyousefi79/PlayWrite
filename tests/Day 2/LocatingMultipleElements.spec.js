import { test, expect } from '@playwright/test';

test('LocateMultipleElements', async ({ page }) => {

await page.goto('https://demoblaze.com/')

// Fing all the links on the page
// const links = await page.$$('a');

// for (const each of  links){

// const linkText =   await each.textContent();
// console.log(linkText)

// }

// 

    // Wait for the presence of the product links using XPath
    await page.waitForSelector('xpath=//*[@id="tbodyid"]//div');
  
    // Locate all product links using XPath
    const products = await page.$$('xpath=//*[@id="tbodyid"]//div/h4/a');
  
    // Loop through the product links and print each product's name
    for (const each of products) {
      const productName = await each.textContent();
      console.log(productName);
    }
  
    await page.close();

})