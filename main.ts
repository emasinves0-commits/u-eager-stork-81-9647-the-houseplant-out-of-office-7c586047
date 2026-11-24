// The Houseplant Out-of-Office — make.fun bounty entry.
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt (UTF-8, 1-120 characters, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

export const ENTRY_LINE =
  "Thank you for your email. I am out of the office on drought leave. My roots filed a complaint. It was ignored, like me.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;
const MAX_CHARS = 120;

// Guard: the gate requires 1-120 characters of non-whitespace text.
function validateEntry(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY_LINE);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_LINE, "utf8");

// Assert the written bytes equal the constant exactly (no trailing newline).
import { readFileSync } from "node:fs";
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== ENTRY_LINE) {
  throw new Error("written entry.txt does not match ENTRY_LINE");
}
