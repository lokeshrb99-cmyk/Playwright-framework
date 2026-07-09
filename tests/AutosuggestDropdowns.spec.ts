import{test,expect,Locator} from "@playwright/test"

test("Autosuggest dropdown", async({page})=>
{
await page.goto("https://www.flipkart.com/");

await page.locator("input[name='q']").first().fill("smart");
await page.waitForTimeout(3000);

const options:Locator=page.locator("ul>li");

const count=options.count();
console.log("Number of suggested options ", count);


//I want to capture the 5th element

console.log(await options.nth(5).innerText());

for(let i=0;i<await count;i++)
    {
      console.log(await options.nth(i).innerText());  
    }


//Select/Click on the smart phone

for(let i=0;i<await count;i++)
    {
        const text= await options.nth(i).innerText();
      if(text==='smartphone')
        {

         options.nth(i).click();
         break;


        }
      
      


    }





await page.waitForTimeout(3000);








}


)

