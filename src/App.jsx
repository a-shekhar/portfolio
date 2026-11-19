import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Github, Linkedin, Mail, Download, Database, Layers3, Braces, Moon, Sun } from 'lucide-react';

import { ImpactStrip, AdditionalWork, CareerExperience, Certifications } from './CareerSections';

const projects = [
  { number: '01', type: 'PLATFORM & AI / T-MOBILE', title: 'Knowledge that works harder.', name: 'DocHub & EX AI', description: 'Owned the documentation hub for an engineering portal serving 10,000+ users. Rebuilt its document lifecycle and created the retrieval pipeline powering its AI assistant and MCP server.', tags: ['Java 25', 'Spring Boot 4', 'RAG', 'OpenSearch'], visual: 'data' },
  { number: '02', type: 'FULL-STACK / INDEPENDENT PRODUCT', title: 'Art, made accessible online.', name: 'Anjori Arts', description: 'Built a production storefront for handmade Indian art, from catalog and payments to custom commissions and an admin console. Now running as a single Next.js application.', tags: ['Next.js', 'TypeScript', 'Supabase', 'Razorpay'], visual: 'art', link: 'https://www.anjoriarts.com' },
  { number: '03', type: 'DATA ENGINEERING / SIGMOID', title: 'Data pipelines built to scale.', name: 'Databricks ingestion framework', description: 'Designed a configurable framework for loading source data into Delta tables, onboarding approximately 200 tables at launch with built-in controls for sensitive data.', tags: ['Databricks', 'PySpark', 'Delta Lake', 'Azure'], visual: 'code' },
];
const skills = [
  ['01', 'Backend engineering', 'Java 25, Spring Boot 4, REST APIs, microservices'],
  ['02', 'Data platforms', 'Databricks, Spark, Delta Lake, SQL, Python, OpenSearch'],
  ['03', 'Cloud & delivery', 'Azure, Google Cloud Run, Kubernetes, Docker, CI/CD'],
  ['04', 'Full-stack development', 'React, Next.js, TypeScript, Tailwind CSS, PostgreSQL'],
  ['05', 'Applied AI', 'RAG, embeddings, hybrid search, OpenSearch, MCP, Gemini'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    try { const saved = localStorage.getItem('portfolio-theme'); return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch { /* Theme still works without storage. */ }
  }, [dark]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll('.project, .skill, .experience-list article, .section-heading, .about-grid, .contact-main');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    elements.forEach(element => { element.classList.add('reveal'); observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell" id="top">
    <header className="header"><div className="header-inner wrap">
      <a href="#top" className="brand" onClick={closeMenu} aria-label="Aditya Raj, home"><span className="brand-mark">A<span>.</span></span><span>ADITYA RAJ <small>SOFTWARE ENGINEER</small></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a onClick={closeMenu} href="#work">Work</a><a onClick={closeMenu} href="#about">About</a><a onClick={closeMenu} href="#experience">Experience</a><a onClick={closeMenu} href="#certifications">Credentials</a><a onClick={closeMenu} href="#contact">Contact</a>
        <a className="nav-resume" href="/Aditya_Raj_Resume_v2.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15}/></a>
      </nav>
      <div className="header-actions"><button className="theme-button" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </div></header>
    <main>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> SENIOR SOFTWARE ENGINEER <span className="eyebrow-divider"/> HYDERABAD, INDIA</div>
          <h1 id="hero-title">Backend. Data.<br/><em>AI, built for</em><br/>production<span className="accent">.</span></h1>
          <p className="hero-description">Hi, I’m Aditya. I build the platforms, data systems, and AI experiences behind work that matters - from a 10,000+ user engineering portal to products built from the ground up.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDown size={17}/></a><a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={17}/></a></div>
        </div>
        <div className="hero-art" aria-label="Illustration of a connected software system"><div className="art-top"><span>ENGINEERED WITH INTENT</span><span>✳</span></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="orbit-center"><span>A<span>.</span></span><small>BUILD / SOLVE / SHIP</small></div><div className="orbit-label label-one"><span/> BACKEND</div><div className="orbit-label label-two"><span/> DATA</div><div className="orbit-label label-three"><span/> CLOUD</div><div className="orbit-label label-four"><span/> AI</div><div className="art-bottom"><span>FROM IDEA TO IMPACT</span><span>01 — 03</span></div></div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE <ArrowDown size={14}/></span><span>BUILDING FOR WHAT’S NEXT ↗</span></div>
      </section>
      <ImpactStrip/><section className="intro-band"><div className="wrap intro-inner"><span className="section-kicker light">A LITTLE ABOUT ME</span><p>I like building things that <em>work beautifully</em> — from the services behind the screen to the data that drives decisions.</p><a href="#about" aria-label="More about Aditya"><ArrowDown size={22}/></a></div></section>
      <section id="work" className="section wrap"><div className="section-heading"><div><div className="section-kicker"><span>01 / SELECTED WORK</span></div><h2>Built with purpose<span className="accent">.</span></h2></div><p>A selection of work across data engineering, backend systems, and product development.</p></div>
        <div className="projects">{projects.map((p) => <article className="project" key={p.number}><div className={'project-visual '+p.visual}><div className="visual-header"><span>{p.type}</span><span>↗</span></div>{p.visual === 'data' ? <div className="data-graphic"><div className="data-node"><Database/><span>DOCS</span></div><div className="data-line"><i/><i/><i/></div><div className="data-node main-node"><Layers3/><span>RAG + SEARCH</span></div><div className="data-line"><i/><i/><i/></div><div className="data-node"><Braces/><span>AI ASSISTANT</span></div></div> : p.visual === 'art' ? <div className="art-graphic"><span>ANJORI<br/><i>arts.</i></span><div className="art-shape shape-one"/><div className="art-shape shape-two"/><small>ART THAT TELLS A STORY</small></div> : <div className="code-graphic"><div className="code-dots">● &nbsp;● &nbsp;●</div><div><span>01</span> <b>class</b> DataPipeline {'{'}</div><div><span>02</span> &nbsp; buildReliableSystems();</div><div><span>03</span> &nbsp; automateTheComplex();</div><div><span>04</span> {'}'}</div></div>}<div className="visual-footer"><span>SELECTED WORK / {p.number}</span><span>ADITYA RAJ ©</span></div></div><div className="project-copy"><div className="project-meta"><span>{p.number} / {p.name}</span>{p.link && <a href={p.link} target="_blank" rel="noreferrer" aria-label="Visit Anjori Arts"><ArrowUpRight size={21}/></a>}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{p.link && <a className="project-link" href={p.link} target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={16}/></a>}</div></article>)}</div><AdditionalWork/>
      </section>
      <section id="about" className="about-section"><div className="wrap about-grid"><div><div className="section-kicker"><span>02 / THE PERSON BEHIND THE CODE</span></div><h2>Curious by nature.<br/><em>Engineer</em> by craft<span className="accent">.</span></h2></div><div className="about-copy"><p>I am Aditya, a senior software engineer in Hyderabad with 8+ years across backend platforms, data engineering, and applied AI. At T-Mobile, I own DocHub within the Engineering Experience portal, from the document lifecycle to the knowledge pipeline powering AI assistants.</p><p>Whether I’m designing a data pipeline, strengthening access controls, or building a product from the ground up, I care about making complex systems simpler and more dependable.</p><a className="text-link" href="/Aditya_Raj_Resume_v2.pdf" target="_blank" rel="noreferrer">A closer look at my resume <Download size={16}/></a></div></div><div className="wrap skills-grid">{skills.map(([n,title,description]) => <div className="skill" key={n}><span>{n} /</span><h3>{title}</h3><p>{description}</p></div>)}</div></section>
      <CareerExperience/><Certifications/>
      <section id="contact" className="contact-section"><div className="wrap"><div className="contact-top"><div className="section-kicker light">05 / GET IN TOUCH</div><span>HAVE A PROJECT OR OPPORTUNITY?</span></div><div className="contact-main"><h2>Let’s make<br/><em>something</em> matter<span>.</span></h2><div><p>Good things start with a conversation. If you have an idea, a challenge, or just want to say hello, my inbox is open.</p><a href="mailto:rajaditya1857@gmail.com" className="button button-light">Say hello <ArrowUpRight size={18}/></a></div></div><div className="contact-bottom"><a href="mailto:rajaditya1857@gmail.com">rajaditya1857@gmail.com <ArrowUpRight size={16}/></a><div><a href="https://github.com/a-shekhar" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a><a href="https://www.linkedin.com/in/ashekharr/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a><a href="mailto:rajaditya1857@gmail.com" aria-label="Email"><Mail size={19}/></a></div></div></div></section>
    </main><footer className="footer wrap"><span>© {new Date().getFullYear()} ADITYA RAJ</span><span>DESIGNED TO BUILD CONNECTIONS <span className="accent">✳</span></span><a href="#top">BACK TO TOP ↑</a></footer>
  </div>
}
export default App;
