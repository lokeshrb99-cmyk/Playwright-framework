import{test,expect,Locator} from"@playwright/test"

test("HardVsSoft Asserions",async({page})=>
    {

       
await page.goto("https://demowebshop.tricentis.com/");

//Hard assertions

await expect(page).toHaveTitle("Demo Web Shop");
await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

const logo= page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(logo).toBeVisible();



//Soft assertions
await expect.soft(page).toHaveTitle("Demo Web Shop");
await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

const logo1= page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect.soft(logo1).toBeVisible();

await page.waitForTimeout(3000);






    }
)