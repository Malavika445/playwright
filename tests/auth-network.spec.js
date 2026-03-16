const { test, expect } = require("@playwright/test");

test.describe("Auth, Network & Advanced Concepts", () => {
test("1. Basic Authentication via URL", async ({ page }) => {
    // Injecting credentials directly into the URL
    await page.goto(
      "https://admin:admin@the-internet.herokuapp.com/basic_auth",
    );
    await expect(page.locator("p")).toContainText(
      "Congratulations! You must have the proper credentials.",
    );
  });

  test("2. Form Based Auth - Success", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.fill("#username", "tomsmith");
    await page.fill("#password", "SuperSecretPassword!");
    await page.click('button[type="submit"]');
    await expect(page.locator("#flash")).toContainText(
      "You logged into a secure area!",
    );
  });

  test("3. Form Based Auth - Failure", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.fill("#username", "wronguser");
    await page.fill("#password", "wrongpassword");
    await page.click('button[type="submit"]');
    await expect(page.locator("#flash")).toContainText(
      "Your username is invalid!",
    );
  });


});
