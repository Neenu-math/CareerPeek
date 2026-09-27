import { activities, environments, tradeoffs, changeResponses, motivations, mixPreferences } from "./config/interactions";

export const emptyAnswers = () => ({
  tokens: Array(5).fill(null), environments: [], tradeoffs: Array(tradeoffs.length).fill(null),
  change: null, motivations: [], mix: Object.fromEntries(mixPreferences.map(p => [p.id, 50])),
});

const known = (items, value) => items.some(item => item.id === value);
const selection = (value, items, max) => Array.isArray(value) && value.length <= max &&
  new Set(value).size === value.length && value.every(id => known(items, id));

export function validAnswerShape(a) {
  return Boolean(a && Array.isArray(a.tokens) && a.tokens.length === 5 && a.tokens.every(id => id === null || known(activities, id)) &&
    selection(a.environments, environments, 2) && selection(a.motivations, motivations, 2) &&
    Array.isArray(a.tradeoffs) && a.tradeoffs.length === tradeoffs.length &&
    a.tradeoffs.every((id, i) => id === null || known(tradeoffs[i].options, id)) &&
    (a.change === null || known(changeResponses, a.change)) && a.mix &&
    mixPreferences.every(p => Number.isFinite(a.mix[p.id]) && a.mix[p.id] >= 0 && a.mix[p.id] <= 100));
}

export function stepComplete(answers, step) {
  if (!validAnswerShape(answers)) return false;
  return [
    answers.tokens.every(Boolean), answers.environments.length >= 1,
    answers.tradeoffs.every(Boolean), Boolean(answers.change), answers.motivations.length === 2, true,
  ][step] === true;
}

export const answersComplete = a => Array.from({ length: 6 }, (_, i) => stepComplete(a, i)).every(Boolean);
export const firstIncompleteStep = a => Array.from({ length: 6 }, (_, i) => i).find(i => !stepComplete(a, i)) ?? 5;