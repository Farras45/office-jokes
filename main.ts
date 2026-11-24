import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our team-building exercise was trust falls, which is ironic, because the only thing we have ever caught falling is the Wi-Fi.";

// The gate requires 1 to 199 characters of non-whitespace text; fail
// loudly here instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
