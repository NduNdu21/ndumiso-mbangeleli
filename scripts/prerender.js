// Renders each route to static HTML after `vite build`, so the content is in
// the served page for crawlers, AI agents and visitors without JavaScript.
import fs from "node:fs";
import path from "node:path";

const { render } = await import("../dist-ssr/entry-server.js");

const template = fs.readFileSync("dist/index.html", "utf8");
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}

const pages = [
  { url: "/", file: "index.html", hydrate: true },
  // Placeholder until there are posts; kept out of search results.
  { url: "/blog", file: "blog/index.html", hydrate: true, noindex: true },
  // Vercel serves 404.html with a 404 status for any path without a file.
  { url: "/404", file: "404.html", hydrate: false },
];

for (const { url, file, hydrate, noindex } of pages) {
  const attr = hydrate ? " data-prerendered" : "";
  let html = template.replace(placeholder, `<div id="root"${attr}>${render(url)}</div>`);
  if (noindex) {
    html = html.replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>');
  }
  const out = path.join("dist", file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`prerendered ${url} -> ${out}`);
}

fs.rmSync("dist-ssr", { recursive: true, force: true });
