import { test, expect } from "@playwright/test";

test("landing page renders with no console errors or CSP violations", async ({ page }) => {
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  const response = await page.goto("/");
  expect(response.headers()["content-security-policy"]).toBeTruthy();

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Ndumiso Mbangeleli");

  const screenshot = page.getByAltText("Screenshot of EpiskopOS");
  await screenshot.scrollIntoViewIfNeeded();
  await expect(screenshot).toHaveJSProperty("complete", true);
  expect(await screenshot.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);

  await expect(page.locator("#about svg").first()).toBeVisible();

  expect(errors).toEqual([]);
});

test("CV is served as a PDF", async ({ request }) => {
  const response = await request.get("/CV.pdf");
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toBe("application/pdf");
});
