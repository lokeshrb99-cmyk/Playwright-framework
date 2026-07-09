import{test, expect, Page} from"@playwright/test"
test("Popups", async({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();

await page.goto("https://testautomationpractice.blogspot.com/");

//Multiple popups

//page.waitForEvent('popup');
//await page.locator('.PopUp').click();

//Instead using seperately we should use in a single line

await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()]);


const allpopupwindows= context.pages(); //Returns array of pages
console.log("No. of windows/pages: ", allpopupwindows.length);

console.log(allpopupwindows[0].url());
console.log(allpopupwindows[1].url());
//console.log(allpopupwindows[2].url());

await page.waitForTimeout(3000);

for (const pw of allpopupwindows)
    {
        const title=await pw.title();
        if(title.includes('Playwright'))
            {
                await pw.locator('getStarted_Sjon').click();
                await pw.close(); //This will close only Playwright window


            }
    }

    await page.waitForTimeout(3000);
}
)