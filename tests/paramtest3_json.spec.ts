import { test, expect } from "@playwright/test";
import * as fs from "fs";

// Reading data from JSON
const jsonPath = "./TestData/TestData.Json.json";
const logindata = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

test.describe("Login Data Driven Tests", () => {

  for (const { email, password, validity } of logindata) {

    test(`Login Test for ${email}`, async ({ page }) => {

      await page.goto("https://demowebshop.tricentis.com/login");
      await page.locator("//input[@value='Log in']").click();
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);

      await page.locator("//input[@value='Log in']").click();
      

      if (validity.toLowerCase() === "valid") {
        const logout = page.locator("//a[normalize-space()='Log out']");
        await expect(logout).toBeVisible();
      } else {
        const errorMsg = page.locator(".validation-summary-errors");
        await expect(errorMsg).toBeVisible();
      }

    });

  }

});