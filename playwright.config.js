import { defineConfig, devices } from "@playwright/test";

// Runs against the live site by default, since the security headers in
// vercel.json are only applied by Vercel. Override with BASE_URL to test
// a preview deployment.
export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  use: {
    baseURL: process.env.BASE_URL || "https://ndumiso-mbangeleli.vercel.app",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
