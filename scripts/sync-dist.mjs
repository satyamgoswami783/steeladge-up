import { cp, rm, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const srcDir = path.join(root, "out");
const destDir = path.join(root, "dist");

async function syncDist() {
  try {
    await access(srcDir);
  } catch {
    console.error("[SYNC-DIST ERROR] 'out' directory does not exist. Run 'next build' first.");
    process.exit(1);
  }

  console.log("Cleaning and syncing 'out' to 'dist' for Netlify deployment...");
  await rm(destDir, { recursive: true, force: true }).catch(() => {});
  await mkdir(destDir, { recursive: true });
  await cp(srcDir, destDir, { recursive: true });
  console.log("Successfully created production 'dist' directory ready for Netlify deployment.");
}

syncDist();
