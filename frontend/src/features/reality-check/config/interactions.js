export const assessmentInteractions = [
  { id: "workday", title: "Build Your Ideal Workday", prompt: "You have a free day at work. How would you spend it?", instruction: "Place all 5 energy tokens. Drag them, tap a card, or use + and −.", weight: 1 },
  { id: "environment", title: "Pick Your Work Environment", prompt: "Which workday feels more like you?", instruction: "Pick up to 2.", weight: 1 },
  { id: "tradeoffs", title: "The Would You Rather Challenge", prompt: "Two possibilities. Go with the one that pulls you in.", instruction: "There is no right answer.", weight: 1 },
  { id: "change", title: "Something Changed...", prompt: "You're working on something important. Suddenly, the plan changes.", instruction: "What would you naturally do first?", weight: 1 },
  { id: "motivation", title: "What Would Keep You Going?", prompt: "You're doing something you've never done before. It's harder than you expected.", instruction: "What would make you want to keep going? Pick two.", weight: 1 },
  { id: "mix", title: "Build Your Perfect Mix", prompt: "One last thing. Imagine you could design your ideal career.", instruction: "Find your balance. The middle is a choice, too.", weight: 1 },
];

export const activities = [
  { id: "solve", icon: "🧩", label: "Solve a tricky problem", signals: { problemSolver: 3, deepFocus: 1 } },
  { id: "create", icon: "🎨", label: "Create something", signals: { creator: 3, explorer: 1 } },
  { id: "team", icon: "🤝", label: "Work with a team", signals: { collaborator: 3, communicator: 1 } },
  { id: "talk", icon: "💬", label: "Talk to people", signals: { communicator: 3, empathy: 1 } },
  { id: "discover", icon: "🔎", label: "Discover something new", signals: { explorer: 3, mastery: 1 } },
  { id: "information", icon: "📊", label: "Work with information", signals: { detailThinker: 3, problemSolver: 1 } },
  { id: "organize", icon: "📋", label: "Organize things", signals: { organizer: 3, structure: 1 } },
  { id: "build", icon: "🛠️", label: "Build something", signals: { maker: 3, creator: 1 } },
];

export const environments = [
  { id: "quiet", theme: "sky", icon: "💻", title: "Quiet workspace", lines: ["🎧 Focused work", "🧩 One problem at a time"], signals: { independent: 2, deepFocus: 2 } },
  { id: "team", theme: "mint", icon: "👥", title: "Busy team environment", lines: ["💬 Constant conversations", "🤝 Working together"], signals: { collaborator: 2, communicator: 2 } },
  { id: "moving", theme: "gold", icon: "🏃", title: "Moving between places", lines: ["👩‍💼 Meeting different people", "🔄 Something different every hour"], signals: { variety: 2, adaptable: 1, communicator: 1 } },
  { id: "creative", theme: "coral", icon: "🎨", title: "Creative workspace", lines: ["💡 Ideas everywhere", "🔄 Experiment → feedback → improve"], signals: { creator: 2, explorer: 1, improver: 1 } },
];

export const tradeoffs = [
  { prompt: "You have two hours free. Which would you rather spend them doing?", options: [
    { id: "deep", icon: "🧩", label: "Work on one difficult problem until you figure it out.", signals: { problemSolver: 2, deepFocus: 1, persistence: 1 } },
    { id: "help", icon: "🤝", label: "Help several people solve their problems.", signals: { empathy: 2, communicator: 1, variety: 1 } },
  ] },
  { prompt: "Which sounds more satisfying?", options: [
    { id: "new", icon: "🛠️", label: "Build something from scratch.", signals: { maker: 2, creator: 2 } },
    { id: "improve", icon: "✨", label: "Improve something that already exists.", signals: { improver: 2, detailThinker: 1, problemSolver: 1 } },
  ] },
  { prompt: "Which sounds more exciting?", options: [
    { id: "steady", icon: "📋", label: "A predictable day where you know what's coming.", signals: { structure: 3, organizer: 1 } },
    { id: "unexpected", icon: "🔄", label: "A day where something unexpected might happen.", signals: { adaptable: 2, variety: 1, explorer: 1 } },
  ] },
  { prompt: "A new idea is taking shape. Which part draws you in?", options: [
    { id: "try", icon: "💡", label: "Try out a few possibilities and see what happens.", signals: { explorer: 2, creator: 1, adaptable: 1 } },
    { id: "think", icon: "🔎", label: "Look closely at the details before choosing an approach.", signals: { detailThinker: 2, deepFocus: 1, independent: 1 } },
  ] },
];

export const changeResponses = [
  { id: "understand", icon: "🔎", label: "Understand what changed first", signals: { detailThinker: 2, explorer: 1, adaptable: 1 } },
  { id: "solution", icon: "🧩", label: "Try to find a new solution", signals: { problemSolver: 2, adaptable: 2 } },
  { id: "discuss", icon: "🤝", label: "Talk it through with someone", signals: { collaborator: 2, communicator: 1, empathy: 1 } },
  { id: "replan", icon: "📋", label: "Reorganize everything and make a new plan", signals: { organizer: 2, structure: 1, adaptable: 1 } },
];

export const motivations = [
  { id: "figure", icon: "💡", label: "I want to figure it out", signals: { problemSolver: 2, persistence: 2 } },
  { id: "help", icon: "❤️", label: "I know it will help someone", signals: { empathy: 3, persistence: 1 } },
  { id: "finish", icon: "🏆", label: "I want to see the finished result", signals: { finisher: 3, persistence: 1 } },
  { id: "discover", icon: "🔎", label: "I'm curious about what I'll discover", signals: { explorer: 3, mastery: 1 } },
  { id: "team", icon: "🤝", label: "I don't want to let my team down", signals: { collaborator: 3, persistence: 1 } },
  { id: "master", icon: "🎯", label: "I want to get really good at it", signals: { mastery: 3, persistence: 1 } },
];

export const mixPreferences = [
  { id: "people", left: "People", right: "Things", icons: ["💬", "🛠️"], leftSignals: { empathy: 1, communicator: 1 }, rightSignals: { maker: 1, detailThinker: 1 } },
  { id: "creative", left: "Creative", right: "Structured", icons: ["🎨", "📋"], leftSignals: { creator: 1, explorer: 1 }, rightSignals: { organizer: 1, structure: 1 } },
  { id: "together", left: "Independent", right: "Collaborative", icons: ["🌱", "🤝"], leftSignals: { independent: 1, deepFocus: 1 }, rightSignals: { collaborator: 1, communicator: 1 } },
  { id: "change", left: "Predictable", right: "Changing", icons: ["🗓️", "🔄"], leftSignals: { structure: 1, organizer: 1 }, rightSignals: { adaptable: 1, explorer: 1 } },
  { id: "focus", left: "Deep Focus", right: "Variety", icons: ["🎯", "🌈"], leftSignals: { deepFocus: 1, persistence: 1 }, rightSignals: { variety: 1, adaptable: 1 } },
];