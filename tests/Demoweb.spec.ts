import { test, expect, Locator } from "@playwright/test";

test("xPath demo in playwright", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  // Absolute XPath
  const absoluteLogo: Locator = page.locator("//html/body/div[4]/div[1]/div[1]/div[1]/a/img");
  await expect(absoluteLogo).toBeVisible();

  // Relative XPath
  const relativeLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
  await expect(relativeLogo).toBeVisible();



//contains () and count the products
 const Product:Locator=page.locator("//h2/a[contains(@href,'computer')]");
 const ProductCount:number=await Product.count();
 expect(ProductCount).toBeGreaterThan(0);
 
});