import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';



test('Demowebshop Login', async ({ page }) => {

    const login = new LoginPage(page);

   await login.openApplication();

   
    await login.login('Lokesh1@mailinator.com', 'Loki@123');

    await expect(page).toHaveURL(/demowebshop/);

});