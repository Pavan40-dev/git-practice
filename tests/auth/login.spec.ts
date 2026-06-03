import { test, expect } from '@playwright/test';
import { LoginPage } from "../../pages/loginpage"
import loginData from '../../testdata/data.json';
test.describe('Login', () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
    });

    test('Valid Login', async ({ page }) => {
        await loginPage.login(loginData.data[0]);
        await expect(page).toHaveURL(/dashboard/);
        await expect(loginPage.toastMessage).toContainText('Login Successfully');
    });

    test('Invalid Password', async ({ page }) => {
        await loginPage.login(loginData.data[1]);
        await expect(page).not.toHaveURL(/dashboard/);
        await expect(loginPage.toastMessage).toContainText('Incorrect email or password');
        await expect(loginPage.toastMessage).toBeHidden();
    });

    test('Empty Email', async ({ page }) => {
        await loginPage.login(loginData.data[2]);
        await expect(page).not.toHaveURL(/dashboard/);
        await expect(loginPage.errorMessage).toContainText('Email is required');
    });

    test("Verify token after login", async ({ page }) => {
        await loginPage.login(loginData.data[0]);
        await expect(page).toHaveURL(/dashboard/);
        expect(await loginPage.getToken()).not.toBeNull();
    });

    test('Verify Logout functionality', async ({ page }) => {
        await loginPage.login(loginData.data[0]);
        await expect(page).toHaveURL(/dashboard/);
        await page.getByRole("button", { name: "Sign Out" }).click();
        await expect(page).toHaveURL(/auth\/login/);
    });

    test('Verify token cleared after logout', async ({ page }) => {
        await loginPage.login(loginData.data[0]);
        await expect(page).toHaveURL(/dashboard/);
        await page.getByRole("button", { name: "Sign Out" }).click();
        expect(await loginPage.getToken()).toBeNull();
    });
});