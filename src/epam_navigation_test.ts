import { test, expect } from '@playwright/test';

test('Navigate EPAM website and verify Client Work page', async ({ page }) => {
  // Step 1: Navigate to the EPAM website
  await page.goto('https://www.epam.com/');

  // Step 2: Verify that the website's header is loaded
  const header = await page.locator('header');
  await expect(header).toBeVisible();

  // Step 3: Check if the header contains 'Services' menu item and click it
  const servicesMenuItem = await page.getByRole('link', { name: 'Services' });
  await servicesMenuItem.click();

  // Step 4: Wait until 'Explore Our Client Work' link is visible
  const exploreClientWorkLink = await page.getByRole('link', { name: 'Explore Our Client Work' });
  await exploreClientWorkLink.waitFor({ state: 'visible' });

  // Step 5: Click 'Explore Our Client Work' link
  await exploreClientWorkLink.click();

  // Step 6: Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.getByText('Client Work');
  await expect(clientWorkText).toBeVisible();
});