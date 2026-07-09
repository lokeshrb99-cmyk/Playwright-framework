/*
    open app  //BeforeAll
             Login
            find products
            Logout
        Login again
        Add products to cart
        Logout
    Close app

*/

import{test,expect, Page} from"@playwright/test"


let page:Page;

test.beforeAll("Open app", async({browser})=>
    
    {
        page=await browser.newPage();

        await page.goto("https://demoblaze.com/");

    }
)

test.afterAll("closing app", async()=>
    {
        await page.close();

    }
)

test.beforeEach("Login", async()=>
{
 await page.locator('#login2').click();
 await page.locator('#loginusername').fill("pavanol");
 await page.locator('#loginpassword').fill("Test@123");

 await page.locator("button[onclick='logIn()']").click();

 await page.waitForTimeout(2000);

}
)

 test.afterEach("Logout", async()=>
{
 await page.locator('#logout2').click();

}
)


test.describe("Group1", async()=>
    {
test("Find number of products", async()=>
    {
        const products=page.locator("#tbodyid .hrefch");
        const count=products.count();
        console.log("No. of products: ", count);
        await expect(products).toHaveCount(9);


    }
)

test("Add product to cart", async()=>
    
    {
await page.locator("text='Nokia lumia 1520'").click();

//Handle alert before the click
page.once("dialog", async(dialog)=>
{
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();

}
)
    await page.locator('.btn.btn-success').click();

    }
)



    }
)