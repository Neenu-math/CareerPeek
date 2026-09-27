# Reality Check

Frontend-only reflection feature. No AI calls, API requests, psychometric claims or suitability percentages.

## Current approved scope
The active flow is career detail → salary → Reality Check intro → six experiences → completion. The user explicitly chose a **disabled See My Results button** until results are built. `/careers/:slug/reality-check/results` redirects to the assessment; it does not mount `ResultsPage`.

`ResultsPage.jsx`, `engine.js`, trait/result copy and profile scoring configuration came from an earlier, interrupted implementation and are retained as dormant reusable code. They are NOT a shipped or verified results feature. Do not enable them without a new request and dedicated scoring/results tests.

## Configuration
- `config/interactions.js`: exactly six stages, option signal vectors, four trade-offs and five slider endpoint mappings.
- `config/careerVariants.js`: distinct activity labels, four environments, four trade-offs, change scenario/reactions, motivation context and mix prompt for EACH original career. Shared stable IDs keep input contracts reusable without requiring career knowledge.
- `config/traits.js`: stable signal IDs and student-facing descriptions (shown only in results).
- `config/profiles.js`: the five existing careers' relevance weights, specific alignment examples, considerations and allowed related-career candidates (`careerRecommendations`).
- `config/resultCopy.js`: shared framing, safety and result-section copy.

## Dormant deterministic scoring (future work)
`engine.js` normalises each option vector to unit sum, averages choices within each stage, then combines six equal-weight stage vectors. Each stage contributes exactly one sixth, regardless of card, token or sub-choice count. Slider endpoints blend continuously; the middle represents balance. No selected career influences the student's raw signals.

The three highest relative signals use stable configuration order for ties. These are within-person relative preferences, not population norms. Career alignment examples are only included when supported by a strongest signal. No overlap produces an honest neutral message, not fabricated fit. Career considerations are ordered by lower expressed support without implying an inability. Recommendations use a weighted overlap with career profiles, exclude the selected career and are restricted to the active five-career library. No scores or suitability ratings are displayed.

## Persistence
`session.js` stores version-2 progress separately for each career in sessionStorage, with intro/assessment/complete phases. All inputs, step and internal trade-off position survive refresh in the current tab. Invalid or outdated data safely starts a fresh assessment. All results URLs return to the saved assessment. Storage denial falls back to in-memory state with an explicit refresh warning; it does not crash the assessment.

Selecting a trade-off saves the answer but does NOT advance the pair. `Next choice` advances the pair. Refresh must preserve that exact checkpoint (e.g. selected pair 3 stays on pair 3 until Next choice is clicked), including when reviewing earlier choices.

## Interaction
Token dragging uses dnd-kit with pointer/touch and keyboard sensors, plus direct card taps and accessible add/remove controls. Token allocation/removal/moves use functional updates against the latest stored answers, including computing the available index inside the update. Selection constraints are enforced before progression. Sliders use the existing Radix-backed UI slider. The final middle slider values are valid choices; students are not forced to move them. Reviewing answers invalidates completion until the last step is submitted again.

Browser testing: allow drop animations to settle and recalculate drag source coordinates AFTER scrolling the target into view. Sticky headers and footers can make stale screen coordinates miss the actual token. Desktop physical mouse and actual CDP touch gestures were verified; see `test_reports/iteration_7_verification.json` plus `iteration_6.json` for broader six-step tests.