import { useRef, useState } from "react";
import { emptyAnswers, validAnswerShape, answersComplete, firstIncompleteStep } from "./answers";

export const SESSION_VERSION = 2;
export const sessionKey = slug => `careerpeek:reality-check:v${SESSION_VERSION}:${slug}`;
const memory = new Map();
export const newSession = () => ({ version: SESSION_VERSION, phase: "intro", step: 0, tradeoffIndex: 0, answers: emptyAnswers(), completed: false });

export function sanitiseSession(value) {
  if (!value || value.version !== SESSION_VERSION || !validAnswerShape(value.answers)) return newSession();
  const firstIncomplete = firstIncompleteStep(value.answers);
  const missingPair = value.answers.tradeoffs.indexOf(null);
  return {
    version: SESSION_VERSION, answers: value.answers,
    phase: value.phase === "complete" && value.completed === true && answersComplete(value.answers) ? "complete" : value.phase === "intro" ? "intro" : "assessment",
    step: Math.max(0, Math.min(Number.isInteger(value.step) ? value.step : 0, 5, firstIncomplete)),
    tradeoffIndex: Math.max(0, Math.min(Number.isInteger(value.tradeoffIndex) ? value.tradeoffIndex : 0, missingPair < 0 ? 3 : missingPair)),
    completed: value.completed === true && answersComplete(value.answers),
  };
}

export function readSession(slug) {
  try {
    const stored = sessionStorage.getItem(sessionKey(slug));
    return sanitiseSession(stored ? JSON.parse(stored) : memory.get(slug));
  } catch {
    return sanitiseSession(memory.get(slug));
  }
}

function writeSession(slug, value) {
  memory.set(slug, value);
  try { sessionStorage.setItem(sessionKey(slug), JSON.stringify(value)); return true; }
  catch { return false; }
}

export function useAssessmentSession(slug) {
  const [session, setSession] = useState(() => readSession(slug));
  const current = useRef(session);
  const [saveError, setSaveError] = useState(false);
  // Persist before route changes so finishing and refreshing cannot race an effect.
  const update = patch => {
    const next = { ...current.current, ...patch };
    current.current = next;
    setSaveError(!writeSession(slug, next));
    setSession(next);
  };
  const answer = (field, value) => {
    const latest = current.current.answers;
    update({ answers: { ...latest, [field]: typeof value === "function" ? value(latest[field]) : value }, completed: false });
  };
  return { session, update, answer, saveError };
}