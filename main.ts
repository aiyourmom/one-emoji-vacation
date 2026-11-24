// One Emoji, One Dream Vacation — 🗿 (Moai, Easter Island)
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🗿";

// The gate requires exactly one emoji in 1–8 characters: enforce it
// before writing so a wrong pick can never ship.
const codePoints = [...EMOJI];
if (codePoints.length !== 1 || EMOJI.length < 1 || EMOJI.length > 8) {
  throw new Error("entry must be exactly one emoji (1-8 characters)");
}
if (/\s/.test(EMOJI)) {
  throw new Error("entry must not contain whitespace");
}

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", EMOJI, "utf8");
  console.log(`wrote ${[...EMOJI].length} character to /output/entry.txt`);
}

main();
