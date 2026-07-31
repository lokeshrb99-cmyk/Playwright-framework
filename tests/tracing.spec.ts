import { test, expect } from '@playwright/test';

test('test', async ({ page,context }) => {

  //await context.tracing.start({screenshots:true, snapshots:true});

  await context.tracing.start({
  screenshots: true,
  snapshots: true,
});

  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
 // await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
 // await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
 // await page.getByRole('link', { name: 'Log out' }).click();
  await context.tracing.stop({path:'trace.zip'});
  
});