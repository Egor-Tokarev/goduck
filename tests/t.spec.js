const { test, expect } = require('@playwright/test');

test.only('Browser Context Playright test', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.duckduckgo.com");
  const element = await page.$('[name="q"]');
  await element.click();
  await element.type('BrowserStack');
  await element.press('Enter');
  const title = await page.title('');
  console.log(title);
  console.log('oh, hi2');
  expect(title).toEqual('BrowserStack at DuckDuckGo', 'Expected page title is incorrect!');
});