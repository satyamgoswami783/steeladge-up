import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = path.join(root, "public");
const outputDir = path.join(publicDir, "optimized");
const settings = JSON.parse(await readFile(path.join(root, "src/data/image-settings.json"), "utf8"));
const widths = [...settings.imageSizes, ...settings.deviceSizes];
const manifestPath = path.join(outputDir, "manifest.json");
const previous = JSON.parse(await readFile(manifestPath, "utf8").catch(() => "{}"));
const manifest = {};
let generated = 0;

async function* imagesIn(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) yield* imagesIn(file);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) yield file;
  }
}

for await (const file of imagesIn(path.join(publicDir, "images"))) {
  const relative = path.relative(publicDir, file).split(path.sep).join("/");
  const source = await readFile(file);
  const hash = createHash("sha256")
    .update(source).update(JSON.stringify(settings)).update(sharp.versions.sharp).digest("hex");
  const outputs = widths.map((width) => path.join(outputDir, `${relative}-${width}.webp`));
  const complete = await Promise.all(outputs.map((output) => access(output).then(() => true, () => false)));
  if (previous[relative] !== hash || complete.includes(false)) {
    await mkdir(path.dirname(outputs[0]), { recursive: true });
    for (let i = 0; i < widths.length; i++) {
      await sharp(source).rotate().resize({ width: widths[i], withoutEnlargement: true })
        .webp({ quality: settings.quality }).toFile(outputs[i]);
      generated++;
    }
  }
  manifest[relative] = hash;
}

await mkdir(outputDir, { recursive: true });
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Images: ${generated} WebP variants generated; ${Object.keys(manifest).length} source images ready.`);
