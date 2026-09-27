import { assessmentInteractions, activities, environments, tradeoffs, changeResponses } from "./interactions";

// Everyday, low-stakes situations: students never need professional knowledge.
// Stable option IDs preserve the reusable interaction and future scoring contracts.
export const careerVariants = {
  "software-developer": {
    label: "Software Developer",
    workday: "Imagine helping make an app easier for students to use. Where would you put your energy?",
    activities: [
      "Figure out why something won't respond", "Sketch a fresh idea for a screen", "Build an idea with a small team", "Hear what people find confusing",
      "Explore a new way to make things work", "Look for patterns in people's feedback", "Plan the next small improvements", "Make a rough version people can try",
    ],
    environment: "You're helping shape a useful digital tool. Which kind of day draws you in?",
    environments: [
      ["A quiet space to figure things out", "🎧 Uninterrupted thinking time", "🧩 One puzzling issue to untangle"],
      ["An idea-sharing team space", "💬 Talk through how an app could work", "🤝 Build on each other's suggestions"],
      ["A day of trying and showing", "🏃 Switch between making and meeting", "💬 Hear from different people using the idea"],
      ["A playful corner for experiments", "🎨 Sketch several ways a screen could feel", "🔄 Try a version, get feedback, improve"],
    ],
    tradeoffs: [
      ["An app for your school club is confusing. Which part would you rather take on?", "Stay with one confusing feature until you understand it.", "Help a few classmates find their way around the app."],
      ["Which project would feel more satisfying?", "Make a small tool from a completely new idea.", "Make a tool you already use simpler and more useful."],
      ["You have a day to work on your idea. Which rhythm appeals more?", "A clear plan and time set aside for each part.", "Room to change direction when a new idea appears."],
      ["You're deciding how a new screen might work. What pulls you in?", "Try a few rough versions and see what people prefer.", "Think through the small details before choosing a version."],
    ],
    change: "You're helping plan an app for a school club. Just before trying it out, you learn students need something different.",
    reactions: ["Find out what students now need", "Try a different way to make it useful", "Talk through the options with the group", "Reorder the tasks and make a new plan"],
    motivation: "You're trying to make a small digital tool useful for classmates. It's new to you, and improving it is taking longer than you expected.",
    mix: "Imagine a day spent bringing a digital idea to life. What balance would you choose for yourself?",
  },
  nurse: {
    label: "Nursing",
    workday: "Imagine helping a care team make a busy day easier for people. Where would you put your energy?",
    activities: [
      "Untangle a confusing request for help", "Create a reassuring welcome note", "Support a team through a busy moment", "Listen to someone who feels worried",
      "Learn a new way to make someone comfortable", "Notice small changes in someone's needs", "Keep the day's care tasks in order", "Put together a useful comfort kit",
    ],
    environment: "Imagine a day helping people feel cared for. Which setting feels more like your pace?",
    environments: [
      ["A calm corner for careful attention", "🎧 Time to read and reflect", "📋 One person's needs at a time"],
      ["A busy, supportive care team", "💬 Frequent updates with colleagues", "🤝 Share the work when the day gets full"],
      ["Moving between people and places", "🏃 A different person to support next", "🔄 Adjust as people's needs change"],
      ["Space to make care more welcoming", "🎨 Think of comforting little touches", "💡 Try clearer ways to explain things"],
    ],
    tradeoffs: [
      ["You're helping at a care centre. Which part would you rather spend time on?", "Work out why one welcome routine keeps getting confusing.", "Help several visitors feel settled and find what they need."],
      ["What would feel more satisfying to make?", "A new welcome kit that helps people feel at ease.", "An existing care guide made clearer and kinder to read."],
      ["Which kind of day feels closer to your preference?", "A familiar routine with clear tasks and handovers.", "A changing day where you adapt to who needs support."],
      ["You want to make a shared waiting space more comfortable. Where would you begin?", "Try a few welcoming ideas and hear what people think.", "Look closely at the small things that currently bother people."],
    ],
    change: "You're helping a care team welcome visitors. A group arrives earlier than expected, and the welcome plan needs to change.",
    reactions: ["Find out who has arrived and what they need", "Think of another way to welcome everyone", "Check in with the team before acting", "Reorganize the welcome tasks and timings"],
    motivation: "You're learning how to help people feel welcome and supported at a busy care centre. Some days ask more of you than you expected.",
    mix: "Imagine a day helping people feel cared for. What balance would make that day feel right for you?",
  },
  doctor: {
    label: "Medicine",
    workday: "Imagine helping a health team understand people's concerns and explain things clearly. What would you spend your energy on?",
    activities: [
      "Make sense of a person's puzzling story", "Create a simple explanation of an idea", "Think through a situation with a care team", "Listen carefully to someone's concerns",
      "Explore how the human body works", "Compare clues before drawing a conclusion", "Organize notes from different conversations", "Make a simple health-information display",
    ],
    environment: "You're exploring a day around health and care. Which kind of setting would you be drawn to?",
    environments: [
      ["Time to follow one story closely", "🔎 Read, reflect and connect the clues", "🎧 Focus before moving to the next person"],
      ["A shared space for a care team", "💬 Compare different points of view", "🤝 Work towards an answer together"],
      ["Different conversations through the day", "🏃 Meet people with different concerns", "🔄 Adapt when something needs attention"],
      ["Room to find a clearer explanation", "💡 Explore ways to explain a health idea", "🎨 Make something complicated feel simple"],
    ],
    tradeoffs: [
      ["At a health-awareness event, where would you rather spend your time?", "Explore one question in depth until the explanation makes sense.", "Listen to several visitors and help them find useful information."],
      ["Which way of sharing a health idea sounds more satisfying?", "Create a completely new way to explain it simply.", "Improve an existing explanation that people find confusing."],
      ["Which kind of day would you naturally prefer?", "Planned conversations with time to prepare between them.", "A changing mix of conversations and unexpected questions."],
      ["You're learning about a health topic for the first time. What draws you in?", "Explore a few different explanations and compare what you discover.", "Read one explanation carefully and check the details first."],
    ],
    change: "You're helping plan a health-awareness session. The group asks to discuss a different concern that matters more to them.",
    reactions: ["Ask what the group most wants to understand", "Find a new way to make the session useful", "Talk through the change with the other helpers", "Rework the session plan and its priorities"],
    motivation: "You're learning how to help someone understand a health concern. There's more to take in than you expected, and a clear explanation takes practice.",
    mix: "Imagine a day learning about health and supporting people. What balance would you choose?",
  },
  "chartered-accountant": {
    label: "Chartered Accountancy",
    workday: "Imagine helping a school event make sense of its money. How would you spend your energy?",
    activities: [
      "Track down a missing number", "Make a money story easy to follow", "Work together on a shared budget", "Explain a spending plan to someone",
      "Discover how a small business earns", "Look for patterns in a list of costs", "Put receipts and dates in order", "Build a simple budget tracker",
    ],
    environment: "Imagine helping people understand their spending and plans. Which workday appeals to you?",
    environments: [
      ["A quiet desk and time to check", "🎧 Focus on one set of numbers", "🔎 Follow the details without rushing"],
      ["A shared table for comparing plans", "💬 Talk through what the numbers mean", "🤝 Check your thinking with teammates"],
      ["Different businesses, different stories", "🏃 Meet people with different questions", "🔄 Switch between conversations and checking"],
      ["A space to make money make sense", "🎨 Try clearer ways to present information", "💡 Turn a confusing list into a useful story"],
    ],
    tradeoffs: [
      ["A school event's budget has a few loose ends. Which would you rather do?", "Trace one unexplained cost until the numbers make sense.", "Help several stall teams understand their spending plans."],
      ["Which small project sounds more satisfying?", "Build a new way for the team to track its spending.", "Improve a spending sheet that people already use."],
      ["Which day would feel more comfortable to work through?", "Clear deadlines and a familiar checking routine.", "Different requests that change what you focus on next."],
      ["You want to explain the event's spending. What would you do first?", "Try a few ways to show the story behind the numbers.", "Check the details carefully before deciding what to show."],
    ],
    change: "You're helping plan the budget for a school event. An important cost suddenly doubles, so the spending plan needs to change.",
    reactions: ["Find out exactly which cost changed and why", "Look for another way to make the budget work", "Talk through the options with the event team", "Reorder the spending priorities and update the plan"],
    motivation: "You're helping a group make sense of its spending for the first time. Some records don't match, and finding a clear answer takes longer than expected.",
    mix: "Imagine a day helping people understand money and make plans. What working balance would suit your preferences?",
  },
  entrepreneur: {
    label: "Entrepreneurship",
    workday: "Imagine turning a small idea into something people might use. Where would you put your energy?",
    activities: [
      "Find out why an idea isn't catching on", "Imagine something people would enjoy", "Bring a small team together", "Talk with people who might try an idea",
      "Discover an unmet everyday need", "Compare feedback from a few people", "Plan the tasks for a small launch", "Make a rough first version",
    ],
    environment: "You're exploring a small idea with real people. Which kind of day feels more like you?",
    environments: [
      ["A quiet space to move one idea forward", "🎧 Work through a knotty detail", "🛠️ Make steady progress on a first version"],
      ["A lively table with your small team", "💬 Share ideas and make decisions together", "🤝 Help each other move the work along"],
      ["A day out meeting and trying things", "🏃 Talk to people who might use the idea", "🔄 Switch between feedback and next steps"],
      ["A workshop full of possibilities", "💡 Imagine different things you could make", "🎨 Try, show someone, then rethink"],
    ],
    tradeoffs: [
      ["You're trying out a small idea. Where would you rather put two hours?", "Work through the one tricky thing stopping it from working.", "Help a few people try it and listen to their experiences."],
      ["Which kind of project feels more exciting to you?", "Create something that starts with a blank page.", "Make a familiar product or service work better for people."],
      ["What kind of day would you choose for yourself?", "A clear plan with time to finish what you started.", "Room to follow an unexpected opportunity or new request."],
      ["You have an idea for something people might want. What pulls you in first?", "Make a rough version and see how people react.", "Look carefully at what people need before choosing a version."],
    ],
    change: "You're getting ready to show a new idea. The first people who try it ask for something different from what you planned.",
    reactions: ["Understand what those people are really asking for", "Try a new version that could meet the need", "Talk through the feedback with your small team", "Reorder the next tasks and adjust the plan"],
    motivation: "You're turning an idea into a small product or service. The first attempt hasn't caught on, and getting it right is harder than you expected.",
    mix: "Imagine a day shaping an idea and bringing it to people. What balance would you choose for yourself?",
  },
};

export function getCareerInteractions(slug) {
  const variant = careerVariants[slug];
  if (!variant) throw new Error("No assessment configuration for this career.");
  return {
    label: variant.label,
    stages: assessmentInteractions.map((stage, i) => ({ ...stage,
      title: i === 2 ? "Would You Rather?" : stage.title,
      prompt: [variant.workday, variant.environment, stage.prompt, variant.change, variant.motivation, variant.mix][i],
    })),
    activities: activities.map((item, i) => ({ ...item, label: variant.activities[i] })),
    environments: environments.map((item, i) => ({ ...item, title: variant.environments[i][0], lines: variant.environments[i].slice(1) })),
    tradeoffs: tradeoffs.map((pair, i) => ({ ...pair, prompt: variant.tradeoffs[i][0], options: pair.options.map((option, j) => ({ ...option, label: variant.tradeoffs[i][j + 1] })) })),
    changeResponses: changeResponses.map((item, i) => ({ ...item, label: variant.reactions[i] })),
  };
}