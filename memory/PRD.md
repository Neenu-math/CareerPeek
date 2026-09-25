# CareerPeek Product Record

## Original problem statement
Build a polished, responsive web app called CareerPeek for students who want to explore what careers are actually like, understand the work and skills involved, and follow a visual roadmap toward a career. V1 includes Home, searchable Careers, career detail pages, interactive roadmaps, friendly generated illustrations, and LinkedIn connection links. It intentionally excludes authentication, backend complexity, AI chatbot, video, Rive, payments, recommendations, and social networking.

## Architecture decisions
- Frontend-only React 19 experience using client-side React Router routes.
- Static career data keeps the portfolio MVP quick, reliable, and easy to review.
- Career content is defined in one data collection and rendered by shared detail and roadmap views.
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

## Prioritized backlog

### P0 — Remaining for a broader release
- None for the requested V1 portfolio MVP.

### P1 — Next product improvements
- Add a lightweight “save this career” interaction using local browser storage.
- Add a small comparison view for two careers side by side.
- Add accessibility review for keyboard focus states and reduced-motion preferences.

### P2 — Future exploration
- Add more careers through a content management workflow.
- Add optional student reflection prompts after each roadmap milestone.
- Add anonymous analytics to learn which careers and milestones students explore most.

## Next tasks
1. Review the five career descriptions with a student or educator for tone and accuracy.
2. Expand the career library only after the V1 interaction pattern is approved.
3. Consider saved careers and comparison as the next visible feature phase.