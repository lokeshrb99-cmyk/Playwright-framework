import { Page } from "@playwright/test";

export class LoginPage {

    constructor(private page: Page) {}

    async openApplication() {
        await this.page.goto("https://demowebshop.tricentis.com/login");
    }

    async login(email: string, password: string) {

        await this.page.fill("#Email", email);
        await this.page.fill("#Password", password);

        await this.page.locator("//input[@value='Log in']").click();
    }

}