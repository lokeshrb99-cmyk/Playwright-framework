import { test, expect } from "@playwright/test";
import * as fs from "fs";

// Reading data from CSV

//import{parse} from'csv-parse/sync'

import { parse } from "csv-parse/sync";

//Reading data from CSV
const csvPath='TestData/data.csv';
const fileContent=fs.readFileSync(csvPath,'utf-8');

const records:any[]=parse(fileContent,{columns:true,skip_empty_lines:true});



test.describe("Login Data Driven Tests", () => {

  for (const data of records) {

    test(`Login Test for ${data.email}`, async ({ page }) => {

      await page.goto("https://demowebshop.tricentis.com/login");
      await page.locator("//input[@value='Log in']").click();
      await page.locator("#Email").fill(data.email);
      await page.locator("#Password").fill(data.password);

      await page.locator("//input[@value='Log in']").click();
      

      if (data.validity.toLowerCase() === "valid") {
        const logout = page.locator("//a[normalize-space()='Log out']");
        await expect(logout).toBeVisible();
      } else {
        const errorMsg = page.locator(".validation-summary-errors");
        await expect(errorMsg).toBeVisible();
      }

    });

  }

});