import{test,expect,Locator} from "@playwright/test";

test("Hidden bootstrap dropdown",async({page})=>
    
    {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   
await page.waitForTimeout(5000);

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

     await page.waitForTimeout(5000);
    //Click on PIM

    await page.getByText('PIM').click();
    await page.locator('form i').nth(2).click();

    await page.waitForTimeout(5000);
    //Capture all the options from dropdown

    const options:Locator=page.locator("div[role='listbox'] span");

    const count:number=await options.count();


    console.log("Number of options in a dropdown: ", count);

// Print all the options

for(let i=0;i<count;i++)
    {
      console.log(options.nth(i).innerText);
    }


//Select/click on option

for(let i=0;i<count;i++)
    {
      const text=await options.nth(i).innerText();

       if(text==='Automation Texter')
         {
           options.nth(i).click;
           break;

    }
    }
await page.waitForTimeout(5000);

    }

)
