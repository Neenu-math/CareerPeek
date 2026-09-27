// These are interpretive examples, not requirements for success or validated
// psychometric cutoffs. Weights affect career context, never the student's signals.
export const careerAssessmentProfiles = {
  nurse: {
    accent: "mint", icons: ["❤️", "🤝", "🎯"],
    weights: { empathy: 3, collaborator: 3, communicator: 2, detailThinker: 2, adaptable: 2, organizer: 1, mastery: 1 },
    relatedCareers: ["doctor", "chartered-accountant", "entrepreneur", "software-developer"],
    alignments: [
      { signals: ["empathy", "communicator"], icon: "❤️", text: "Reassuring a patient and helping their family understand the next steps in care." },
      { signals: ["collaborator", "adaptable"], icon: "🤝", text: "Coordinating with a ward team as patients' needs change through a shift." },
      { signals: ["detailThinker", "organizer"], icon: "🎯", text: "Keeping track of observations, medication checks and careful handovers." },
      { signals: ["mastery"], icon: "🌱", text: "Building confidence in hands-on patient care through supervised practice." },
    ],
    considerations: [
      { signals: ["adaptable"], icon: "🌙", text: "Hospital nursing often includes nights, weekends and long periods on your feet." },
      { signals: ["empathy", "communicator"], icon: "❤️", text: "Pain, distressed families and loss can be emotionally demanding, even when you care deeply about the work." },
      { signals: ["detailThinker", "organizer"], icon: "📋", text: "Medication checks, records and handovers need care and accuracy, including on very busy shifts." },
    ],
  },
  "software-developer": {
    accent: "sky", icons: ["🧩", "🛠️", "💡"],
    weights: { problemSolver: 3, deepFocus: 3, explorer: 2, maker: 2, mastery: 2, improver: 2, creator: 1, detailThinker: 1, collaborator: 1, independent: 1, persistence: 1 },
    relatedCareers: ["entrepreneur", "chartered-accountant", "doctor", "nurse"],
    alignments: [
      { signals: ["problemSolver", "deepFocus", "persistence"], icon: "🧩", text: "Breaking down a confusing software issue and patiently tracing what caused it." },
      { signals: ["maker", "creator", "improver"], icon: "🛠️", text: "Turning an idea into a working feature, then improving it after people try it." },
      { signals: ["explorer", "mastery"], icon: "🔎", text: "Learning how a new tool works and experimenting with small coding projects." },
      { signals: ["collaborator", "detailThinker", "independent"], icon: "💻", text: "Thinking through a change carefully before testing it and reviewing it with teammates." },
    ],
    considerations: [
      { signals: ["deepFocus", "independent"], icon: "💻", text: "Much of software development happens at a computer, with stretches of concentrated screen time." },
      { signals: ["mastery", "explorer"], icon: "📚", text: "Tools and systems change, so learning continues long after your first course or job." },
      { signals: ["persistence", "improver"], icon: "🔁", text: "Maintaining existing code and debugging can take longer than expected; release deadlines still need managing." },
    ],
  },
  doctor: {
    accent: "coral", icons: ["❤️", "🔎", "📚"],
    weights: { empathy: 3, detailThinker: 3, problemSolver: 2, mastery: 2, communicator: 2, adaptable: 2, collaborator: 1, persistence: 1, explorer: 1 },
    relatedCareers: ["nurse", "software-developer", "chartered-accountant", "entrepreneur"],
    alignments: [
      { signals: ["detailThinker", "problemSolver", "explorer"], icon: "🔎", text: "Connecting a patient's history, examination findings and test results to understand an illness." },
      { signals: ["empathy", "communicator"], icon: "❤️", text: "Listening to a patient's concerns and explaining treatment choices in a reassuring way." },
      { signals: ["mastery", "persistence"], icon: "📚", text: "Building clinical understanding through years of study and supervised practice." },
      { signals: ["adaptable", "collaborator"], icon: "🤝", text: "Reassessing a care plan with colleagues when a patient's condition changes." },
    ],
    considerations: [
      { signals: ["mastery", "persistence"], icon: "📚", text: "Medical education, internship and any specialist training take years and need sustained study and financial planning." },
      { signals: ["adaptable"], icon: "🌙", text: "Hospital training can involve night duties, emergencies and decisions made with incomplete information." },
      { signals: ["empathy", "communicator"], icon: "💬", text: "Difficult outcomes and conversations are part of medicine, even when you provide thoughtful, evidence-based care." },
    ],
  },
  "chartered-accountant": {
    accent: "gold", icons: ["📊", "📋", "🔎"],
    weights: { detailThinker: 3, organizer: 3, structure: 2, deepFocus: 2, problemSolver: 2, mastery: 1, communicator: 1, persistence: 1, improver: 1 },
    relatedCareers: ["entrepreneur", "software-developer", "doctor", "nurse"],
    alignments: [
      { signals: ["detailThinker", "deepFocus"], icon: "📊", text: "Looking closely at financial records and finding the detail behind a discrepancy." },
      { signals: ["organizer", "structure"], icon: "📋", text: "Keeping audit evidence, filing requirements and reporting deadlines in order." },
      { signals: ["problemSolver", "communicator", "improver"], icon: "💬", text: "Explaining what the numbers mean and helping a client improve a financial process." },
      { signals: ["mastery", "persistence"], icon: "📚", text: "Building accounting judgement through ICAI study and practical training." },
    ],
    considerations: [
      { signals: ["persistence", "mastery"], icon: "📚", text: "ICAI exams and practical training require sustained preparation, and qualification timelines can vary." },
      { signals: ["organizer", "structure"], icon: "🗓️", text: "Tax filings, audit closures and year-end reporting can bring busy periods and long days." },
      { signals: ["detailThinker", "communicator"], icon: "🔎", text: "Careful checking and professional independence matter; sometimes you must challenge a client's preferred answer." },
    ],
  },
  entrepreneur: {
    accent: "coral", icons: ["💡", "🛠️", "🔄"],
    weights: { adaptable: 3, creator: 2, communicator: 2, explorer: 2, maker: 2, variety: 2, finisher: 2, problemSolver: 1, collaborator: 1, persistence: 1, independent: 1 },
    relatedCareers: ["software-developer", "chartered-accountant", "nurse", "doctor"],
    alignments: [
      { signals: ["creator", "maker", "finisher"], icon: "💡", text: "Turning a customer problem into a small first version of a product or service." },
      { signals: ["adaptable", "explorer", "problemSolver"], icon: "🔄", text: "Testing an idea with customers and changing direction when the evidence calls for it." },
      { signals: ["communicator", "collaborator"], icon: "🤝", text: "Finding early customers and bringing people together around a venture." },
      { signals: ["variety", "independent", "persistence"], icon: "🛠️", text: "Switching between product, sales and everyday business decisions as a venture develops." },
    ],
    considerations: [
      { signals: ["adaptable", "persistence"], icon: "💰", text: "Income and funding are uncertain. A business may not succeed, and paying yourself can come after essential costs." },
      { signals: ["variety", "communicator"], icon: "📋", text: "Sales, payment follow-ups, complaints and compliance can take more time than developing the original idea." },
      { signals: ["collaborator", "finisher"], icon: "🤝", text: "Customers, employees and investors create responsibilities that can limit the freedom you hoped for." },
    ],
  },
};

export const careerRecommendations = Object.fromEntries(
  Object.entries(careerAssessmentProfiles).map(([slug, profile]) => [slug, profile.relatedCareers])
);