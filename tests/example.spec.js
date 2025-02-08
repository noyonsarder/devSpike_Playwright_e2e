// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


/*

test.describe("Login Test Cases", ()=>{

    test.beforeAll(async ({browser})=>{
        const context= await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://demoblaze.com/index.html");
        await expect(page).toHaveURL(/.*index/);
        await page.locator(`//a[@id='login2']`).click();
        await page.waitForSelector(`//h5[text()='Log in']`);
        await page.locator(`//input[@id='loginusername']`).fill("noyon");
        await page.locator(`//input[@id='loginpassword']`).fill("Tim1234@");
        await page.locator(`//button[text()='Log in']`).click();
        const element= await page.locator(`//a[text()='Welcome noyon']`);
        await expect(element).toBeVisible();
        await page.context().storageState({ path: "auth.json" });
        await context.close();
    })

    test.use({
        storageState: "auth.json"
    });

    test("Verify user is already logged in", async ({ page }) => {
        await page.goto("https://demoblaze.com/index.html");
        const element = await page.locator(`//a[text()='Welcome noyon']`);
        await expect(element).toBeVisible(); // User remains logged in
    });

    test("ByPass login to the System:", async ({page})=>{
        await page.goto("https://demoblaze.com/index.html");
        await page.locator(`//a[text()='About us']`).click();
        await page.waitForSelector(`//h5[text()='About us']`);
        const element= await page.locator(`//h5[text()='About us']`);
        await expect(element).toBeVisible();

    })
})

*/