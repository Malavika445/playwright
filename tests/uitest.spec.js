import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Dynamic ID' }).click();
  await page.getByRole('link', { name: 'Resources' }).click();
});
test('test1', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'AJAX Data' }).click();
  await page.getByRole('link', { name: 'Resources' }).click();
  await page.getByRole('link', { name: 'w3schools.com' }).click();
  await page.getByRole('textbox', { name: 'Search our tutorials' }).click();
  await page.getByRole('textbox', { name: 'Search our tutorials' }).click();
  await page.getByRole('textbox', { name: 'Search our tutorials' }).click();
  await page.getByRole('textbox', { name: 'Search our tutorials' }).dblclick();
});
test('test2', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Scrollbars' }).click();
});
test('test3', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Visibility' }).click();
  await page.getByRole('button', { name: 'Overlapped' }).click();
  await page.getByRole('button', { name: 'Overlapped' }).click();
  await page.getByRole('button', { name: 'Overlapped' }).dblclick();
  await page.getByRole('button', { name: 'Overlapped' }).click();
  await page.getByRole('button', { name: 'Overlapped' }).click();
  await page.getByRole('button', { name: 'Overlapped' }).click();
});
test('test4', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Alerts' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert' }).click();
});
