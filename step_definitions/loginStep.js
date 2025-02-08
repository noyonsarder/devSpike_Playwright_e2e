const { Given, When, Then } = require("@cucumber/cucumber");
const { expect} = require("@playwright/test");


Given('I navigate to the test site', async function () {

    await this.page.goto("https://www.paperturn.com/");
})

When('I click on the login link', async function () {

    await this.page.locator(`(//a[@href='https://www.paperturn.com/login'])[2]`).click();
    await this.page.waitForSelector(`//input[@id='email']`);
})

When('I put the {string} and {string} in the login form', async function (username, password) {

    await this.page.locator(`//input[@id='email']`).fill(username);
    await this.page.locator(`//input[@id='password']`).fill(password);
})

When('I click on the login button', async function () {

    await this.page.locator(`//button[text()='Log in']`).click();
})

When('I select the remember me checkbox', async function(){
    await this.page.waitForSelector(`//div[@class='checkbox']`);
    await this.page.locator(`//div[@class='checkbox']`).click();
})

Then('the following {string} should display', async function (text) {

    if (text === 'Wrong email or password') {
        await this.page.waitForSelector(`//p[text()='Wrong email or password']`);
        const element = await this.page.locator(`//p[text()='Wrong email or password']`);
        await expect(element).toBeVisible();
    }

    if (text === 'Log out') {
        await this.page.waitForSelector(`(//a[text()='Log out'])[1]`);
        const element = await this.page.locator(`(//a[text()='Log out'])[1]`);
        await expect(element).toBeVisible();
    }

})
