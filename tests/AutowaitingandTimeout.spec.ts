import{test,expect,Locator} from"@playwright/test"

test("Autowaiting and Timeout",async({page})=>
    {

        //I want to set timeout for particualr test level,we need to do, and also we commented in the config page-global timeout 
        test.setTimeout(50000);
       // test.slow();// 90 sec(Default is 30sec)
       
await page.goto("https://demowebshop.tricentis.com/");

await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
await expect(page.locator('text=Welcome to our store')).toBeVisible();
//If I want to put timeout except config file we can do like this
//await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});

await page.locator('#small-searchterms').fill("Laptop",{force:true});//Force- It will do actionability force
await page.locator('.button-1.search-box-button').click({force:true});//





    }
);