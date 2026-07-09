import{test, expect} from"@playwright/test"
/*
test("@Sanity @regression Check title of the homepage", async({page})=>
{
await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Google");



}
)*/
test("Check title of the homepage",{tag: ["@sanity"],},async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
  }
);

test("Check navigation to the store page",{tag: ["@regression"],},async ({ page }) => {
    await page.goto("https://www.google.com/");
   await page.locator("text=Store").click();
console.log(await page.title());  }
);

test("Check navigation to the store",{tag: ["@sanity","@regression"],},async ({ page }) => {
    await page.goto("https://www.google.com/");
   await page.locator("text=Store").click();
console.log(await page.title());  }
);