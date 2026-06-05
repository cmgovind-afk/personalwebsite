export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export interface ImpactStat {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: "maersk-sm",
    company: "A.P. Moller – Maersk",
    role: "Senior Manager BI Product – Commercial",
    period: "Feb 2024 – Present",
    location: "Copenhagen, Denmark",
    highlights: [
      "Lead a portfolio of 16 Commercial BI products with 5 Product Owners (direct) and 12 data engineers (dotted line) across Copenhagen and Dubai.",
      "Delivered 95%+ on-time roadmap across 40 stories/sprint, reducing post-release escalations 70% and improving stakeholder CSAT ~7%.",
      "Launched Maersk's first enterprise AI-powered BI Chatbot (Microsoft Copilot + Azure Foundry), expanding governed BI adoption from 7,000 to 10,000+ users.",
      "Built the Customer Profitability Engine generating ~$59M incremental revenue and the Cost-to-Serve ABC model identifying ~300 FTE capacity for reallocation.",
      "Led the Commercial BI team to formal recognition as Preferred Analytics Partner by the Chief Commercial Officer and Commercial ELT.",
    ],
    tags: ["Power BI", "Azure", "Agile", "Product Strategy", "People Leadership"],
  },
  {
    id: "maersk-stp",
    company: "A.P. Moller – Maersk",
    role: "Senior Transformation Partner",
    period: "Nov 2022 – Jan 2024",
    location: "Copenhagen, Denmark",
    highlights: [
      "Standardized 30+ KPIs and master data definitions across global regions, improving SLA compliance 30% and reducing process variance 70%.",
      "Migrated eVMS and Coaching Tracker from Excel to Power Apps; achieved 87% adoption among 176 Global Process Leads and improved eVMS CSAT 50%.",
      "Led HR Analytics transformation from -56 NPS baseline using driver analysis and segmentation to redesign SLA governance.",
      "Delivered Lean coaching across 450+ professionals in 15+ cohorts; 100% adoption, 5.0 CSAT.",
    ],
    tags: ["Process Governance", "Power Apps", "Lean", "HR Analytics", "KPI Standardization"],
  },
  {
    id: "maersk-mgr",
    company: "A.P. Moller – Maersk",
    role: "Manager BI, Analytics & Reporting",
    period: "Aug 2020 – Oct 2022",
    location: "Pune, India",
    highlights: [
      "Led 7 BI Business Analysts across India and the Philippines; migrated 250+ legacy reports to Azure Data Lake within 12 months with 0% attrition.",
      "Replaced manual Excel distribution with self-service Power BI and automated refresh, reducing manual effort 50%.",
      "Trained 25 BI professionals in Statistics and Agile; drove 100% Power BI adoption and enabled 12 enterprise POCs with ARIMA time-series models.",
    ],
    tags: ["Power BI", "Azure Data Lake", "Team Leadership", "Analytics Training"],
  },
  {
    id: "maersk-sba",
    company: "A.P. Moller – Maersk",
    role: "Senior BI Business Analyst",
    period: "Jun 2019 – Jul 2020",
    location: "Pune, India",
    highlights: [
      "Redesigned the FMT Vessel Dashboard for 350+ captains (11,000+ crew): schedule reliability +17%, high-risk breakdowns -29%, 56 man-hours/month saved.",
      "Built Pitstop and Bunker Optimization dashboards (Power BI POC) reducing unplanned maintenance 30% across SEA and China within 6 months.",
    ],
    tags: ["Power BI", "Fleet Analytics", "SQL", "POC Development"],
  },
  {
    id: "allscripts",
    company: "Allscripts Healthcare LLP",
    role: "Senior Operations Consultant",
    period: "Sep 2014 – Jun 2019",
    location: "Pune, India",
    highlights: [
      "Drove the TouchWorks EHR analytics roadmap, replacing SSIS/Excel with Power BI and improving customer CSAT 27%.",
      "Led a Lean Six Sigma Black Belt transport initiative delivering USD 100K savings in 3 months and improving on-time ride performance 43%.",
    ],
    tags: ["Power BI", "Lean Six Sigma", "Healthcare IT", "EHR Analytics"],
  },
  {
    id: "techmahindra",
    company: "Tech Mahindra (Client: British Telecom)",
    role: "Business Analyst",
    period: "May 2010 – Sep 2014",
    location: "Noida, India & Ipswich, England",
    highlights: [
      "Delivered revenue assurance analytics and RFT/CT process improvement for British Telecom using SQL and Excel-based analysis.",
      "Conducted time-motion studies on-site at BT UK headquarters in Ipswich, supporting process improvement programs across BT's UK operations.",
    ],
    tags: ["SQL", "Excel", "Revenue Assurance", "Process Improvement"],
  },
];

export const impactStats: ImpactStat[] = [
  { value: 59, suffix: "M", prefix: "$", label: "Incremental revenue generated" },
  { value: 10000, suffix: "+", label: "BI platform users" },
  { value: 95, suffix: "%", label: "On-time roadmap delivery" },
  { value: 16, suffix: "", label: "Commercial BI products" },
  { value: 300, suffix: " FTE", label: "Capacity unlocked" },
  { value: 16, suffix: "+ yrs", label: "Career experience" },
];
