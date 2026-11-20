// Serves dist/ the way Vercel does: static files, directory index.html,
// 404.html with a 404 status, and the headers from vercel.json. Used by
// `npm run test:e2e:local` to test a build before deploying.
import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const port = Number(process.env.PORT) || 4173;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
};

// upgrade-insecure-requests would rewrite http://localhost assets to https.
const headers = JSON.parse(fs.readFileSync("vercel.json", "utf8"))
  .headers[0].headers.map(({ key, value }) => [key, value.replace(/; upgrade-insecure-requests/, "")]);

function resolve(urlPath) {
  const file = path.join("dist", decodeURIComponent(urlPath));
  if (!file.startsWith("dist")) return null;
  if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  const index = path.join(file, "index.html");
  if (fs.existsSync(index)) return index;
  return null;
}

http
  .createServer((req, res) => {
    const found = resolve(req.url.split("?")[0]);
    const file = found || "dist/404.html";
    res.statusCode = found ? 200 : 404;
    for (const [key, value] of headers) res.setHeader(key, value);
    res.setHeader("Content-Type", types[path.extname(file)] || "application/octet-stream");
    fs.createReadStream(file).pipe(res);
  })
  .listen(port, () => console.log(`serving dist on http://localhost:${port}`));
