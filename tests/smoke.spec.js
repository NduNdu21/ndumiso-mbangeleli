import { test, expect } from "@playwright/test";

function collectErrors(page) {
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  return errors;
}

test("landing page renders with no console errors or CSP violations", async ({ page }) => {
  // Hydration mismatches between the pre-rendered HTML and the client
  // render are reported as console errors, so this also covers those.
  const errors = collectErrors(page);

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

test("content is in the served HTML without JavaScript", async ({ request }) => {
  const html = await (await request.get("/")).text();

  expect(html).toContain("Ndumiso Mbangeleli</h1>");
  expect(html).toContain("EpiskopOS");
  expect(html).toContain("Aston University");
  expect(html).toContain("mailto:ndumisobm@icloud.com");
});

test("blog page is pre-rendered", async ({ request }) => {
  const response = await request.get("/blog");

  expect(response.status()).toBe(200);
  expect(await response.text()).toContain("Coming soon.");
});

test("unknown paths return a real 404 with the not-found page", async ({ page }) => {
  const errors = collectErrors(page);

  const response = await page.goto("/does-not-exist");

  expect(response.status()).toBe(404);
  await expect(page.getByText("cd: no such file or directory: /does-not-exist")).toBeVisible();
  expect(errors.filter((e) => !e.includes("404"))).toEqual([]);
});

test("CV is served as a PDF", async ({ request }) => {
  const response = await request.get("/CV.pdf");
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toBe("application/pdf");
});
