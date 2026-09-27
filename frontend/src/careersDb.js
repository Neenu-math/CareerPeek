// Active V1 career library. Detail and roadmap content lives in careerContent.js.
// Only these original five careers are available through search and routing.

export const careersDb = [
  { slug: "nurse", name: "Nurse", category: "Healthcare", shortDescription: "Care for people when they need it most.", featured: true },
  { slug: "software-developer", name: "Software Developer", category: "Technology", shortDescription: "Turn ideas into tools people use every day.", featured: true },
  { slug: "doctor", name: "Doctor", category: "Healthcare", shortDescription: "Use science and empathy to help people heal.", featured: true },
  { slug: "chartered-accountant", name: "Chartered Accountant", category: "Finance & Accounting", shortDescription: "Help people and businesses make confident decisions.", featured: true },
  { slug: "entrepreneur", name: "Entrepreneur", category: "Business & Management", shortDescription: "Spot opportunities and build something people need.", featured: true },
];

export const featuredSlugs = careersDb.filter(c => c.featured).map(c => c.slug);