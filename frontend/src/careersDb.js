// Central career library. Featured careers (featured: true) have full
// detail content defined in App.js. Non-featured careers currently show a
// compact search-result row and a lightweight stub detail page; their full
// deep-dives will be added in a later step.

export const careersDb = [
  // Featured (5) — full detail lives in App.js
  { slug: "nurse", name: "Nurse", category: "Healthcare", shortDescription: "Care for people when they need it most.", featured: true },
  { slug: "software-developer", name: "Software Developer", category: "Technology", shortDescription: "Turn ideas into tools people use every day.", featured: true },
  { slug: "doctor", name: "Doctor", category: "Healthcare", shortDescription: "Use science and empathy to help people heal.", featured: true },
  { slug: "chartered-accountant", name: "Chartered Accountant", category: "Finance & Accounting", shortDescription: "Help people and businesses make confident decisions.", featured: true },
  { slug: "entrepreneur", name: "Entrepreneur", category: "Business & Management", shortDescription: "Spot opportunities and build something people need.", featured: true },

  // Technology
  { slug: "data-analyst", name: "Data Analyst", category: "Technology", shortDescription: "Turn raw data into clear answers teams can act on." },
  { slug: "data-scientist", name: "Data Scientist", category: "Technology", shortDescription: "Use maths and code to find patterns that shape decisions." },
  { slug: "ai-ml-engineer", name: "AI/ML Engineer", category: "Technology", shortDescription: "Build systems that learn from data to solve real problems." },
  { slug: "cybersecurity-analyst", name: "Cybersecurity Analyst", category: "Technology", shortDescription: "Protect people, data and systems from digital threats." },
  { slug: "cloud-engineer", name: "Cloud Engineer", category: "Technology", shortDescription: "Design and run the infrastructure that powers modern apps." },
  { slug: "devops-engineer", name: "DevOps Engineer", category: "Technology", shortDescription: "Ship software safely by wiring code, testing and deploys together." },
  { slug: "mobile-app-developer", name: "Mobile App Developer", category: "Technology", shortDescription: "Build the apps people carry around in their pocket." },
  { slug: "ui-ux-designer", name: "UI/UX Designer", category: "Technology", shortDescription: "Shape how digital products look, feel and flow." },

  // Healthcare
  { slug: "pharmacist", name: "Pharmacist", category: "Healthcare", shortDescription: "Guide the safe use of medicines in people's daily lives." },
  { slug: "dentist", name: "Dentist", category: "Healthcare", shortDescription: "Care for teeth, gums and confident smiles." },
  { slug: "physiotherapist", name: "Physiotherapist", category: "Healthcare", shortDescription: "Help people move, recover and feel strong again." },
  { slug: "veterinarian", name: "Veterinarian", category: "Healthcare", shortDescription: "Care for animals and support the families who love them." },
  { slug: "nutritionist", name: "Nutritionist / Dietitian", category: "Healthcare", shortDescription: "Turn food science into everyday plans people can follow." },

  // Business & Management
  { slug: "product-manager", name: "Product Manager", category: "Business & Management", shortDescription: "Bring teams, users and business goals into one product plan." },
  { slug: "business-analyst", name: "Business Analyst", category: "Business & Management", shortDescription: "Translate business needs into clear, workable solutions." },
  { slug: "hr-manager", name: "HR Manager", category: "Business & Management", shortDescription: "Build the people practices that help a company thrive." },
  { slug: "project-manager", name: "Project Manager", category: "Business & Management", shortDescription: "Guide teams to deliver work on time and to a real outcome." },
  { slug: "operations-manager", name: "Operations Manager", category: "Business & Management", shortDescription: "Keep the day-to-day of a business running smoothly." },
  { slug: "supply-chain-manager", name: "Supply Chain Manager", category: "Business & Management", shortDescription: "Move products from source to customer, reliably and efficiently." },
  { slug: "marketing-manager", name: "Marketing Manager", category: "Business & Management", shortDescription: "Shape how a brand shows up in the world and grows its audience." },
  { slug: "sales-manager", name: "Sales Manager", category: "Business & Management", shortDescription: "Lead teams that turn conversations into long-term customers." },

  // Finance & Accounting
  { slug: "financial-analyst", name: "Financial Analyst", category: "Finance & Accounting", shortDescription: "Read the numbers behind a business and guide smarter choices." },
  { slug: "economist", name: "Economist", category: "Finance & Accounting", shortDescription: "Study how people, markets and policies shape the world." },
  { slug: "actuary", name: "Actuary", category: "Finance & Accounting", shortDescription: "Use maths and probability to price risk in insurance and finance." },
  { slug: "investment-banker", name: "Investment Banker", category: "Finance & Accounting", shortDescription: "Advise companies on raising money and making big financial moves." },

  // Design & Creative
  { slug: "graphic-designer", name: "Graphic Designer", category: "Design & Creative", shortDescription: "Communicate ideas through type, layout and visual identity." },
  { slug: "interior-designer", name: "Interior Designer", category: "Design & Creative", shortDescription: "Shape the spaces where people live, learn and work." },
  { slug: "fashion-designer", name: "Fashion Designer", category: "Design & Creative", shortDescription: "Turn ideas about culture and self-expression into clothing." },
  { slug: "animator", name: "Animator", category: "Design & Creative", shortDescription: "Bring characters, motion and stories to life on screen." },
  { slug: "photographer", name: "Photographer", category: "Design & Creative", shortDescription: "Notice moments others miss and capture them with intention." },
  { slug: "architect", name: "Architect", category: "Design & Creative", shortDescription: "Design buildings that are useful, safe and beautiful to live in." },

  // Education
  { slug: "teacher", name: "Teacher", category: "Education", shortDescription: "Help young people learn, grow and find what they are good at." },
  { slug: "professor", name: "Professor", category: "Education", shortDescription: "Teach at university level and contribute to your field of study." },

  // Law
  { slug: "lawyer", name: "Lawyer", category: "Law", shortDescription: "Advise people and organisations on their rights and choices." },
  { slug: "legal-consultant", name: "Legal Consultant", category: "Law", shortDescription: "Give specialist legal advice on complex business questions." },

  // Engineering
  { slug: "civil-engineer", name: "Civil Engineer", category: "Engineering", shortDescription: "Design the roads, bridges and buildings that shape a city." },
  { slug: "mechanical-engineer", name: "Mechanical Engineer", category: "Engineering", shortDescription: "Design and improve the machines that move the physical world." },
  { slug: "electrical-engineer", name: "Electrical Engineer", category: "Engineering", shortDescription: "Design the circuits, power and signals behind modern life." },
  { slug: "chemical-engineer", name: "Chemical Engineer", category: "Engineering", shortDescription: "Design processes that turn raw materials into useful products." },

  // Media & Communication
  { slug: "journalist", name: "Journalist", category: "Media & Communication", shortDescription: "Investigate, ask questions and tell stories that inform people." },
  { slug: "content-writer", name: "Content Writer", category: "Media & Communication", shortDescription: "Turn ideas and research into clear, useful writing." },
  { slug: "digital-marketer", name: "Digital Marketer", category: "Media & Communication", shortDescription: "Reach the right audience online and turn attention into action." },
  { slug: "social-media-manager", name: "Social Media Manager", category: "Media & Communication", shortDescription: "Shape how a brand shows up and talks with people on social platforms." },
  { slug: "public-relations-specialist", name: "Public Relations Specialist", category: "Media & Communication", shortDescription: "Manage the story an organisation shares with the public and press." },

  // Science & Research
  { slug: "biotechnologist", name: "Biotechnologist", category: "Science & Research", shortDescription: "Use biology and technology to solve health and environment problems." },
  { slug: "environmental-scientist", name: "Environmental Scientist", category: "Science & Research", shortDescription: "Study the natural world and how we can protect it." },
  { slug: "research-scientist", name: "Research Scientist", category: "Science & Research", shortDescription: "Design experiments, test ideas and push a field forward." },

  // Government / Public Service
  { slug: "government-officer", name: "Government Officer", category: "Government / Public Service", shortDescription: "Serve the public by helping policies and services actually work." },

  // Hospitality & Tourism
  { slug: "pilot", name: "Pilot", category: "Hospitality & Tourism", shortDescription: "Fly people and cargo safely across cities and countries." },
  { slug: "hotel-manager", name: "Hotel Manager", category: "Hospitality & Tourism", shortDescription: "Run the teams and spaces that make travellers feel at home." },
  { slug: "event-manager", name: "Event Manager", category: "Hospitality & Tourism", shortDescription: "Plan and run events that bring people together with intention." },
  { slug: "chef", name: "Chef", category: "Hospitality & Tourism", shortDescription: "Design and lead the food experience of a restaurant or kitchen." },

  // Social / Psychology
  { slug: "psychologist", name: "Psychologist", category: "Social / Psychology", shortDescription: "Help people understand their minds, emotions and choices." },
  { slug: "social-worker", name: "Social Worker", category: "Social / Psychology", shortDescription: "Support individuals, families and communities through hard moments." },
];

export const featuredSlugs = careersDb.filter(c => c.featured).map(c => c.slug);
