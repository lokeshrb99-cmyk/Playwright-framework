import{test, expect} from"@playwright/test"

//Testdata
const searchItems:string[]=['Laptop','Smartphone','Monitor','Gift card'];

//Using for-of loop
/*
for(const item of searchItems)
{
    
 test(`Search test for ${item}`, async ({ page }) => {
    
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator('#small-searchterms').fill(item);
        await page.locator("//input[@value='Search']").click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});

});
*/

/*
//Using foreach function

searchItems.forEach((item)=>
    {
    
 test(`Search test for ${item}`, async ({ page }) => {
    
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator('#small-searchterms').fill(item);
        await page.locator("//input[@value='Search']").click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});

                                                    }
    )
    }
)
*/

test.describe("search items", async()=>
    {
searchItems.forEach((item)=>
    {
    
 test(`Search test for ${item}`, async ({ page }) => {
    
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator('#small-searchterms').fill(item);
        await page.locator("//input[@value='Search']").click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});

                                                    }
    )
    }
)

    }
)