import { traitDefinitions } from "./config/traits";
import { activities, environments, tradeoffs, changeResponses, motivations, mixPreferences, assessmentInteractions } from "./config/interactions";
import { careerAssessmentProfiles, careerRecommendations } from "./config/profiles";
import { answersComplete } from "./answers";

const ids = Object.keys(traitDefinitions);
const blank = () => Object.fromEntries(ids.map(id => [id, 0]));
const normalise = vector => {
  const total = Object.values(vector).reduce((sum, value) => sum + value, 0);
  return Object.fromEntries(Object.entries(vector).map(([key, value]) => [key, total ? value / total : 0]));
};
const add = (target, source, weight = 1) => Object.entries(source).forEach(([id, value]) => { target[id] += value * weight; });
const option = (options, id) => options.find(item => item.id === id).signals;
const average = vectors => {
  const sum = blank();
  vectors.forEach(vector => add(sum, normalise(vector), 1 / vectors.length));
  return sum;
};

// Each option has a unit signal budget. Each interaction then has a unit budget,
// including the five-token activity and the four-pair trade-off. Thus every
// interaction contributes exactly 1/6 of the total, not one point per click.
export function interactionContributions(answers) {
  if (!answersComplete(answers)) throw new Error("Complete all six experiences before calculating a result.");
  const mix = blank();
  mixPreferences.forEach(p => {
    const right = answers.mix[p.id] / 100;
    add(mix, normalise(p.leftSignals), (1 - right) / mixPreferences.length);
    add(mix, normalise(p.rightSignals), right / mixPreferences.length);
  });
  return [
    average(answers.tokens.map(id => option(activities, id))),
    average(answers.environments.map(id => option(environments, id))),
    average(answers.tradeoffs.map((id, index) => option(tradeoffs[index].options, id))),
    average([option(changeResponses, answers.change)]),
    average(answers.motivations.map(id => option(motivations, id))), mix,
  ];
}

export function calculateSignals(answers) {
  const signals = blank();
  const weightSum = assessmentInteractions.reduce((sum, item) => sum + item.weight, 0);
  interactionContributions(answers).forEach((vector, i) => add(signals, vector, assessmentInteractions[i].weight / weightSum));
  return signals;
}

// Stable configuration order resolves exact ties; no random/AI result generation.
export const strongestSignals = scores => [...ids].sort((a, b) => {
  const difference = scores[b] - scores[a];
  return Math.abs(difference) > 1e-10 ? difference : ids.indexOf(a) - ids.indexOf(b);
}).slice(0, 3);

export function buildResult(answers, selectedSlug, availableSlugs) {
  const profile = careerAssessmentProfiles[selectedSlug];
  if (!profile) throw new Error("Unknown career profile.");
  const scores = calculateSignals(answers);
  const strongest = strongestSignals(scores);
  const overlap = strongest.filter(id => profile.weights[id]);
  const averageSupport = item => item.signals.reduce((sum, id) => sum + scores[id], 0) / item.signals.length;
  const natural = profile.alignments.filter(item => item.signals.some(id => strongest.includes(id)))
    .sort((a, b) => averageSupport(b) - averageSupport(a)).slice(0, 3);
  // Lower expressed preferences put relevant realities earlier, without calling
  // a preference a weakness or predicting someone's ability to do the work.
  const considerations = [...profile.considerations].sort((a, b) => averageSupport(a) - averageSupport(b));
  const recommendations = careerRecommendations[selectedSlug]
    .filter(slug => slug !== selectedSlug && availableSlugs.includes(slug))
    .map(slug => {
      const weights = normalise(careerAssessmentProfiles[slug].weights);
      const strength = Object.entries(weights).reduce((sum, [id, weight]) => sum + scores[id] * weight, 0);
      const shared = Object.keys(weights).filter(id => scores[id] > 0)
        .sort((a, b) => scores[b] * weights[b] - scores[a] * weights[a]).slice(0, 2);
      return { slug, strength, shared };
    }).sort((a, b) => b.strength - a.strength).slice(0, 3)
    .map(({ strength, ...recommendation }) => recommendation);
  return { strongest, overlap, natural, considerations, recommendations };
}