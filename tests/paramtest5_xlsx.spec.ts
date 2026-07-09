import { test, expect } from "@playwright/test";
import * as fs from "fs";

// Loaded xl file
//File-->Workbook-->Sheets-->Rows& Columns

import * as XLSX from 'xlsx';

const excelPath="TestData/data.xlsx";

const Workbook=XLSX.readFile(excelPath);
const SheetNames=Workbook.SheetNames[0];

const workSheet=Workbook.Sheets[SheetNames];


//Convert excel into Json

const loginData:any=XLSX.utils.sheet_to_json(workSheet);




test.describe("Login Data Driven Tests", () => {

  for (const {email,password,validity} of loginData) {

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