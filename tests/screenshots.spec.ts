import {test, expect } from "@playwright/test"
test("Screenshots", async({page})=>
{
await page.goto("https://demowebshop.tricentis.com/");

const timestamp=Date.now();

//Page screenshot
//await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'});


//Full page screenshot
await page.screenshot({path:'screenshots/'+'Fullhomepage'+timestamp+'.png', fullPage:true});

//const logo= page.locator("//img[@alt='Tricentis Demo Web Shop']");
//logo.screenshot({path:'screenshots/'+'Logo'+timestamp+'.png'});


await page.locator(".product-grid.home-page-product-grid").screenshot({path:'screenshots/'+'Featured products'+timestamp+'.png'});


 await page.waitForTimeout(2000);


}
)


test("Screenshots from config", async({page})=>
{
    await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();



 await page.waitForTimeout(2000);


}
)
