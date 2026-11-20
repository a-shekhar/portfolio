import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import credentials from './data/certifications';

const roles = [
  { company: 'T-Mobile', role: 'Senior Software Engineer', dates: 'Jan 2026 - Present', location: 'Hyderabad', context: 'Engineering Experience (EX) / Internal developer platform', points: [
    'Own DocHub end to end: data model, authenticated authoring, review, publishing, archival, GitLab synchronization, and lifecycle jobs.',
    'Help drive EX Chat and built its RAG pipeline and the knowledge pipeline behind the EX MCP server, using chunking, embeddings, and hybrid BM25 + kNN search on OpenSearch.',
    'Cut homepage load from 20+ seconds to 2-3 seconds. Reduced p99 Largest Contentful Paint when opening DocHub documents from 52 to 4 seconds, with about 50% improvement at p75 and p50, measured with Splunk RUM.',
    'Standardized backend services on Java 25 and Spring Boot 4, and raised frontend and backend unit-test coverage to 85%+.',
    'Closed 200+ EX issues, ran weekly releases, and worked directly with engineers to identify needs and ship improvements.'
  ], stack: ['Java 25', 'Spring Boot 4', 'React', 'OpenSearch', 'MCP', 'Kubernetes'] },
  { company: 'Sigmoid', role: 'Software Engineer (SDE2)', dates: 'Jun 2022 - Jan 2026', location: 'Remote / Bengaluru', context: 'Conagra Brands / Enterprise data engineering', points: [
    'Designed a YAML-configured Databricks ingestion framework with SCD Type 1/2 support; onboarded approximately 200 tables at launch.',
    'Added configurable PII removal, masking, and AES encryption with group-based decryption for consuming teams.',
    'Integrated SAP R/3 and S/4 through merge and reconciliation flows and developed curated data products for data scientists.',
    'Introduced SQLFluff and Azure DevOps pipelines across development, QA, and production.',
    'Led a 4-6 engineer squad, mentored junior engineers, and coordinated with business and partner teams.'
  ], stack: ['Python', 'PySpark', 'Databricks', 'Delta Lake', 'Azure', 'SQL'] },
  { company: 'Accenture', role: 'Senior Software Engineer', dates: 'Jul 2018 - Jun 2022', location: 'Bengaluru', context: 'PSCU / Pricing and billing for financial institutions', points: [
    'Delivered billing ingestion handling 3M+ records across approximately 1,200 credit unions and financial institutions.',
    'Introduced quantity-based pricing tiers, tiered discounts, and automated rate changes across approximately 1,000 element codes.',
    'Reworked a 5-6 hour batch into a checkpoint-based process, reducing recovery for failed clients to approximately 30 minutes.',
    'Optimized Hibernate queries with native SQL, upgraded Java and PrimeFaces, and expanded unit testing to catch regressions.'
  ], stack: ['Java', 'EJB', 'Hibernate', 'PrimeFaces', 'Oracle SQL', 'Maven'] }
];
const names = ['Azure Fundamentals', 'Azure AI Fundamentals', 'Azure Data Fundamentals', 'Security, Compliance & Identity Fundamentals', 'Azure Data Engineer Associate', 'SnowPro Core Certification', 'Databricks Certified Data Engineer Associate'];
const validity = { 'Azure Data Engineer Associate': 'Recorded validity ended Dec 2025', 'SnowPro Core Certification': 'Recorded validity ended Aug 2026', 'Databricks Certified Data Engineer Associate': 'Recorded validity through Dec 2026' };

export function ImpactStrip() {
  return <div className="wrap impact-strip" aria-label="Selected career outcomes">{[['8+', 'years of engineering experience'], ['10,000+', 'users on the EX platform'], ['92%', 'lower DocHub document latency'], ['~200', 'tables onboarded at framework launch']].map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>;
}
export function AdditionalWork() {
 return <div className="additional-work"><article><span className="section-kicker">PERFORMANCE / T-MOBILE</span><h3>From timeouts to a 2-3 second homepage.</h3><p>Used micro-frontends, parallel API calls, deferred scripts, and caching to improve the EX homepage from over 20 seconds. Self-hosted shared frontend dependencies and added retries to improve reliability.</p><div className="tags"><span>React</span><span>Module Federation</span><span>Splunk RUM</span></div></article><article><span className="section-kicker">BILLING / ACCENTURE</span><h3>Recover failed work without restarting everything.</h3><p>Changed a 5-6 hour billing batch to commit successful clients and isolate failed ones. Targeted recovery brought reruns down to approximately 30 minutes.</p><div className="tags"><span>Java</span><span>Oracle SQL</span><span>Batch processing</span></div></article></div>;
}
export function CareerExperience() {
 return <section id="experience" className="section wrap experience-section"><div className="section-heading"><div><div className="section-kicker">03 / EXPERIENCE & OWNERSHIP</div><h2>Engineering beyond the code<span className="accent">.</span></h2></div><p>From finding the problem to designing the system, leading delivery, and keeping it running.</p></div><div className="experience-list">{roles.map((r, i) => <article key={r.company}><div className="experience-date">{r.dates.toUpperCase()}</div><div><h3>{r.role}</h3><h4>{r.company}<span> / {r.location}</span></h4><p className="role-context">{r.context}</p><ul className="achievement-list">{r.points.map(point => <li key={point}>{point}</li>)}</ul><div className="tags">{r.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="experience-index">0{i+1}</div></article>)}</div><div className="recognition"><span>EDUCATION</span><p>B.E., Information Science & Engineering / The National Institute of Engineering, Mysore / 2018</p></div><div className="recognition"><span>RECOGNITION</span><p>Kudos Award, T-Mobile (Q3 2026) / SPOT Awards, Sigmoid (2023, 2024) / Client Value Creation, Pinnacle & SPARK Awards, Accenture</p></div></section>;
}
export function Certifications() {
 return <section id="certifications" className="credentials-section"><div className="wrap"><div className="section-heading"><div><div className="section-kicker">04 / CERTIFICATIONS</div><h2>Learning with depth<span className="accent">.</span></h2></div><p>Cloud and data credentials earned along the way. Recorded validity is shown where available; open the issuer record to check current status.</p></div><div className="credential-grid">{credentials.filter(c => names.includes(c.name)).sort((a,b) => Number(!validity[a.name])-Number(!validity[b.name])).map(c => <a key={c.name} href={c.link} target="_blank" rel="noreferrer" className="credential-card"><div className="credential-top"><Award size={23}/><span>{c.issuer}</span><ArrowUpRight size={18}/></div><h3>{c.name}</h3><p>{validity[c.name] || 'Foundational certification'}</p><span className="credential-action">View credential <CheckCircle2 size={14}/></span></a>)}</div></div></section>;
}
