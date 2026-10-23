export const profile = {
  name: "Isha Jha",
  headline: "Data Analyst · analytics and automation",
  role: "Data Analyst",
  company: "WNS Global Services",
  education: "B.Tech in Computer Science and Engineering, Chaudhary Charan Singh University · 2020–2024 · CGPA 8.3",
  introduction: "I like finding where a number came from, checking that it holds up, and explaining what it means.",
  direction: "I’m growing toward analytics and automation work that turns repeatable questions into useful, dependable tools.",
  interests: ["SQL & Python", "Reporting automation", "Data quality", "Useful data products"],
  email: "ij167559@gmail.com", linkedin: "https://www.linkedin.com/in/ishajha07", github: "https://github.com/ishaj001", resume: "./Isha_DataAnalyst_2yrs.pdf",
};

export const skills = [
  { group: "Core analytics", items: ["SQL", "Python", "Excel", "Data analysis", "Data validation", "Reconciliation", "Issue investigation", "UAT"] },
  { group: "Reporting & BI", items: ["Reporting automation", "Power BI", "Tableau", "R Shiny", "Data visualization"] },
  { group: "Additional languages & methods", items: ["R", "Pandas", "NumPy", "ETL", "Data profiling", "Root cause analysis"] },
  { group: "Used in portfolio projects", items: ["Streamlit", "Plotly", "SQLite", "openpyxl"] },
];

export const projects = [
  {
    slug: "reporting-pipeline", number: "01", name: "Automated Reporting Pipeline", short: "Messy CSVs in. A checked, explainable report out.", category: "Reporting · Quality", accent: "mint", glyph: "flow",
    summary: "A Python pipeline and Streamlit interface that combine transaction CSVs, validate row-level business rules, and create analyst-ready summaries. It keeps accepted records and rejected records visible, so a clean total never hides what failed along the way.",
    problem: "Branch sales files often need the same repetitive checks before anyone can use them. This project makes those checks and downstream reporting repeatable, with explicit reasons attached to rejected rows.",
    how: "CSV headers are normalized and each file is checked against a required schema. Rows are checked for identity fields, parseable dates, positive quantities and prices, valid discounts, and duplicate transaction IDs. Revenue is recomputed from the validated components. The CLI and Streamlit app share the validation, KPI, and workbook functions.",
    features: ["Multi-file CSV ingestion with file-level schema checks", "Row-level accepted / rejected partition with reason codes", "Revenue, transaction, AOV, units, monthly, regional, and product summaries", "Seven-sheet formatted Excel workbook, plus clean and rejected CSV downloads in the app", "Streamlit demo data or in-memory CSV upload workflow"],
    tools: ["Python", "pandas", "Streamlit", "Plotly", "openpyxl"],
    outputs: "An executive summary workbook with monthly, regional, and product views, cleaned transactions, rejected records, and reconciliation checks. The web app also offers an interactive dashboard and downloads.",
    limitations: "Assumes one transaction per row, a single currency, and discounts represented as fractions. It does not infer currency, tax, shipping, or branch identity. Excel detail sheets are intended for review-sized output. The Streamlit app is a portfolio demonstration, not a place for sensitive production data.",
    future: "Configurable business rules, a run manifest, incremental ingestion, and larger-than-Excel reporting are possible next steps; they are not implemented.",
    repository: "https://github.com/ishaj001/automated-reporting-pipeline", deployment: "https://sale-insight-studio.streamlit.app/", liveLabel: "Sale Insight Studio",
  },
  {
    slug: "reconiq", number: "02", name: "ReconIQ | Financial Controls", short: "Two ledgers, compared with every exception accounted for.", category: "Controls · Investigation", accent: "peach", glyph: "ledger",
    summary: "A local reconciliation workspace that compares two transaction ledgers, surfaces differences, and preserves run and investigation history. Candidate suggestions help an analyst investigate one-sided records but never silently turn a suggestion into a match.",
    problem: "Comparing ledgers requires more than finding equal totals: missing keys, duplicate records, field mismatches, and invalid rows all need to remain explainable and reviewable.",
    how: "The engine validates both ledgers, uses transaction ID as its business key, and compares unique pairs across amounts, dates, currency, transaction type, and status. Amount and date tolerances are explicit. Duplicate keys are marked ambiguous and excluded from ordinary pair comparisons. SQLite stores source rows, run outputs, exceptions, and append-only events.",
    features: ["Missing-record detection and amount, date, currency, type, and status mismatches", "Duplicate-key handling that avoids ambiguous many-to-many comparisons", "Per-currency source and matched control totals", "Candidate suggestions for one-sided records, with human justification required for decisions", "Exception status history, run comparison, CSV exports, and formatted Excel reports"],
    tools: ["Python", "pandas", "SQLite", "SQL", "Streamlit", "Plotly", "openpyxl"],
    outputs: "A reconciliation outcome register, issue register, source and outcome controls by currency, investigation history, and downloadable CSV / Excel reports.",
    limitations: "This is a local, single-user portfolio demonstration using synthetic data, not a certified accounting or production payment control. It has no fuzzy matching, currency conversion, authentication, or multi-user audit controls. Candidate thresholds are fixed defaults and need human review.",
    future: "Configurable candidate policies, broader migration support, large-file streaming, and multi-user identity controls are potential extensions; they are not part of the current app.",
    repository: "https://github.com/ishaj001/financial-reconciliation-engine", deployment: "https://reconiq.streamlit.app/", liveLabel: "ReconIQ",
  },
  {
    slug: "customer-intelligence", number: "03", name: "Customer Retention & Revenue Intelligence", short: "A closer look at repeat buying, cohorts, and customer value.", category: "SQL · Customer analytics", accent: "lavender", glyph: "cohort",
    summary: "A local business intelligence workspace for exploring synthetic e-commerce revenue, purchase patterns, customer cohorts, inactivity signals, and historical customer value. SQL-backed metrics and shared filters connect the overview to deeper customer analysis.",
    problem: "Revenue totals alone do not explain who is coming back, when cohorts return, or where historical customer value is concentrated. This project organizes those questions into an interactive analytical workspace.",
    how: "Python initializes a deterministic synthetic dataset in SQLite. Parameterized SQL performs filtered revenue, order, customer, repeat-purchase, period, and cohort calculations; Pandas reshapes results for visualizations and exports. The Streamlit interface provides shared date and dimension filters across its analytical sections.",
    features: ["Revenue trends, mix, period comparisons, and order-value distribution", "Repeat purchase rate within the selected window and a configurable inactivity proxy", "First-purchase-month cohort retention table, leaving unobserved future cells blank", "Historical observed value, customer distributions, segment/channel comparisons, and concentration", "Customer search and history, CSV downloads, and context-aware Excel / CSV exports"],
    tools: ["Python", "SQLite", "SQL", "pandas", "Streamlit", "Plotly", "Excel"],
    outputs: "An eight-section workspace spanning executive overview, revenue analytics, retention, cohorts, customer lifetime value, customer explorer, definitions, and exports.",
    limitations: "All data is synthetic. Historical customer value is observed net revenue to date, not a prediction. Inactivity is only a configurable proxy for churn, and simulated patterns support no causal conclusions. No external APIs or predictive CLV model are used.",
    future: "The current app is descriptive. Predictive models or real-data integrations would require separate validation, privacy, and product decisions.",
    repository: "https://github.com/ishaj001/customer-retention-revenue-intelligence", deployment: "https://northstar-retention-analysis.streamlit.app/", liveLabel: "Northstar Retention Analysis",
  },
];

export const journey = [
  { state: "2020-2024", title: "B.Tech in Computer Science & Engineering", detail: "Chaudhary Charan Singh University, CGPA 8.3.", note: "Education" },
  { state: "Oct-Dec 2024", title: "Data Science Trainee at Easyrewardz", detail: "Built Python workflows for data extraction, cleaning, transformation, API processing, validation, and analytical reporting. Performed exploratory analysis and reconciliation to identify inconsistent or anomalous records in structured datasets.", note: "Earlier experience" },
  { state: "Jan 2025-Present", title: "Data Analyst at WNS Global Services", detail: "Automates recurring data extraction, transformation, validation, and reporting workflows. Works with large insurance-related datasets on profiling, quality checks, reconciliation, standardization, discrepancy investigation, and SQL analysis. Collaborates with business and technical teams on requirements, UAT, defect investigation, testing, and iterative delivery; works directly with clients and has received positive feedback.", note: "Current role" },
  { state: "Recognition", title: "WOW Award & Best Performer recognition", detail: "Received a WOW Award at WNS. Separately recognized by a manager as a Best Performer; that wording describes the recognition and is not presented as an official award title.", note: "Achievements" },
  { state: "Next", title: "Analytics with a product instinct", detail: "Continue building technical depth and practical tools that help people move from questions to dependable answers.", note: "Career direction" },
];
