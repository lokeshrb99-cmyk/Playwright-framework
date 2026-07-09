/*import{test,expect,Locator} from"@playwright/test"

test("Pagination", async({page})=>
{
    await page.goto("https://datatables.net/");

    await page.waitForTimeout(2000);
let hasmorepage=true;


while(hasmorepage)
    
    {
        const rows=await page.locator('#example tbody tr').all();
        for(const row of rows)
            
            {
                    console.log(await row.innerText());

            }
           
    }


       const Nextbutton = page.locator("[aria-label='Next']");
    const isdisabled = await Nextbutton.getAttribute('class');

if(isdisabled?.includes('disabled'))
    {
        hasmorepage=false;
    }
else
    {
        await Nextbutton.click();
    }

await page.waitForTimeout(3000);


}

)

*/

import { test, expect, Locator } from "@playwright/test";

test("Pagination", async ({ page }) => {

    await page.goto("https://datatables.net/");

    let hasMorePage = true;

    while (hasMorePage) {

        const rows = await page.locator("#example tbody tr").all();

        for (const row of rows) {
            console.log(await row.innerText());
        }

        const nextButton = page.locator("[aria-label='Next']");

        const classes = await nextButton.getAttribute("class");

        if (classes?.includes("disabled")) {
            hasMorePage = false;
        } else {
            await nextButton.click();
            await page.waitForTimeout(1000);
        }
    }

});


test("Filter the rows and check the count", async ({ page }) => {

    await page.goto("https://datatables.net/");

const dropdown: Locator= page.locator('#dt-length-0');
await dropdown.selectOption({label: '25'});


const rows=page.locator("#example tbody tr");
await expect(rows).toHaveCount(25);
 
}
)