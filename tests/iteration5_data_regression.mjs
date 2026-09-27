import { careerContent as currentContent } from "../frontend/src/careerContent.js";
import { careerContent as snapshotContent } from "../../tmp/careerpeek-before-choice/careerContent.js";
import { careersDb as currentDb } from "../frontend/src/careersDb.js";

const expectedSlugs = [
  "nurse",
  "software-developer",
  "doctor",
  "chartered-accountant",
  "entrepreneur",
];

function stable(value) {
  return JSON.stringify(value, Object.keys(value).sort());
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function removeBeforeYouChooseProfiles(contentObj) {
  const clone = deepClone(contentObj);
  for (const slug of Object.keys(clone)) {
    delete clone[slug].beforeYouChoose;
  }
  return clone;
}

function fail(message) {
  throw new Error(message);
}

try {
  const dbSlugs = currentDb.map((c) => c.slug);
  if (dbSlugs.length !== 5) fail(`Expected exactly 5 careers in careersDb, got ${dbSlugs.length}`);
  if (stable(dbSlugs) !== stable(expectedSlugs)) {
    fail(`careersDb slugs mismatch. got=${JSON.stringify(dbSlugs)}`);
  }

  const contentSlugs = Object.keys(currentContent);
  if (contentSlugs.length !== 5) fail(`Expected exactly 5 profiles in careerContent, got ${contentSlugs.length}`);
  for (const slug of expectedSlugs) {
    if (!currentContent[slug]) fail(`Missing careerContent profile for slug=${slug}`);
  }

  // Compare every existing field unchanged when beforeYouChoose is excluded.
  const currentWithoutBYC = removeBeforeYouChooseProfiles(currentContent);
  const snapshotWithoutBYC = deepClone(snapshotContent);
  if (stable(currentWithoutBYC) !== stable(snapshotWithoutBYC)) {
    fail("careerContent regression detected outside beforeYouChoose");
  }

  const allNoteTitles = [];
  const allNoteDescriptions = [];

  for (const slug of expectedSlugs) {
    const byc = currentContent[slug].beforeYouChoose;
    if (!byc) fail(`Missing beforeYouChoose for ${slug}`);
    if (!Array.isArray(byc.whatYouMightLove) || !Array.isArray(byc.whatYouShouldKnow)) {
      fail(`beforeYouChoose arrays missing for ${slug}`);
    }
    if (byc.whatYouMightLove.length !== 3 || byc.whatYouShouldKnow.length !== 3) {
      fail(`beforeYouChoose array lengths invalid for ${slug}`);
    }

    for (const [groupName, notes] of [
      ["whatYouMightLove", byc.whatYouMightLove],
      ["whatYouShouldKnow", byc.whatYouShouldKnow],
    ]) {
      for (const [idx, note] of notes.entries()) {
        if (!note || typeof note !== "object") fail(`Invalid note object for ${slug}.${groupName}[${idx}]`);
        if (typeof note.title !== "string" || typeof note.description !== "string") {
          fail(`Invalid title/description types for ${slug}.${groupName}[${idx}]`);
        }
        if (note.title.trim().length < 5 || note.description.trim().length < 20) {
          fail(`Note too short for ${slug}.${groupName}[${idx}]`);
        }
        allNoteTitles.push(note.title.trim());
        allNoteDescriptions.push(note.description.trim());
      }
    }
  }

  if (allNoteTitles.length !== 30 || allNoteDescriptions.length !== 30) {
    fail(`Expected 30 note titles/descriptions. titles=${allNoteTitles.length}, descriptions=${allNoteDescriptions.length}`);
  }

  const titleSet = new Set(allNoteTitles);
  const descSet = new Set(allNoteDescriptions);
  if (titleSet.size !== 30) fail(`Duplicate note titles found. unique=${titleSet.size}/30`);
  if (descSet.size !== 30) fail(`Duplicate note descriptions found. unique=${descSet.size}/30`);

  console.log("PASS: data regression checks succeeded");
} catch (err) {
  console.error(`FAIL: ${err.message}`);
  process.exit(1);
}
