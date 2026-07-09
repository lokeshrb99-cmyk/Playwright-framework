import{test,expect,Locator} from"@playwright/test"

test("Jquery datepicker", async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");

const dateinput:Locator=page.locator("#datepicker");
expect(dateinput).toBeVisible();

//Approach.1] Using fill() method

//dateinput.fill("04/09/1997");   //MM/DD/YYYY


//Select target date

//Approach.2] Using datepicker

await dateinput.click();    //Open the datepicker

//Select target date
const year="2026";
const month="August";
const date="09";


while(true)
    
    {
const currentmonth=await page.locator('.ui-datepicker-month').textContent();
const currentyear=await page.locator('.ui-datepicker-year').textContent();


        if(currentmonth===month && currentyear===year)
            {
                break;

            }

            //Future 

            await page.locator('.ui-datepicker-next').click();


    }


       const alldates= await page.locator('.ui-datepicker-calendar td').all();
        for(let dt of alldates)
            
            {
                    const datetext=await dt.innerText();
                    if(datetext===date)
                        {
                            await dt.click();
                            break;

                        }
            }


await page.waitForTimeout(3000);
}

)