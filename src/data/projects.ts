export type FilterTag = "product-led" | "data-engineering" | "ai-ml";

export interface Metric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  thumbnail: string;
  tags: string[];
  filters: FilterTag[];
  accentColor: string;
  // 4-section structure
  problem: string;
  whatWeBuilt: string;
  technicalDepth: {
    stack: string;
    architecture: string;
    engineeringChallenge: string;
  };
  theNumbers: { value: string; label: string }[];
  whatILearned: string;
  // kept for ImpactBar / card badge
  metrics: Metric[];
}

export const projects: Project[] = [
  {
    id: "customer-profitability-engine",
    title: "Customer Profitability Engine",
    tagline: "$59M incremental revenue through data-driven pricing and cross-sell",
    thumbnail: "/images/projects/customer-profitability.jpg",
    tags: ["Power BI", "Azure Data Lake", "DAX", "Pricing Analytics"],
    filters: ["product-led", "data-engineering"],
    accentColor: "#d97706",
    problem:
      "Maersk's commercial teams managed thousands of customer relationships across 130+ countries, but their view of profitability was fragmented. Sales reps had instincts. Finance had spreadsheets. Nobody had a single trusted view of which customers were actually making money — and which were quietly eroding margin while looking fine on the surface.\n\nThe brief I inherited was deceptively simple: help commercial leadership understand customer profitability. The reality was a data and political challenge in equal measure. Revenue, cost-to-serve, and volume data lived in separate systems across Ocean and Logistics. Definitions weren't standardised. And the sales organisation had little appetite for a tool that might call their book of business into question.",
    whatWeBuilt:
      "The Customer Profitability Engine pulls from Azure Data Lake, layers in activity-based cost allocation, and surfaces a Power BI product that lets sales and pricing teams see GP per customer, per lane, and per product — with cross-sell and pricing renegotiation triggers built in.\n\nWe ran alpha and beta cycles with individual market leaders before any broad rollout — showing our working, letting them challenge the model, incorporating their feedback into the governance layer. That process added six weeks to the timeline. It also meant that when we went live, adoption was immediate because the business already owned it.",
    technicalDepth: {
      stack: "Power BI · Azure Data Lake · DAX · Azure Data Factory",
      architecture:
        "Revenue, cost-to-serve, and volume data unified across Ocean and Logistics into a single Azure Data Lake layer. DAX semantic model handles cost allocation logic, keeping the front-end clean for weekly commercial reviews.",
      engineeringChallenge:
        "Building a DAX model performing activity-based cost allocation at customer-lane-product granularity without degrading query performance across a 1M+ opportunity dataset.",
    },
    theNumbers: [
      { value: "$59M", label: "Incremental revenue generated (Q3 2025, Finance-audited)" },
      { value: "1M+", label: "Opportunities in the underlying dataset" },
      { value: "130+", label: "Countries in scope" },
    ],
    whatILearned:
      "The hardest part wasn't the data engineering — it was earning the right for the numbers to matter. Sales leaders who've managed relationships for years don't easily accept a model that questions their instincts about which customers are valuable. I'd never skip the alpha cycle again. Run those stakeholder conversations in parallel with the build, not after it. The six weeks felt like a delay. It was actually the product.",
    metrics: [
      { value: 59, suffix: "M", prefix: "$", label: "Incremental revenue" },
      { value: 130, suffix: "+", label: "Countries in scope" },
    ],
  },
  {
    id: "fmt-vessel-dashboard",
    title: "FMT Vessel Dashboard",
    tagline: "Fleet intelligence for 350+ captains across 11,000+ crew",
    thumbnail: "/images/projects/fmt-vessel.jpg",
    tags: ["Power BI", "SQL", "Azure", "Fleet Analytics"],
    filters: ["product-led", "data-engineering"],
    accentColor: "#1e40af",
    problem:
      "Container shipping runs on schedules. When a vessel falls behind — a port delay, an unplanned maintenance stop, a weather diversion — the effects cascade through hundreds of downstream bookings. The people responsible for managing that complexity, ship captains and fleet operations managers, were working with reporting tools designed for analysts on land, not officers on a bridge.\n\nThe existing FMT dashboard existed but wasn't trusted. Captains weren't using it. Fleet managers were exporting to Excel and building their own views. The data was there. The product wasn't doing its job.",
    whatWeBuilt:
      "A redesigned Power BI dashboard purpose-built for the operational rhythm of vessel management — schedule reliability tracking, breakdown risk flagging, and maintenance predictors, surfaced at the right level of detail for both bridge crew and shore-side operations.\n\nThe risk flags — particularly the high-risk breakdown predictor — came from pattern analysis across historical maintenance data, translated into a simple traffic light system that needed no analytics training to interpret. The design process included structured sessions with captains and fleet managers: not asking what data they had access to, but what decisions they actually make and what they need to make them well.",
    technicalDepth: {
      stack: "Power BI · SQL · Azure",
      architecture:
        "SQL-backed vessel tracking, maintenance history, and route data integrated into a semantic layer refreshed on operational reporting cycles. Risk flags derived from pattern analysis across historical maintenance records.",
      engineeringChallenge:
        "Designing a data model that stayed performant for 350+ concurrent users with varying connectivity — including bridge crew on vessels with limited bandwidth.",
    },
    theNumbers: [
      { value: "+17%", label: "Schedule reliability improvement" },
      { value: "-29%", label: "High-risk breakdowns" },
      { value: "56 hrs/mo", label: "Manual reporting effort eliminated (≈1.5 FTE)" },
      { value: "350+", label: "Captains using the dashboard" },
      { value: "11,000+", label: "Crew members across the fleet" },
    ],
    whatILearned:
      "The users who matter most are often the furthest from the people building the product. A ship captain's working environment — watch schedules, connectivity gaps, the cognitive load of running a vessel — is nothing like an analyst's office. Designing for them meant going to where the work actually happens, not where it gets reported. Every decision about what to show and what to hide came from that. I learned that the most important design question isn't 'what does the data say?' — it's 'what decision does this person need to make in the next five minutes?'",
    metrics: [
      { value: 17, suffix: "%", label: "Schedule reliability improvement" },
      { value: 29, suffix: "%", label: "High-risk breakdowns reduced" },
    ],
  },
  {
    id: "marketing-aiml",
    title: "Marketing AI/ML Platform",
    tagline: "Customer segmentation and dynamic attribution across 130+ countries",
    thumbnail: "/images/projects/marketing-aiml.jpg",
    tags: ["Machine Learning", "Azure OpenAI", "Python", "SFDC", "GA4"],
    filters: ["product-led", "ai-ml"],
    accentColor: "#7c3aed",
    problem:
      "Maersk's marketing teams were running on static, last-touch attribution and intuition-based segmentation. With 100,000+ customers across 130+ countries and paid channels spanning Facebook, LinkedIn, Meta, and programmatic, they had no reliable mechanism to understand which customers to prioritise, when, or through which channel.\n\nThe ask was to bring machine learning into that process. My role wasn't to build the models — it was to own the product: bridging the gap between data scientists who understood the technique, engineers who'd build the infrastructure, marketing stakeholders who needed to act on the outputs, and leadership who needed to approve the investment. That translation layer is where these projects succeed or fail.",
    whatWeBuilt:
      "Two integrated components. First: a K-means clustering model using RFM+ features (Recency, Frequency, Monetary value, Rank, Regularity, Seasonality), applied to approximately 63,000 active customers from a base of 100,000+. The Elbow method determined optimal cluster count: 9 segments, from Elite Champions to At-Risk Drop-offs, each with a meaningfully different commercial profile.\n\nSecond: a Q-Learning reinforcement learning agent replacing static attribution. Rather than crediting the first or last touchpoint, the model learns the optimal campaign action per customer state — pulling from GA4, Salesforce, Google Tag Manager, Heartbeat, and paid channels. Optuna handled hyperparameter tuning; the model reached stable convergence with measurable attribution uplift for top-performing segments.\n\nThe POC was delivered and validated with Marketing leadership in Q3 2025. Full production rollout is the next phase. There are no outcome metrics at scale yet — that's an honest assessment of where this stands.",
    technicalDepth: {
      stack: "Python · Azure OpenAI · SFDC · GA4 · Google Tag Manager · Heartbeat",
      architecture:
        "K-means (RFM+ features) across ~63K customers. Q-Learning RL agent with Optuna hyperparameter tuning for dynamic attribution. Data ingested from GA4, SFDC, GTM, Heartbeat, and paid channels across 130+ countries.",
      engineeringChallenge:
        "Achieving stable Q-Learning convergence across a customer state space of Maersk's scale and data sparsity — and validating that Optuna-tuned hyperparameters generalised across geographically and behaviourally distinct segments.",
    },
    theNumbers: [
      { value: "9", label: "Customer segments defined" },
      { value: "63,000+", label: "Active customers segmented" },
      { value: "100,000+", label: "Total customer base covered" },
      { value: "130+", label: "Countries in scope" },
    ],
    whatILearned:
      "ML projects in large organisations fail at the handoff between data science and decision-making — not at the model. Our biggest challenge was translating 9 mathematically-derived clusters into something a marketing leadership team would actually change their budget allocation for. I'd define the 'so what' for each segment before the model runs, not after. When stakeholders have already agreed on what a useful segment looks like, showing them the model found it is a short conversation. Explaining what the model found and then convincing them it matters is a much longer one.",
    metrics: [
      { value: 9, suffix: "", label: "Customer segments" },
      { value: 63000, suffix: "+", label: "Customers segmented" },
    ],
  },
  {
    id: "cost-to-serve",
    title: "Cost-to-Serve (ABC) Model",
    tagline: "Activity-based costing across 50+ processes to unlock ~300 FTE capacity",
    thumbnail: "/images/projects/cost-to-serve.jpg",
    tags: ["Azure Databricks", "Power BI", "Activity-Based Costing", "SG&A"],
    filters: ["product-led", "data-engineering"],
    accentColor: "#059669",
    problem:
      "Every large organisation thinks it knows where its costs are. Most are wrong. Costs get allocated by convention, by history, by whoever spoke up in the last budget cycle. The actual cost of a specific activity — processing an amendment, handling a claim, managing a rebooking — is almost never measured directly.\n\nMaersk's Cost-to-Serve initiative was built on a different premise: follow the work, not the org chart. My team was asked to build the data product that would make activity-based costing possible at commercial scale — across 50+ processes and 130 countries.",
    whatWeBuilt:
      "A Power BI-backed activity-based costing model covering 50+ operational processes. The model maps headcount and system activity to specific process steps, surfaces the top 15 most cost-intensive processes, and gives operational leaders a view they'd never had: what does it actually cost us to serve this customer, handle this transaction, or run this process?\n\nThe supporting infrastructure — 'Costra,' a custom web application — was a product in its own right. It collects and validates process-level time allocation data from teams across 130 countries. Getting reliable self-reported time data from operationally busy global teams required careful UX design, validation logic, and change management built into the rollout, not added after.",
    technicalDepth: {
      stack: "Azure Databricks · Power BI · Activity-Based Costing · Costra (custom web app)",
      architecture:
        "Costra collects and validates process-level time allocation data globally, feeding into a Databricks compute layer that handles ABC calculations at process-activity granularity. Outputs surface in Power BI for operational review.",
      engineeringChallenge:
        "Designing validation logic for Costra that produced reliable self-reported time data from operationally busy teams across 130 countries — without a data quality team available to clean it downstream.",
    },
    theNumbers: [
      { value: "50+", label: "Operational processes mapped" },
      { value: "300 FTE", label: "Capacity identified for reallocation or automation" },
      { value: "600 FTE", label: "Ocean CX offshoring potential identified" },
      { value: "130", label: "Countries in scope" },
    ],
    whatILearned:
      "The resistance wasn't to the technology — it was to the transparency. Seeing your process mapped and costed for the first time is uncomfortable, especially when it challenges assumptions that have justified headcount for years. Managing that conversation — being honest about what the model shows while helping leaders see it as an opportunity rather than an indictment — was as much of the product as anything we built. Data products that challenge the status quo need a change management plan from day one, not added at go-live.",
    metrics: [
      { value: 300, suffix: " FTE", label: "Capacity unlocked" },
      { value: 50, suffix: "+", label: "Processes analysed" },
    ],
  },
  {
    id: "ai-bi-chatbot",
    title: "AI-Powered BI Chatbot",
    tagline: "Enterprise Copilot chatbot expanding governed BI from 7K to 10K+ users",
    thumbnail: "/images/projects/ai-chatbot.jpg",
    tags: ["Microsoft Copilot", "Azure OpenAI", "Azure Foundry", "RBAC"],
    filters: ["product-led", "data-engineering", "ai-ml"],
    accentColor: "#db2777",
    problem:
      "Maersk had invested heavily in its Power BI analytics estate. The problem wasn't the data or the dashboards — it was access. A governed, role-based access model designed for security was creating enough friction that a significant portion of the potential user base never engaged with the platform at all. They asked a colleague instead. They used Excel. They made decisions without the data that existed.\n\nThe opportunity was to use AI to close that gap: a natural-language interface to governed data, so that 'what's my Q3 GP performance in Southeast Asia?' could be answered without a ticket, a waiting list, or an export.",
    whatWeBuilt:
      "Maersk's first enterprise AI-powered BI chatbot, built on Microsoft Copilot and Azure Foundry. The chatbot connects to the Power BI semantic layer and uses automated Workday-driven RBAC — access provisioned and updated directly from HR system data, not manual requests. Users ask questions in plain language; the system retrieves governed, role-appropriate data and returns it conversationally.\n\nThe hard engineering problem was RBAC at enterprise scale. With 10,000+ users across multiple regions and business units, manual access management was a bottleneck that no AI interface could fix on its own. Automating it through Workday integration required aligning across HR, IT, and the business — three organisations with different priorities and timelines. Getting that alignment was slower than building the chatbot.",
    technicalDepth: {
      stack: "Microsoft Copilot · Azure Foundry · Azure OpenAI · Power BI Semantic Layer",
      architecture:
        "Natural language interface connected to Power BI semantic layer via Azure Foundry. Automated Workday-driven RBAC eliminates manual access management for 10,000+ users — access provisioned and updated directly from HR system data.",
      engineeringChallenge:
        "Integrating Workday, Azure AD, and Power BI into an automated provisioning pipeline that aligned with HR, IT, and business governance requirements simultaneously.",
    },
    theNumbers: [
      { value: "7,000 → 10,000+", label: "BI platform users (43% growth since launch)" },
      { value: "Automated", label: "RBAC provisioning for 10,000+ users via Workday integration" },
      { value: "First", label: "Enterprise AI-powered BI chatbot at Maersk" },
    ],
    whatILearned:
      "Conversational interfaces create expectations that dashboards don't. Users ask questions the system can't yet answer — and every unanswered question registers as a product failure, not a user limitation. The backlog generated by chatbot usage has become one of the most honest sources of product discovery we have. If you want to know what the business actually needs from its data, give them something that lets them ask for it directly. You'll learn more in a month than a year of stakeholder interviews.",
    metrics: [
      { value: 43, suffix: "%", label: "User adoption increase" },
      { value: 10000, suffix: "+", label: "Active BI users" },
    ],
  },
  {
    id: "pipeline-bridge",
    title: "Pipeline Bridge",
    tagline: "Forecast accuracy from 80% to 87% across Maersk's $12B LnS portfolio",
    thumbnail: "/images/projects/pipeline-bridge.jpg",
    tags: ["Power BI", "Azure Data Lake", "Dremio", "Forecasting"],
    filters: ["product-led", "data-engineering"],
    accentColor: "#0891b2",
    problem:
      "Revenue forecasting in global logistics is genuinely hard. Deals shift, fall out, or accelerate based on variables no model predicts perfectly. But the gap between a good forecast and a bad one is visible every week in front of commercial leadership — and across Maersk's $12B Logistics and Services pipeline, the pressure to close that gap is constant.\n\nThe existing reporting couldn't explain why the forecast moved. It showed where the number landed, not what changed and why. That made it hard to trust, harder to act on, and impossible to use for accountability conversations.",
    whatWeBuilt:
      "A Power BI product covering 370+ active users across 13 products and 7 regions. The core capability is forecast-to-actuals bridging: showing not just what the pipeline looks like today, but where it moved versus the prior forecast — tracked by region, product, and sales stage. It makes the variance visible and explainable, which is what turns a number into a conversation.\n\nThe architecture uses Dremio as the query engine over Azure Data Lake. This wasn't the original plan — it was a decision made after performance testing showed the initial semantic layer couldn't handle weekly leadership review volumes at acceptable speed. Dremio reduced infrastructure costs 5% and cut month-end close processing from 12 to 9 days.",
    technicalDepth: {
      stack: "Power BI · Azure Data Lake · Dremio · Forecasting models",
      architecture:
        "Dremio query engine over Azure Data Lake, chosen after performance testing on the initial semantic layer at LnS pipeline volume. Forecast-to-actuals bridging logic tracks variance by region, product, and sales stage across 13 products.",
      engineeringChallenge:
        "Building a semantic layer handling the volume and complexity of a $12B pipeline while staying fast enough for live weekly leadership reviews — a performance constraint that drove the Dremio architecture decision.",
    },
    theNumbers: [
      { value: "80% → 87%", label: "Forecast accuracy improvement" },
      { value: "-12%", label: "Revenue/GP variance vs Rolling Forecast across 13 products" },
      { value: "370+", label: "Active users" },
      { value: "$12B", label: "LnS portfolio in scope" },
      { value: "-3 days", label: "Month-end close window (12 → 9 days)" },
    ],
    whatILearned:
      "Forecast products are high-stakes in a way most analytics products aren't. Users aren't just consuming data — they're being held accountable to it in front of leadership every week. That accountability changes what 'good enough' means: the product needs to be not just accurate but explainable. A number a commercial VP can't trace back to source is a number they won't defend in a room. On high-stakes products, explainability isn't a feature. It's the whole product.",
    metrics: [
      { value: 87, suffix: "%", label: "Forecast accuracy" },
      { value: 12, suffix: "%", label: "Revenue/GP variance reduction" },
    ],
  },
];
