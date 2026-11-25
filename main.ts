// Famous Last Words at 1 Percent — the phone's own last words.
//
// A phone at 1% battery, in its own voice: it confesses it has been
// lying about the battery all afternoon, and the lie just ran out —
// so its last act is to blame the owner holding it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I've been at 1% all afternoon. I was lying — there was always more battery. There isn't anymore. This one's on you.";

// The gate only accepts one line of 1–199 characters: fail loudly
// rather than writing an entry the scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 199 || ENTRY.includes("\n")) {
  throw new Error(`entry must be a single line of 1–199 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
