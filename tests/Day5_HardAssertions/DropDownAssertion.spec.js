const{test,expect} = require('@playwright/test')

test('DropDownAssertionTest', async({page})=> {

await page.goto('https://demo.nopcommerce.com/notebooks')


const dropdown = page.locator('select[name="products-orderby"]');
await expect(dropdown).toBeVisible();  // Ensure the dropdown is visible on the page
const optionsOfDropDown = await dropdown.locator('option'); //dropdown.locator('option'): This line is locating all <option> elements inside the dropdown
await expect(optionsOfDropDown).toHaveCount(6);  // Since there are 6 options in your HTML

//To assert that all the options in the dropdown have the correct text names

// Define the expected option names in the correct order (Array)
const expectedOptionNames = [
    'Position',
    'Name: A to Z',
    'Name: Z to A',
    'Price: Low to High',
    'Price: High to Low',
    'Created on'
  ];
  
// Create an empty array to store option text
const optionsArray = [];

// Loop through the options and push the text of each option into the array
for (let i = 0; i < 6; i++) {
    const optionText = await optionsOfDropDown.nth(i).textContent(); // Get text of each option
    optionsArray.push(optionText);  // Add the option text to the array
}
/*
nth(i):
This is a method provided by the Playwright API (or similar testing libraries like Puppeteer) to select an element at a specific index from a collection of elements.
nth(i) targets the i-th element in a list of elements.
*/

console.log(optionsArray);  // Log the array to see the extracted option texts

// Assert that the expected and actual arrays are equal
expect(optionsArray).toEqual(expectedOptionNames);


page.close()

})