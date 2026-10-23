// Add authored notes here. Dates use YYYY-MM-DD; body is an array of paragraphs.
export const articles = [
  {
    slug: "the-rows-i-chose-not-to-hide",
    title: "The rows I chose not to hide",
    date: "2026-10-23",
    topic: "A portfolio project",
    description: "While building a reporting pipeline, I had to decide what a clean total should show and what it should explain.",
    body: [
      "When I started building my reporting pipeline, I pictured the finished report: several transaction files turned into clear summaries. Then I ran into a question that mattered before any chart or total. What should happen to a row that does not pass validation?",
      "A transaction might have a missing identity field, a date that cannot be read, a duplicate ID, or a quantity that does not make sense. If I removed those rows and showed only the clean results, the report could look tidy while hiding part of the input. If I let every row through, the totals could be wrong. Neither answer felt useful to someone who needed to trust the result.",
      "So I gave the records two clear paths. Rows that passed the checks could feed the summaries. Rows that did not pass stayed visible in a separate rejected file, with a reason attached to each one. That way, the report could still be useful, and the person reviewing it could see what had been left out and decide what needed attention.",
      "That choice shaped more than the validation code. It shaped the report itself. I wanted someone to be able to follow the result back to the records behind it, and to see the exceptions instead of having to guess why the totals changed. A clean number matters, but knowing what went into it matters too.",
      "This is a portfolio project, not a live client system, and I have not measured a production impact from it. What I took from building it is a design habit I want to keep: when data fails a check, make the reason visible. Do not let a neat summary make an uncertain result look complete."
    ]
  },
  {
    slug: "the-work-between-the-tasks",
    title: "The work between the tasks",
    date: "2026-10-23",
    topic: "How I work",
    description: "What client work taught me about keeping priorities clear and moving without waiting to be managed.",
    body: [
      "Client work has taught me that finishing the task in front of me is only part of doing a good job. The work around it matters too. I need to understand what someone is asking for, why it matters, what has already been agreed, and what should happen after I finish.",
      "I have learned to slow down before I start. If a requirement is unclear, I ask questions and confirm the expected result. I keep the important details in writing, so I can come back to them and the team has the same understanding. A few minutes spent getting clear at the beginning can save a lot of time later.",
      "Some days, two or three requests arrive with the same delivery date. The dates alone do not tell me which one matters most to the business. I look at the reason behind each request, then talk through the priority with my team lead before I decide what to pick up first. That conversation helps me make a considered choice and keeps the team informed.",
      "I also keep a short record of my own work. I write down what I finished, what is waiting, and what I need to do next. When I return to a task, I do not have to piece everything together from memory. I can see where it stands and get moving again.",
      "Over time, I have become more comfortable managing that space between instructions. I do not need every next step handed to me, but I also do not make priority calls in isolation. I ask when I need clarity, share what I have learned, and keep the next action visible.",
      "That is what taking ownership means to me. Do the work carefully, understand the reason behind it, keep people informed, and leave things clear enough for the next person to continue. It is a quiet part of the job, but it is one I have learned to value."
    ]
  }
];
