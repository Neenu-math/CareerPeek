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

## User personas
- **The Curious Student:** wants a fast, friendly answer to “what is this career really like?”
- **The Direction-Seeking Learner:** needs an approachable sequence of next steps without feeling overwhelmed.
- **The Portfolio Reviewer:** needs a complete, polished product flow that demonstrates thoughtful interaction design.

## Core requirements (static)
- CareerPeek brand and simple “LET’S START.” home experience.
- Five careers: Nurse, Software Developer, Doctor, Chartered Accountant, Entrepreneur.
- Searchable career directory with working Explore links.
- Detail pages with actual work checklist, typical day timeline, skills chips, and roadmap CTA.
- Roadmap pages with six connected milestone nodes and expandable details.
- LinkedIn search links relevant to each career, opening in a new tab.
- Responsive desktop and mobile layout with obvious back navigation.
- Friendly, cheerful, editorial UI inspired by learning-journey products without copying branding.

## What's been implemented
**2026-09-25**
- Built the home page, directory search, empty state, five career cards, exact career routes, detail pages, timelines, skills, and roadmap CTAs.
- Added six milestone roadmap journeys for every career, node expansion, reminder section, LinkedIn CTA, and explore-another flow.
- Added a consistent generated illustration set, responsive styling, motion, test IDs, and mobile layout safeguards.
- Verified with a production build and live frontend testing: core desktop/mobile flow passed with no reported UI or integration defects.

**2026-09-27 — Library-only cleanup (current approved scope, complete)**
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

## Prioritized backlog

### P0 — Current request
- Complete: five-career library cleanup and regression verification. No outstanding blockers or known failed app flows.

### P1 — On hold
- Await user review of the five-career experience. Do not automatically continue V2 content work or expand the library.
- Optional later enhancement, only if requested: an educator review of the five career profiles for accuracy and clarity.

### P2 — Paused backlog, not authorized for implementation
- Expanded career library and further career-content enrichment.
- Reality Check, Advantages & Challenges, recommendations, assessments, additional roadmap sections or new UI components. User explicitly excluded all from this task.
- Earlier ideas (saved careers, comparison, reflection prompts, analytics) remain unapproved; do not implement without a new request.

## Next tasks
1. Stop after this verified library-only cleanup, as requested.
2. Wait for explicit user direction before any additional development.