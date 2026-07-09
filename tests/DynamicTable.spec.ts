import{test,expect,Locator}from"@playwright/test"

test("Dynamic table", async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
const table:Locator=page.locator("table[id='taskTable']>tbody");

await expect(table).toBeVisible();

//Select all the rows then find the number of rows

const rows:Locator[]=await table.locator("\tr").all();
console.log("No of rows in a table: ", rows.length);
//expect(rows).toHaveLength(4);


//Step.1] For chrome process get the value of CPU load
//Read each row to check chrome presence

let CPULoad='';

for(const row of rows)
    
    {
      const ProcessName:string=await row.locator("\td").nth(0).innerText();

       if(ProcessName==="Chrome")
        {
         // CPULoad= await row.locator('td:has-text("%")').innerText(); //CSS syntax
            CPULoad= await row.locator('td',{hasText:'%'}).innerText(); //Playwright syntax
            console.log("CPU Load of the chrome: ",CPULoad);
            break;
        }


    }


//Step.2] Compare the CPU load value in the yellow line with table value

        const ChromeBoxvalue = await page.locator("strong.chrome-cpu").textContent();
        console.log("CPU Load:", ChromeBoxvalue);

        if(ChromeBoxvalue?.includes(CPULoad))
            {
               console.log("CPU load of chrome is equal");

            }
            else
                {
                    console.log("CPU load of chrome is not equal");
                }
          expect(ChromeBoxvalue).toContain(CPULoad);

          await page.waitForTimeout(3000);
}

)