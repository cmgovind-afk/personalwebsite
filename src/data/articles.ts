export type SectionType = "paragraph" | "heading" | "quote" | "callout" | "chart";

export interface ArticleSection {
  type: SectionType;
  content?: string;
  level?: 2 | 3;           // for headings
  calloutStyle?: "blue" | "amber" | "green";  // for callouts
  chart?: "adoption-by-industry";  // key for inline chart lookup
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "why-bi-fails",
    title: "Why Most BI Projects Fail — And What the 5% Do Differently",
    subtitle:
      "After 16 years building analytics products across logistics, healthcare, and telecoms, the pattern is depressingly consistent.",
    date: "2026-06-01",
    readTime: "8 min read",
    tags: ["BI Strategy", "Data Products", "Leadership"],
    summary:
      "Most BI projects deliver technically correct outputs that nobody uses. The failure is rarely in the data or the technology — it's in the gap between what gets built and what the business actually needs to make a decision.",
    sections: [
      {
        type: "paragraph",
        content:
          "I have a rough heuristic from 16 years in this field: for every ten BI projects that get funded, built, and launched, about two are still in active use twelve months later. The other eight are either ignored, replaced by a spreadsheet, or quietly deprecated after the sponsor who commissioned them moved to a different role. The failure rate is high enough that most organisations have stopped being surprised by it. They've normalised it.",
      },
      {
        type: "paragraph",
        content:
          "What I want to argue here is that the failure is almost never technical. The data pipeline works. The dashboard loads. The numbers are accurate. The failure happens earlier — in the conversation that decides what to build, and the assumption that 'delivering analytics' and 'helping someone make a better decision' are the same thing. They are not.",
      },
      {
        type: "heading",
        level: 2,
        content: "The gap is not technical",
      },
      {
        type: "paragraph",
        content:
          "Here is the scenario I see most often. A senior leader — let's call her the CFO — says: 'We need better visibility into our cost-to-serve.' The BI team hears: 'Build a cost-to-serve dashboard.' Six months later, a technically impressive dashboard is delivered. It shows cost-to-serve broken down by region, product, customer tier, and time period. It refreshes daily. The data is certified. And the CFO doesn't look at it, because what she actually needed was an answer to a specific question she had about one market, and the dashboard requires thirty minutes of orientation before you can start asking it anything.",
      },
      {
        type: "paragraph",
        content:
          "The gap is between the stated request and the underlying need. Bridging it requires a conversation that most BI teams never have — not because they're incapable, but because the process doesn't create space for it. The project is already scoped. The requirements are already written. The sprint has already started.",
      },
      {
        type: "quote",
        content:
          '"In God we trust; all others must bring data." The irony is that most organisations bring data and still don\'t trust it — because it wasn\'t built around the question they\'re actually trying to answer. — W. Edwards Deming',
      },
      {
        type: "heading",
        level: 2,
        content: "What the successful ones have in common",
      },
      {
        type: "paragraph",
        content:
          "The 5% that work aren't better engineered. They're better framed. Three things show up consistently in the ones that stick:",
      },
      {
        type: "callout",
        calloutStyle: "blue",
        content:
          "1. They start with the decision, not the data. The first question isn't 'what data do we have?' — it's 'what decision does this person need to make, and what information would change how they make it?' Every element of the product flows from that.",
      },
      {
        type: "callout",
        calloutStyle: "green",
        content:
          "2. They involve the end user in the design, not just the sign-off. There's a difference between a stakeholder who approves requirements and a stakeholder who has sat with the prototype and told you three things that are wrong with it. The second kind of involvement produces a product the user trusts.",
      },
      {
        type: "callout",
        calloutStyle: "amber",
        content:
          "3. They treat adoption as a product metric, not a communication problem. If adoption is low, the standard response is to send another email or run another training session. The right response is to treat low adoption the same way you'd treat a bug — as evidence that the product isn't doing its job.",
      },
      {
        type: "heading",
        level: 2,
        content: "The data on data adoption",
      },
      {
        type: "paragraph",
        content:
          "The numbers below are illustrative, based on patterns I've observed across the organisations I've worked with. They reflect a consistent truth: the industries that invest most in BI tooling are not necessarily the ones with the highest actual usage of the outputs.",
      },
      {
        type: "chart",
        chart: "adoption-by-industry",
      },
      {
        type: "paragraph",
        content:
          "What the chart doesn't show is the variance within industries. In every sector, there are organisations with 80%+ self-service adoption and organisations in the same sector where BI is still essentially a reporting function that produces Excel files on request. The difference is almost never the technology stack. It's the product thinking.",
      },
      {
        type: "heading",
        level: 2,
        content: "What I'd tell a team starting today",
      },
      {
        type: "paragraph",
        content:
          "If you're standing at the beginning of a new BI initiative, here's the one thing I'd change if I could: run a two-week discovery before any engineering starts. Not a requirements-gathering exercise — a decision-mapping exercise. Sit with the people who will use this product and map every significant decision they make in a month. Ask what information they currently use to make those decisions, where they get it from, what they don't trust about it, and what they'd do differently if they had better data. That two weeks will change what you build more than any amount of technical planning.",
      },
      {
        type: "paragraph",
        content:
          "The 5% of BI products that survive aren't lucky. They're the ones where someone asked the right question before writing a single line of DAX.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
