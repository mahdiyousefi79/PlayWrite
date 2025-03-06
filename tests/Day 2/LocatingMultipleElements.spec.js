import { test, expect } from '@playwright/test';

test('LocateMultipleElements', async ({ page }) => {

await page.goto('https://demoblaze.com/')

    // Wait for the presence of the product links using XPath
    await page.waitForSelector('xpath=//*[@id="tbodyid"]//div');
  
    // Locate all product links using XPath - look for web elements
    //await page.$$(): This method is used to query and retrieve all elements that match the given selector (in this case, an XPath expression).
    const products = await page.$$('xpath=//*[@id="tbodyid"]//div/h4/a');
  
    // Loop through the product links and print each product's name
    for (const each of products) {
      const productName = await each.textContent();
      console.log(productName);
    }
  
    await page.close();

})