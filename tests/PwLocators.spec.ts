import{test, expect,Locator} from "@playwright/test";

//Use getBysAltText Locator

test("Verify the Locators",async({page})=>
{
page.goto("https://www.nopcommerce.com/en");
const Logo: Locator=page.getByAltText("nopCommerce");
await expect(Logo).toBeVisible();

//Use getByText Locator
const Text:Locator=page.getByText("Welcome to our store");
await expect(Text).toBeVisible();

//We can write the above 2lines of code in a single line

await expect(page.getByText("Welcome to our store")).toBeVisible();

//full string also it work/partial string also it works
await expect(page.getByText("Welcome to")).toBeVisible();

//case sensitive inside method it works case sensitive, for ignoring
//i-->Ignore the case sensitive
await expect(page.getByText("/Welcome\s+To\s+Our\s+Store/i")).toBeVisible();


})




test('Verify the Locators_1', async ({ page }) => {

  await page.goto('https://www.flipkart.com/', {
    waitUntil: 'domcontentloaded'
  });

  const loginLink = page.getByRole('link', { name: 'Login' }).first();

  await expect(loginLink).toBeVisible();

  await loginLink.click();

await page.getByRole('link',{name: /New to Flipkart\? Create an account/i}).click();

});

test("Verify the Locators_2",async({page})=>
{
await page.goto('https://www.flipkart.com/',{waitUntil:'domcontentloaded'})




})


