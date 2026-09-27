# CareerPeek Product Record

## Original problem statement
Build a polished, responsive web app called CareerPeek for students who want to explore what careers are actually like, understand the work and skills involved, and follow a visual roadmap toward a career. V1 includes Home, searchable Careers, career detail pages, interactive roadmaps, friendly generated illustrations, and LinkedIn connection links. It intentionally excludes authentication, backend complexity, AI chatbot, video, Rive, payments, recommendations, and social networking.

## Architecture decisions
- Frontend-only React 19 experience using client-side React Router routes.
- Static career data keeps the portfolio MVP quick, reliable, and easy to review.
- `frontend/src/careersDb.js` is the active five-career catalog used for search and route eligibility.
- `frontend/src/careerContent.js` stores the five existing complete profiles, rendered by shared Detail and Roadmap views in `App.js`.
- Routes resolve only from the active catalog. Unknown or removed career slugs (including roadmap URLs) render the existing Careers directory fallback, never a generated profile.
- Reusable UI components, `careerDefaults.js`, `careerEnhancements.js`, and all CSS are retained. The default profile generator is not used by active routing.
- Generated bitmap illustrations are reused consistently across cards, introductions, and roadmap pages.
- No API or database is required for the current V1.
- Current V2 assessment lives in `frontend/src/features/reality-check/`: one shared engine/UI, career-specific interaction configuration, intro/completion views and version-2 per-career sessionStorage progress. dnd-kit handles token dragging; the existing Radix-backed Slider handles preferences.
- The active results flow is intentionally DISABLED. Earlier interrupted `ResultsPage.jsx` / scoring code remains dormant, not imported by `App.js`. Results URLs redirect to assessment; no generated scores, interpretations, recommendations or LinkedIn section is exposed in the current flow.

## User personas
- **The Curious Student:** wants a fast, friendly answer to “what is this career really like?”
- **The Direction-Seeking Learner:** needs an approachable sequence of next steps without feeling overwhelmed.
- **The Portfolio Reviewer:** needs a complete, polished product flow that demonstrates thoughtful interaction design.

## Core requirements (static)
- CareerPeek brand and simple “LET’S START.” home experience.
- Five careers: Nurse, Software Developer, Doctor, Chartered Accountant, Entrepreneur.
- Searchable career directory with working Explore links.
- Detail page order (latest approved): actual work → typical day → skills → Something Worth Knowing First (first-hand paragraph plus What You Might Love / What You Should Know) → full-roadmap CTA → career-specific salary → Reality Check CTA.
- Roadmap pages with six connected milestone nodes and expandable details.
- No LinkedIn/Meet Professionals section on career detail or roadmap pages, per the latest user request. Reintroduction belongs to a future approved results flow, not this task.
- Dedicated career-specific Reality Check: introduction, exactly six interactive experiences, completion. “See My Results” stays disabled until a separate results task is approved.
- Responsive desktop and mobile layout with obvious back navigation.
- Friendly, cheerful, editorial UI inspired by learning-journey products without copying branding.

## What's been implemented
**2026-09-25**
- Built the home page, directory search, empty state, five career cards, exact career routes, detail pages, timelines, skills, and roadmap CTAs.
- Added six milestone roadmap journeys for every career, node expansion, reminder section, LinkedIn CTA, and explore-another flow.
- Added a consistent generated illustration set, responsive styling, motion, test IDs, and mobile layout safeguards.
- Verified with a production build and live frontend testing: core desktop/mobile flow passed with no reported UI or integration defects.

**2026-09-27 — Library-only cleanup (earlier approved scope, complete)**
- User paused the expanded library and requested ONLY the original five careers; no redesign, navigation changes, content rewrites, new sections or further V2 work.
- Confirmed the original five from pre-expansion commit `7d174bc`, the original PRD and featured flags: Nurse, Software Developer, Doctor, Chartered Accountant, Entrepreneur, in that order.
- Inspection identified a 59-entry catalog, six additional hand-written profiles, expansion-only search rows and generic profile fallback routing. The historical stub component was already gone; its reusable styling remains untouched.
- Removed all 54 added catalog entries and the six extra detailed profiles. Both static career data collections now contain exactly five entries.
- Preserved every field of the five existing complete profiles exactly as found before this cleanup, including overview, tasks, timeline, skills, six-step roadmap, salary and first-hand perspective. Did not replace them with generic or older content.
- Limited search/cards and route resolution to the same active five-career set; removed expansion-only result rows and restored the directory's pre-expansion introductory copy.
- Runtime edits limited to `App.js`, `careersDb.js`, and `careerContent.js`. Home, shared detail/roadmap views, LinkedIn links, navigation, all styling and reusable helpers/components were preserved.
- Verified `yarn build` succeeds, public preview loads, desktop 1920x800 and mobile 390x844 render without horizontal overflow.
- Full regression report: `/app/test_reports/iteration_4.json`, 100% frontend pass, no reported defects. Covered all five complete journeys, search/back/forward, roadmap expansion/collapse, salary/perspective, correct LinkedIn new-tab destinations, 54 negative career searches and all 108 removed detail/roadmap URL cases plus unknown/prototype/query/hash/trailing-slash variants.
- Content comparison confirmed all five retained profile objects equal their pre-cleanup snapshots and `App.css` is byte-identical. No active removed-career links/data entries remain in source/public/build.
- Career information remains intentionally STATIC frontend data; no backend, authentication or API integration added or mocked. LinkedIn is an outgoing link; external authenticated results are not controlled by CareerPeek.

**2026-09-27 — Before You Choose, Reality Check, and final navigation scope (complete)**
- Added `beforeYouChoose.whatYouMightLove` / `.whatYouShouldKnow` arrays with three concise, unique `{title, description}` notes each for all five existing careers. Original profile fields were preserved.
- Earlier Reality Check work was interrupted before full testing. The latest user request superseded its placement and results scope; do not restore the earlier roadmap-to-results flow.
- User clarified that Something Worth Knowing First must preserve BOTH the original first-hand paragraph and the three love/three know notes. These now appear together after Skills That Matter.
- Moved the unchanged career-specific salary tiers/notes to the detail page after the existing full-roadmap CTA. Immediately below salary, the prominent “Want to see your Reality Check?” / “Take the Reality Check” link opens the CURRENT career's dedicated assessment.
- Removed LinkedIn/Meet Professionals from the career information pages. Roadmap milestone content, illustration, expansion controls and existing Back behavior remain, with bottom links back to details or the five-career directory.
- Added the requested intro wording and “Let's Begin”, then six interactive experiences: five energy tokens across eight activity cards, one/two of four environments, four trade-offs inside step 3, one of four change reactions, exactly two motivation cards, and five preference sliders.
- All five careers have distinct activities, environments, trade-off prompts/options, change scenarios/reactions, motivation context and mix context in `config/careerVariants.js`. No Teacher, Architect or other careers were added; those were examples only.
- Completion displays “That's your Reality Check.” and the requested explanation. **User explicitly chose to keep “See My Results” disabled, rather than linking to a holding page or generated results.** A clear unavailable message is shown. Existing results URLs redirect to the assessment; dormant result code is not exposed.
- Progress, answers, current trade-off and intro/assessment/completion phase persist per career in sessionStorage v2. Corrupt/outdated sessions reset safely. Storage denial uses in-memory state and a warning. Answering a trade-off does not auto-advance; Next choice advances, and refresh preserves the exact position.
- Added atomic latest-state token updates plus direct card-tap allocation and retained +/−/drag controls. Centered intro illustrations. No backend, auth, APIs, external AI or mock integration added.
- Tests: `yarn build` passed. `/app/test_reports/iteration_6.json` records full six-step completion for Software Developer and Nurse at desktop1920x800/mobile390x844, actual mobile touch drag/sliders, completion/review, refresh, invalid-session handling and all-five career regression/config uniqueness checks.
- `/app/test_reports/iteration_7_verification.json` resolves the two remaining iteration_6 findings through direct browser verification: real desktop mouse bank→activity→activity→bank works with post-scroll hit-tested coordinates; selected pair3 reload correctly retains pair3 AND its saved answer, and clicking Next then reloading retains pair4. No remaining confirmed functional defects. Do not implement auto-advance on reload to satisfy the earlier incorrect test expectation.
- Latest flow-change preservation check: `careerContent.js`, `careersDb.js`, and `App.css` are byte-identical to `/tmp/careerpeek-flow-before/`. Home, search, five-career library and original content have not been rewritten.

## Prioritized backlog

### P0 — Current request
- Complete: requested detail-page ordering and career-specific six-step assessment, including intro, completion, desktop/mobile verification and refresh behavior. No remaining confirmed blockers.
- Intentional unavailable flow: results generation/navigation is disabled, exactly as the user chose. Do not claim results are shipped.

### P1 — On hold
- Await user review of the assessment. Build/enable results only after explicit approval, with separate deterministic scoring, interpretation, recommendations and networking tests.
- Optional enhancement, only if requested: a short student usability review to refine the clarity of the career-specific scenarios.

### P2 — Paused backlog, not authorized for implementation
- Expanded career library and further career-content enrichment.
- Additional assessment features, live recommendations, additional roadmap sections and unrelated UI changes are not authorized by the current request.
- Earlier ideas (saved careers, comparison, reflection prompts, analytics) remain unapproved; do not implement without a new request.

## Next tasks
1. Stop after the verified assessment and navigation flow. Keep See My Results disabled.
2. Wait for explicit user direction before implementing or exposing results or any other features.