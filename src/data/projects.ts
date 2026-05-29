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
  problem: string;
  approach: string;
  impact: string;
  metrics: Metric[];
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "fmt-vessel-dashboard",
    title: "FMT Vessel Dashboard",
    tagline: "Fleet intelligence for 350+ captains across 11,000+ crew",
    thumbnail: "/images/projects/fmt-vessel.jpg",
    tags: ["Power BI", "SQL", "Azure", "Fleet Analytics"],
    problem:
      "Maersk's vessel operations had no unified visibility layer for captains and fleet managers. Maintenance schedules, breakdown risk, and crew planning were managed in siloed spreadsheets — reactive rather than predictive. High-risk breakdowns were impacting schedule reliability and costing significant man-hours in manual tracking.",
    approach:
      "Redesigned the FMT Vessel Dashboard in Power BI, consolidating vessel performance, maintenance schedules, and reliability indicators into a single governed platform. Built for 350+ captains and 11,000+ crew across the fleet, with role-based access, automated refresh, and predictive maintenance signals built from historical breakdown patterns.",
    impact:
      "The dashboard became the operational heartbeat of fleet management — captains could now anticipate problems before they became incidents. Schedule reliability improved, unplanned breakdowns fell sharply, and the manual reporting effort that had consumed 1.5 FTE per month was eliminated.",
    metrics: [
      { value: 17, suffix: "%", label: "Schedule reliability improvement" },
      { value: 29, suffix: "%", label: "High-risk breakdowns reduced" },
      { value: 56, suffix: " hrs/mo", label: "Man-hours saved (1.5 FTE)" },
      { value: 350, suffix: "+", label: "Captains on the platform" },
    ],
    accentColor: "#1e40af",
  },
  {
    id: "marketing-aiml",
    title: "Marketing AI/ML Platform",
    tagline: "Customer segmentation and dynamic attribution across 130+ countries",
    thumbnail: "/images/projects/marketing-aiml.jpg",
    tags: ["Machine Learning", "Azure OpenAI", "Python", "SFDC", "GA4"],
    problem:
      "Maersk's marketing teams were operating on static, last-touch attribution models and intuition-based customer segmentation. With 100,000+ customers across 130+ countries and paid channels spanning Facebook, LinkedIn, Meta, and programmatic, they had no reliable mechanism to understand which customers to prioritize, when, or through which channel.",
    approach:
      "Led the product end-to-end — bridging Marketing leadership, data scientists, engineers, and product owners. Delivered two integrated components: (1) K-means clustering with RFM+ features (Recency, Frequency, Monetary, Rank, Regularity, Seasonality) using the Elbow method, producing 9 actionable customer segments across ~63,000 customers. (2) A Q-Learning reinforcement learning agent (Optuna-tuned) replacing static attribution with a dynamic model that learns the optimal campaign action per customer state — pulling from GA4, SFDC, Google Tag Manager, Heartbeat, and paid channels.",
    impact:
      "Delivered a proven POC to Marketing leadership, establishing a rigorous, data-driven foundation for campaign personalization and budget allocation by segment effectiveness. The 9 segments — from Elite Champions to At-Risk Drop-offs — gave the marketing team a shared language and a next-best-action framework across their full customer base.",
    metrics: [
      { value: 9, suffix: "", label: "Customer segments defined" },
      { value: 63000, suffix: "+", label: "Customers segmented" },
      { value: 130, suffix: "+", label: "Countries covered" },
      { value: 100000, suffix: "+", label: "Total customer base" },
    ],
    accentColor: "#7c3aed",
  },
  {
    id: "cost-to-serve",
    title: "Cost-to-Serve (ABC) Model",
    tagline: "Activity-based costing across 50+ processes to unlock ~300 FTE capacity",
    thumbnail: "/images/projects/cost-to-serve.jpg",
    tags: ["Azure Databricks", "Power BI", "Activity-Based Costing", "SG&A"],
    problem:
      "Maersk's commercial and finance leadership lacked granular visibility into what it actually cost to serve customers — by activity, by region, by product line. Without this, margin governance was intuition-based, SG&A decisions were blunt instruments, and capacity planning had no data foundation to stand on.",
    approach:
      "Built an enterprise Cost-to-Serve model using Activity-Based Costing methodology across 50+ operational processes, spanning 130 countries. Identified the top 15 most cost-heavy processes and built Costra — a web application that made activity-based cost data accessible to commercial and finance stakeholders without requiring data team involvement for every query.",
    impact:
      "Released ~300 FTE of capacity by identifying and eliminating redundant or inefficient process layers. Gave pricing and margin teams a defensible, activity-level cost basis for negotiation and commercial decisions. Strengthened SG&A governance across the global commercial organization.",
    metrics: [
      { value: 300, suffix: " FTE", label: "Capacity unlocked" },
      { value: 50, suffix: "+", label: "Operational processes analyzed" },
      { value: 15, suffix: "", label: "Top cost-heavy processes identified" },
      { value: 130, suffix: "", label: "Countries in scope" },
    ],
    accentColor: "#059669",
  },
  {
    id: "customer-profitability-engine",
    title: "Customer Profitability Engine",
    tagline: "$59M incremental revenue through data-driven pricing and cross-sell",
    thumbnail: "/images/projects/customer-profitability.jpg",
    tags: ["Power BI", "Azure Data Lake", "DAX", "Pricing Analytics"],
    problem:
      "Maersk's commercial teams had no product-, region-, or shipment-level view of customer profitability. Accounts with sub-5% gross profit were being served at the same priority as highly profitable ones, and cross-sell opportunities were being missed because there was no signal to act on.",
    approach:
      "Built the Customer Profitability Engine — a product/region/shipment-level profitability analytics platform that surfaced sub-5% GP accounts for pricing renegotiation and highlighted high-value customers for targeted cross-sell actions. Integrated directly into the commercial review cadence so account managers and Sales leadership could act on signals in real time.",
    impact:
      "Generated ~$59M in incremental revenue in Q3 2025 through a combination of pricing renegotiation with low-GP accounts and targeted cross-sell actions with high-value segments. Transformed how the commercial organization thought about margin — from reporting-after-the-fact to proactive intervention.",
    metrics: [
      { value: 59, suffix: "M", prefix: "$", label: "Incremental revenue generated" },
      { value: 5, suffix: "%", label: "GP threshold for renegotiation trigger" },
    ],
    accentColor: "#d97706",
  },
  {
    id: "ai-bi-chatbot",
    title: "AI-Powered BI Chatbot",
    tagline: "Enterprise Copilot chatbot expanding governed BI from 7K to 10K+ users",
    thumbnail: "/images/projects/ai-chatbot.jpg",
    tags: ["Microsoft Copilot", "Azure OpenAI", "Azure Foundry", "RBAC"],
    problem:
      "Governed access to BI reports across Maersk's commercial organization was fragmented and manual — thousands of users needed access to certified reports but the process to grant, manage, and audit access was slow, error-prone, and relied on manual workflows disconnected from the HR system.",
    approach:
      "Led the product design and delivery of Maersk's first enterprise-wide AI-powered BI Chatbot built on Microsoft Copilot and Azure Foundry (Azure OpenAI). The chatbot automated Workday-driven role-based access governance, providing grounded retrieval over certified reports and eliminating data-access ambiguity for end users. Integrated RBAC automation directly into the Workday lifecycle — access granted, modified, and revoked in sync with employment status.",
    impact:
      "Expanded secure BI adoption from 7,000 to 10,000+ users — a 43% increase — while reducing access-related escalations and making certified reports accessible through a conversational interface rather than a ticketing queue.",
    metrics: [
      { value: 43, suffix: "%", label: "User adoption increase" },
      { value: 10000, suffix: "+", label: "Active BI users" },
      { value: 7000, suffix: "", label: "Users before launch" },
      { value: 50, suffix: "+", label: "Reports governed" },
    ],
    accentColor: "#db2777",
  },
  {
    id: "pipeline-bridge",
    title: "Pipeline Bridge",
    tagline: "Forecast accuracy from 80% to 87% across Maersk's $12B LnS portfolio",
    thumbnail: "/images/projects/pipeline-bridge.jpg",
    tags: ["Power BI", "Azure Data Lake", "Forecasting", "L&S"],
    problem:
      "Maersk's Logistics & Services ($12B) commercial pipeline, budgets, and realized revenue existed in disconnected systems across 7 global regions and 13 products. Forecast accuracy was at 80% and Revenue/GP variance against RoFo (Rolling Forecast) was creating accountability gaps in the commercial review cycle.",
    approach:
      "Built the Pipeline Bridge — a unified $12B LnS forecasting framework linking pipeline, budgets, and realized revenue across all L&S products and 7 regions. Deployed to 370+ users in the commercial and finance organization, with a structured cadence built into the commercial steering forum for weekly accountability reviews.",
    impact:
      "Forecast accuracy improved from 80% to 87% (+7 percentage points) and Revenue/GP variance against RoFo reduced by 12% across 13 products — giving commercial leadership a reliable, single-source view of pipeline health they could act on with confidence.",
    metrics: [
      { value: 87, suffix: "%", label: "Forecast accuracy (up from 80%)" },
      { value: 12, suffix: "%", label: "Revenue/GP variance reduction" },
      { value: 370, suffix: "+", label: "Users on the platform" },
      { value: 13, suffix: "", label: "Products covered" },
    ],
    accentColor: "#0891b2",
  },
];
