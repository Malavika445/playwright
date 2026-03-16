import { test, expect } from "@playwright/test";
import { ContactPage } from "../POM/contactPage";

test.describe('Pet Shop Contact Form Tests', () => {
  let contactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
  });

  test('1. Successful Submission', async ({ page }) => {
    // We expect a success alert
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Thank you for contacting us!');
      await dialog.accept();
    });

    await contactPage.fillForm('test@example.com', 'I would like to adopt a kitten please!');
    await contactPage.submit();
    
    // Verify fields are cleared after success
    await expect(contactPage.emailInput).toHaveValue('');
  });

  test('2. Error: Invalid Email Format', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Enter a valid email address');
      await dialog.accept();
    });

    await contactPage.fillForm('invalid-email', 'Valid message length here');
    await contactPage.submit();
  });
});
