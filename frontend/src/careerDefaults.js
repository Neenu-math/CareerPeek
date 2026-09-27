// Generates a structured placeholder career object for any entry in
// careersDb that does not yet have hand-written detail content.
// Shape matches the featured `careers` objects in App.js so the same
// Detail and Roadmap components can render every career.

const COLORS = ["mint", "sky", "coral", "gold", "violet"];

function pickColor(slug) {
  let sum = 0;
  for (let i = 0; i < slug.length; i++) sum += slug.charCodeAt(i);
  return COLORS[sum % COLORS.length];
}

const CATEGORY_SALARY = {
  "Technology": [["STARTING OUT", "₹4L – ₹9L"], ["MID-CAREER", "₹9L – ₹22L"], ["EXPERIENCED", "₹22L+"]],
  "Healthcare": [["STARTING OUT", "₹3L – ₹6L"], ["MID-CAREER", "₹6L – ₹14L"], ["EXPERIENCED", "₹14L+"]],
  "Finance & Accounting": [["STARTING OUT", "₹4L – ₹8L"], ["MID-CAREER", "₹8L – ₹18L"], ["EXPERIENCED", "₹18L+"]],
  "Business & Management": [["STARTING OUT", "₹4L – ₹8L"], ["MID-CAREER", "₹9L – ₹20L"], ["EXPERIENCED", "₹20L+"]],
  "Design & Creative": [["STARTING OUT", "₹3L – ₹7L"], ["MID-CAREER", "₹7L – ₹15L"], ["EXPERIENCED", "₹15L+"]],
  "Education": [["STARTING OUT", "₹2.5L – ₹5L"], ["MID-CAREER", "₹5L – ₹10L"], ["EXPERIENCED", "₹10L+"]],
  "Law": [["STARTING OUT", "₹3L – ₹8L"], ["MID-CAREER", "₹8L – ₹20L"], ["EXPERIENCED", "₹20L+"]],
  "Engineering": [["STARTING OUT", "₹3L – ₹7L"], ["MID-CAREER", "₹7L – ₹15L"], ["EXPERIENCED", "₹15L+"]],
  "Media & Communication": [["STARTING OUT", "₹3L – ₹6L"], ["MID-CAREER", "₹6L – ₹12L"], ["EXPERIENCED", "₹12L+"]],
  "Science & Research": [["STARTING OUT", "₹3L – ₹7L"], ["MID-CAREER", "₹7L – ₹15L"], ["EXPERIENCED", "₹15L+"]],
  "Government / Public Service": [["STARTING OUT", "₹4L – ₹8L"], ["MID-CAREER", "₹8L – ₹15L"], ["EXPERIENCED", "₹15L+"]],
  "Hospitality & Tourism": [["STARTING OUT", "₹3L – ₹6L"], ["MID-CAREER", "₹6L – ₹12L"], ["EXPERIENCED", "₹12L+"]],
  "Social / Psychology": [["STARTING OUT", "₹2.5L – ₹5L"], ["MID-CAREER", "₹5L – ₹10L"], ["EXPERIENCED", "₹10L+"]],
};

const DEFAULT_SALARY = [["STARTING OUT", "₹3L – ₹7L"], ["MID-CAREER", "₹7L – ₹15L"], ["EXPERIENCED", "₹15L+"]];

export function defaultSalary(category) {
  return CATEGORY_SALARY[category] || DEFAULT_SALARY;
}

export function buildDefaultCareer(entry) {
  const nameLower = entry.name.toLowerCase();
  const categoryLower = entry.category.toLowerCase();
  return {
    slug: entry.slug,
    name: entry.name,
    color: pickColor(entry.slug),
    tag: entry.category,
    description: entry.shortDescription,
    cardDescription: entry.shortDescription,
    intro: `${entry.name} work sits at the meeting point of ${categoryLower} and everyday problem-solving. Here's a friendly look at what this path can involve so you can see if it sounds like you.`,
    skills: [
      "Curiosity and learning",
      "Clear communication",
      "Problem solving",
      "Attention to detail",
      "Teamwork",
      "Adaptability",
    ],
    tasks: [
      `Understand the problems a ${nameLower} is asked to solve day to day`,
      "Plan and prioritise the most important work for the week",
      "Do the core hands-on work that this role is known for",
      "Collaborate with teammates, clients or other specialists",
      "Review your work, keep records and improve as you go",
      "Keep learning as the field and its tools evolve",
    ],
    timeline: [
      ["9:00", "Plan the day and priorities"],
      ["10:00", "Focused work on the main task"],
      ["12:30", "Team check-in or client conversation"],
      ["13:30", "Lunch and a reset"],
      ["14:30", "Review, refine and problem-solve"],
      ["17:30", "Share progress and plan tomorrow"],
    ],
    roadmap: [
      ["STARTING POINT", `Build a foundation of curiosity, communication and the school subjects most relevant to ${categoryLower}.`, `Try small projects, reading and conversations that help you notice what a ${nameLower} really does.`],
      ["EDUCATION / COURSE OPTIONS", `Choose a degree, diploma or certification path that fits the ${nameLower} role in your country.`, "Compare options, entry requirements and the kind of practical experience each route offers."],
      ["PRACTICAL EXPERIENCE", "Gain hands-on experience through internships, projects, placements or early entry-level work.", "This is where classroom learning turns into real judgement and confidence."],
      ["QUALIFICATION / ENTRY", "Complete any professional exams, certifications or registrations required to enter the field.", "Keep a simple checklist of what your region asks for and plan your timeline early."],
      ["FIRST ROLE", `Target entry-level ${nameLower} roles and use them to keep learning quickly.`, "Your first job is a launchpad, so pay attention to feedback and the people around you."],
      ["SPECIALIZE / GROW", `Find the sub-area of ${nameLower} work that excites you and build deeper expertise there.`, "Growth can mean more responsibility, a specialist path or leading a team."],
    ],
  };
}
