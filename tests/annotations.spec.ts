/* Different Annotations in playwright
--------------------------------------------
only 
skip
fail
fixme
slow
*/

import{test, expect, firefox} from"@playwright/test"

//Only
test("Test1", async({page})=>
    {
await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Google");


    }

)
//Skip the test
test.skip("Test2", async({page})=>
    {
await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Google");


    }

)
//Skip the test based on condition

test("Test3", async({page, browserName})=>
    {

        test.skip(browserName==='firefox', 'this test is skipped if browser is firefox');
await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Google");


    }

)
//Fail
test.fail("Test4", async({page})=>
    {
await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Googl");


    }

)
//Fixme
test.fixme("Test5", async({page})=>
    {
await page.goto("https://www.google.com/");
//No assertions

    }

)

//Slow
test("Test6", async({page})=>
    {
        test.slow();//triple the timeout (Default 30sec)
await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Google");


    }

)
