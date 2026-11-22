import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "No stamp. No name. Only my handwriting on the envelope \u2014 the loop of my y, " +
  "my slanted t's \u2014 spelling my address back to me. Inside, one line, in the same hand: " +
  "'Water the plant on the third floor.' I live on the second. There is no third floor. " +
  "I checked the stairs twice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
