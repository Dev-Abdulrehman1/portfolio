// Inlines dist/index.html assets into a single self-contained file so it can be
// opened by the preview panel without a static file server.
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve("dist");
let html = readFileSync(resolve(dist, "index.html"), "utf8");

html = html.replace(
  /<script type="module" crossorigin src="\.\/([^"]+)"><\/script>/,
  (_, src) => `<script type="module">\n${readFileSync(resolve(dist, src), "utf8")}\n</script>`,
);

html = html.replace(
  /<link rel="stylesheet" crossorigin href="\.\/([^"]+)">/,
  (_, href) => `<style>\n${readFileSync(resolve(dist, href), "utf8")}\n</style>`,
);

writeFileSync(resolve(dist, "preview.html"), html);
console.log("wrote dist/preview.html", html.length, "bytes");
