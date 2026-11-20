import { defineConfig, devices } from "@playwright/test";

// Runs against the live site by default, since the security headers in
// vercel.json are only applied by Vercel. Override with BASE_URL to test
// a preview deployment, or set LOCAL=1 to test dist/ through a server that
// mimics Vercel (run `npm run build` first).
const local = Boolean(process.env.LOCAL);

export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  use: {
    baseURL: local
      ? "http://localhost:4173"
      : process.env.BASE_URL || "https://ndumiso-mbangeleli.vercel.app",
  },
  webServer: local
    ? { command: "node scripts/serve-dist.js", url: "http://localhost:4173" }
    : undefined,
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
