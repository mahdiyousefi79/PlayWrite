

// test('Home Page - Google', async ({ page }) => {...}): This defines a test case. The string 'Home Page 
// - Google' is the name of the test, which will show up when the test runs.

//The async ({ page }) => {...} is an asynchronous arrow function where { page } is a context parameter passed in by Playwright

const { test, expect } = require('@playwright/test');

test('Home Page - Google', async ({ page }) => {

  // Navigate to Google's homepage
  await page.goto('https://www.google.com/');

  // Get the page title
  const pageTitle = await page.title(); 

  // Log the actual title
  console.log('Page title is:', pageTitle);

  // Assert that the title is "Google"
  await expect(page).toHaveTitle('Google');

  // Get the current page URL
  const pageUrl = page.url(); 

  // Log the current page URL
  console.log('Page URL is:', pageUrl);

  // Assert that the URL is https://www.google.com/
  await expect(page).toHaveURL('https://www.google.com/');

  // Close the page after the test
  await page.close();
});
