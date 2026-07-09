import { test, expect } from "@playwright/test";

const loginTestData: string[][] = [
  ["lokesh1@mailinator.com", "Loki@123", "valid"],
  ["invalid.user@example.com", "test@321", "invalid"],
  ["validuser@example.com", "testxyz", "invalid"],
];

test.describe("Login Data Driven Tests", () => {

  for (const [email, password, validity] of loginTestData) {

    test(`Login Test for ${email} and ${password}`, async ({ page }) => {

      await page.goto("https://demowebshop.tricentis.com/");
        
await page.locator("//input[@value='Log in']").click();
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);

      

      if (validity.toLowerCase() === "valid") {

        // Assert logout link is visible
        const logout = page.locator("a[href='/logout']");
        await expect(logout).toBeVisible({ timeout: 3000 });

      } else {

        // Assert error message is visible
        const errorMsg = page.locator(".validation-summary-errors");
        await expect(errorMsg).toBeVisible({ timeout: 3000 });

        // Assert user is still on login page
        await expect(page).toHaveURL(
          "https://demowebshop.tricentis.com/login"
        );
      }

    });

  }

});