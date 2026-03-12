// @ts-check
import { test, expect } from '@playwright/test';
test('login page', async ({ page }) => {
  await page.goto('http://localhost:3004');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Login");
});
test('login credentials', async ({ page }) => {
  await page.goto('http://localhost:3004');
  // Fill in the username and password fields.
  await page.getByRole('textbox', { name: 'Username' }).fill('user');
  await page.getByRole('password', { name: 'Password' }).fill('password');
  // Click the login button.
  await page.getByRole('button', { name: 'Login' }).click();
  // Expects page to have a heading with the name of Dashboard.
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test.skip('has title', async ({ page }) => {
  await page.goto('https://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
