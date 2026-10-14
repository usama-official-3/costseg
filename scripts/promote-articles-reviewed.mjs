import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("content/knowledge/articles");
let files = 0;
let replacements = 0;

for (const name of fs.readdirSync(dir)) {
  if (!name.endsWith(".ts") || name === "index.ts") continue;
  const file = path.join(dir, name);
  let raw = fs.readFileSync(file, "utf8");
  const before = raw;
  raw = raw.replaceAll('reviewStatus: "draft"', 'reviewStatus: "reviewed"');
  raw = raw.replaceAll(
    'reviewStatus: "internal-review"',
    'reviewStatus: "reviewed"',
  );
  // Generator default comment / draftArticle calls without explicit status stay via factory.
  if (raw !== before) {
    fs.writeFileSync(file, raw);
    const count =
      (before.match(/reviewStatus: "draft"/g) || []).length +
      (before.match(/reviewStatus: "internal-review"/g) || []).length;
    replacements += count;
    files += 1;
    console.log(name, count);
  }
}

console.log({ files, replacements });
