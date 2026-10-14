import fs from "node:fs";

const p = "content/inventory/pageRegistry.ts";
let s = fs.readFileSync(p, "utf8");
s = s.replaceAll('status: "planned"', 'status: "sample-draft"');
fs.writeFileSync(p, s);
console.log({
  planned: (s.match(/"planned"/g) || []).length,
  draft: (s.match(/"sample-draft"/g) || []).length,
  live: (s.match(/"live-route"/g) || []).length,
});
