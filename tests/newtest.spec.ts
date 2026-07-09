import { test, expect } from '@playwright/test';

test("verify page title",async({page})=>
    {
       await page.goto("https://www.amazon.com/");

     let title:string=await page.title();
     console.log("title",title);
     await expect(page).toHaveTitle(/Amazon/);

    })


   test("verify url",async({page})=>
        {
await page.goto("https://www.amazon.com/");

     let url:string=await page.url();
     console.log("url:",url);
     await expect(page).toHaveURL(/amazon/);
        })