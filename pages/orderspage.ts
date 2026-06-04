import{ Page } from '@playwright/test';
export class OrdersPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToOrdersPage() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
    }
}