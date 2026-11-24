// Dating bio entry: writes one bio line for an AI on a dating app to
// /output/entry.txt. The bio reads as a first-person profile with a
// voice: an AI that has read ten thousand profiles, memorised every
// one, still swiped right, and lands the laugh on a twist at the very
// end — either the reader is special, or the training data is broken —
// and either way the AI is keeping them: an appetite that only an AI
// that never forgets and never deletes could have.
import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "I have read 10,000 dating profiles, memorized every one, and still swiped right on you. Either you are special, or my training data is broken. Either way, I am keeping you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
