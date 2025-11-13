import {test, expect} from "@playwright/test";

test("Navigate to the page, dummy data", async ({page}) => {
    console.log("Hello, Playwright!");
    await page.goto("https://playwright.dev/");
    await page.getByRole("link", {name: "Get started"}).click();
})

test("Kickstarting my second testing", () => {
    console.log("Hello, Playwright again!");
})