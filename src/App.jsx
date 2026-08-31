import { useEffect, useState } from 'react';

const skills = [
  'Java 8/11/17/21',
  'Spring Boot',
  'Spring MVC',
  'REST APIs',
  'Microservices',
  'Spring Data JPA',
  'Hibernate',
  'React.js',
  'JavaScript',
  'HTML5 / CSS3',
  'PrimeFaces / JSF',
  'MySQL',
  'Oracle SQL',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'Git / GitHub',
  'Maven / Gradle',
];

const projects = [
  {
    title: 'Tamil Nadu Power & Distribution System',

    image: '/selvam-portfolio/images/tneb-project.jpg',

    description:
      'Contributing to the development, enhancement, migration, maintenance, and production support of large-scale enterprise applications supporting Tamil Nadu’s electricity distribution infrastructure.',

    tech: [
      'Java',
      'Java 8+',
      'Java 11',
      'Spring Boot',
      'Spring MVC',
      'React',
      'RESTful Web Services',
      'JSON',
      'XML',
      'Oracle SQL',
      'PL/SQL',
      'MySQL',
      'JPA',
      'Hibernate',
      'JDBC',
      'JUnit',
      'Unit Testing',
      'Integration Testing',
      'API Testing',
      'Manual Testing',
      'Regression Testing',
      'Docker',
      'Kubernetes',
      'Production Support',
      'Project Migration',
      'Data Migration',
      'Network Troubleshooting',
      'Incident Resolution',
      'Log Analysis',
      'Bug Fixing',
      'Hotfix Deployment',
      'SLA Support',
      'Performance Optimization',
    ],

    status:
      'TNEB · Senior Software Developer · Sep 2024 – Present',
  },

  {
    title: 'Office of the Commissioner of Prohibition & Excise',

    image: '/selvam-portfolio/images/nic-project.jpg',

    description:
      'Worked on development, enhancement, audit, migration, testing, security assessment, maintenance, and production deployment of government enterprise applications.',

    tech: [
      'Java',
      'Spring MVC',
      'Spring Boot',
      'Struts 2',
      'REST API',
      'React',
      'JPA',
      'Hibernate',
      'PostgreSQL',
      'MySQL',
      'Database Migration',
      'JUnit',
      'Integration Testing',
      'Security Testing',
      'Code Review',
      'Security Audit',
      'Bug Fixing',
      'Production Deployment',
      'Production Support',
    ],

    status:
      'NIC · Software Developer · Jan 2023 – Aug 2024',
  },

  {
    title: 'e-District – Revenue & Social Security Schemes',

    image: '/selvam-portfolio/images/tnega-project.jpg',

    description:
      'Worked on the Tamil Nadu e-District platform supporting electronic delivery of high-volume citizen-centric revenue and social security services.',

    tech: [
      'Core Java',
      'Struts 2',
      'Angular',
      'JavaScript',
      'JSP',
      'Bootstrap',
      'PostgreSQL',
      'JDBC',
      'REST API',
      'JSON',
      'XML',
      'e-Governance',
      'Backend Processing',
      'Citizen Services',
      'Application Support',
      'SLA Management',
      'Production Support',
    ],

    status:
      'TNeGA · Assistant System Engineer · Nov 2021 – Dec 2022',
  },

  {
    title: 'Banking Full Stack Application',

    image: '/selvam-portfolio/images/banking-project.jpg',

    description:
      'Full-stack banking application designed around secure account management, customer workflows, transaction processing and REST API architecture.',

    tech: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Microservices',
      'REST API',
      'JPA',
      'Hibernate',
      'React',
      'MySQL',
      'Docker',
      'Kubernetes',
      'JUnit',
      'CI/CD',
    ],

    status: 'Personal Project · In Development',
  },

  {
    title: 'Order Management System',

    image: '/selvam-portfolio/images/order-project.jpg',

    description:
      'Full-stack order management application handling product selection, cart processing, customer delivery information and order lifecycle management.',

    tech: [
      'Java',
      'Spring Boot',
      'REST API',
      'JPA',
      'Hibernate',
      'React',
      'H2 Database',
      'SQL',
      'JUnit',
      'API Testing',
    ],

    status: 'Personal Portfolio Project',
  },
];

const highlights = [
  { icon: '💻', label: 'Backend', value: 'Java + Spring' },
  { icon: '🌐', label: 'Frontend', value: 'React/Angular + JSF' },
  { icon: '🗄️', label: 'Databases', value: 'MySQL · Oracle · PostgreSQL' },
  { icon: '⚙️', label: 'DevOps', value: 'Docker · Kubernetes · Git' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">APS</span>
          <span>Panneerselvam Arumugam</span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">JAVA FULL STACK DEVELOPER</p>
            <h1>
              Building reliable enterprise applications with
              <span> Java, Spring Boot & React.</span>
            </h1>
            <p className="hero-description">
              Full-stack developer focused on scalable backend services, clean web interfaces, database-driven applications, and production-ready engineering practices.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View Projects →
              </a>
              <a className="btn btn-secondary" href="https://github.com/panneerselvam3260/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-panel">

            <div className="profile-photo-wrapper">
              <img
                src="/selvam-portfolio/images/profile.jpg"
                alt="Panneerselvam Arumugam"
                className="profile-photo"
              />
            </div>

            <div className="status-pill">
              <span /> Available for software opportunities
            </div>

            <div className="code-card">
              <div className="code-dots">
                <i />
                <i />
                <i />
              </div>

              <pre>{`@RestController
@RequestMapping("/api")
public class DeveloperController {

  @GetMapping("/profile")
  public String profile() {
    return "Java Full Stack Developer";
  }
}`}</pre>
            </div>

          </div>
        </section>

        <section className="stats-grid page-width">
          {highlights.map(({ icon, label, value }) => (
            <article className="stat-card" key={label}>
              <span>{icon}</span>
              <div>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            </article>
          ))}
        </section>

        <section id="about" className="section page-width two-column">
          <div>
            <p className="section-kicker">ABOUT ME</p>
            <h2>Enterprise development with a practical full-stack mindset.</h2>
          </div>
          <div className="section-copy">
            <p>
              I am a Java Full Stack Developer with 4+ years of experience building and maintaining web applications using Java, Spring, REST services, relational databases, and modern frontend technologies.
            </p>
            <p>
              My work includes backend business logic, SQL integration, JSF/PrimeFaces enterprise interfaces, responsive UI improvements, API development, troubleshooting, and deployment-oriented tooling such as Docker and Kubernetes.
            </p>
          </div>
        </section>

        <section id="skills" className="section section-tinted">
          <div className="page-width">
            <p className="section-kicker">TECHNICAL SKILLS</p>
            <h2>Technologies I use to ship full-stack applications.</h2>
            <div className="skill-cloud">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="projects" className="section page-width">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">FEATURED PROJECTS</p>
              <h2>Selected application work.</h2>
            </div>
            <a className="text-link" href="https://github.com/panneerselvam3260/" target="_blank" rel="noreferrer">
              More on GitHub ↗
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>

  <div className="project-image-wrapper">
    <img
      src={project.image}
      alt={project.title}
      className="project-image"
    />
  </div>

  <div className="project-number">
    0{index + 1}
  </div>

  <span className="project-status">
    {project.status}
  </span>

  <h3>{project.title}</h3>

  <p>{project.description}</p>

  <div className="tag-row">
    {project.tech.map((tech) => (
      <span key={tech}>{tech}</span>
    ))}
  </div>

</article>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-dark">
          <div className="page-width experience-layout">
            <div>
              <p className="section-kicker light">EXPERIENCE</p>
              <h2>What I bring to a development team.</h2>
            </div>
            <div className="experience-list">
              <div className="experience-item">
                <span>💼</span>
                <div>
                  <h3>Java Full Stack Development</h3>
                  <p>4+ years working across backend logic, web interfaces, SQL integration, application support, debugging, and feature delivery.</p>
                </div>
              </div>
              <div className="experience-item">
                <span>⚙️</span>
                <div>
                  <h3>Spring & API Engineering</h3>
                  <p>REST API design, Spring Boot services, persistence with JPA/Hibernate, validation, service layers, and maintainable application architecture.</p>
                </div>
              </div>
              <div className="experience-item">
                <span>🖥️</span>
                <div>
                  <h3>Enterprise UI Development</h3>
                  <p>Responsive React interfaces plus hands-on JSF, PrimeFaces, XHTML, CSS, exports, forms, validation, and complex workflow screens.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section page-width contact-section">
          <div>
            <p className="section-kicker">CONTACT</p>
            <h2>Interested in working together?</h2>
            <p>Connect with me for Java, Spring Boot, full-stack, integration, or enterprise application opportunities.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-card" href="https://www.linkedin.com/in/panneerselvam-arumugam-6b58b5105/" target="_blank" rel="noreferrer">
              <span>in</span>
              <span><small>LinkedIn</small>Connect professionally</span>
              <span>→</span>
            </a>
            <a className="contact-card" href="https://github.com/panneerselvam3260/" target="_blank" rel="noreferrer">
              <span>GH</span>
              <span><small>GitHub</small>View my repositories</span>
              <span>→</span>
            </a>
            <a className="contact-card" href="mailto:your-email@example.com">
              <span>✉</span>
              <span><small>Email</small>Replace with your email</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer page-width">
        <span>© 2026 Panneerselvam Arumugam</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}

export default App;
