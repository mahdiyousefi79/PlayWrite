# comments to run:

# Runs all tests on all browsers in headless mode
npx playwright test

# Runs a specific test file (HomePageTest.spec.js)
playwriteAutomation % npx playwright test --project=chromium --headed  HomePageTest.spec.js

# Runs multiple specific test files
npx playwright test HomePageTest.spec.js AnotherTest.spec.js

# Runs tests with a specific title
npx playwright test -g "test title"

# Runs tests on the Chromium browser
npx playwright test --project=chromium

# Runs tests in headed mode (with a visible browser window)
npx playwright test --headed

# Runs tests in debug mode
npx playwright test --debug

# Runs a specific test file (HomePageTest.spec.js) in debug mode
npx playwright test HomePageTest.spec.js --debug

