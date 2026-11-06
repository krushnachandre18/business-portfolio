
import "./index.css";

const personalProjects = [
  {
    title: "BugHunter AI",
    category: "AI / Web Application",
    description:
      "An AI-based code error detection platform designed to identify programming errors and help developers understand solutions.",
    tech: ["React", "Python", "Flask", "AI"],
    github: "https://github.com/krushnachandre18/BugHunter-AI",
    demo: "",
  },
  {
    title: "Dairy Cooperative Management",
    category: "Full Stack / College Project",
    description:
      "A dairy management system for managing farmers, milk collection, cattle records, payments and business analytics.",
    tech: ["React", "JavaScript", "AI", "LocalStorage"],
    github: "",
    demo: "",
  },
];

const clientProjects = [
  {
    title: "Little Flower English Medium School",
    category: "Client Website",
    description:
      "A professional school website presenting school information, facilities, gallery and contact details.",
    tech: ["React", "CSS", "JavaScript"],
    demo: "https://littleflowerenglishmediumschoolshaha.online",
    github: "",
  },
  {
    title: "Hotel Management Website",
    category: "Client / Demo Project",
    description:
      "A modern hotel website concept with an elegant interface for showcasing rooms, services and hotel information.",
    tech: ["React", "CSS", "JavaScript"],
    demo: "",
    github: "",
  },
];

function SectionTitle({ label, title, description }) {
  return (
    <div className="section-title">
      <span>{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/krushnachandre18"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/krushna-chandre-560908386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>

      <a
        href="https://www.instagram.com/krushna_chandre_18?vrfl=enJ5Y3p5aWE1NzJm"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        KC<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="918208912993" className="nav-button">
        Let's Talk <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="availability">
          <span className="status-dot"></span>
          Available for opportunities
        </span>

        <p className="intro">HELLO, I'M</p>

        <h1>
          Krushna
          <br />
          <span>Chandre.</span>
        </h1>

        <h2>Web Developer | Computer Science Student</h2>

        <p className="hero-description">
          I build modern websites and practical software solutions.
          Interested in web development, problem solving and AI-powered
          applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore Projects <i className="fa-solid fa-arrow-right"></i>
          </a>

          <a href="/resume.pdf" download className="secondary-button">
            <i className="fa-solid fa-download"></i> Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image-area">
        <div className="image-glow"></div>

        <div className="profile-card">
          <img
  src={`${import.meta.env.BASE_URL}profile.jpg`}
  alt="Krushna Chandre"
  className="profile-photo"
/>
          <img src="/profile.jpg" alt="Krushna Chandre" />
        </div>

        <SocialLinks />

        <p className="photo-caption">Building. Learning. Creating.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionTitle
        label="GET TO KNOW ME"
        title="About Me"
        description="A little introduction about my journey."
      />

      <div className="about-content">
        <div className="about-card">
          <span className="card-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </span>
          <h3>Education</h3>
          <p>
            Final-year B.Sc. Computer Science student at K. J. Somaiya College.
          </p>
        </div>

        <div className="about-card">
          <span className="card-icon">
            <i className="fa-solid fa-code"></i>
          </span>
          <h3>What I Do</h3>
          <p>
            I develop responsive websites and work on practical software
            projects using modern web technologies.
          </p>
        </div>

        <div className="about-card">
          <span className="card-icon">
            <i className="fa-solid fa-bullseye"></i>
          </span>
          <h3>My Goal</h3>
          <p>
            To grow as a developer, improve my technical skills and build
            useful digital products.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Java",
    "Git & GitHub",
    "MySQL",
    "Flask",
  ];

  return (
    <section className="section skills-section" id="skills">
      <SectionTitle
        label="MY TOOLKIT"
        title="Technical Skills"
        description="Technologies I have worked with in my projects."
      />

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span>0{index + 1}</span>
            <h3>{skill}</h3>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">0{index + 1}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-list">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        )}

        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub <i className="fa-brands fa-github"></i>
          </a>
        )}

        {!project.demo && !project.github && (
          <span className="project-status">In Progress</span>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionTitle
        label="MY WORK"
        title="Featured Projects"
        description="Some of the projects I have designed and developed."
      />

      <h3 className="project-group-title">Personal Projects</h3>
      <div className="projects-grid">
        {personalProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <h3 className="project-group-title client-heading">Client Projects</h3>
      <div className="projects-grid">
        {clientProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="918208912993">
      <SectionTitle
        label="GET IN TOUCH"
        title="Let's Connect"
        description="Have a project idea or an opportunity? Get in touch."
      />

      <div className="contact-card">
        <h3>Let's build something useful.</h3>
        <p>
          I'm interested in web development opportunities, freelance projects
          and collaborations.
        </p>

        <div className="contact-links">
          {/* Replace these with your actual contact details */}
          <a href="krushnachandre5448@gmail.com">
            <i className="fa-solid fa-envelope"></i>
            krushnachandre5448@gmail.com
          </a>

          <a href="https://wa.me/+91 8208912993">
            <i className="fa-brands fa-whatsapp"></i>
            WhatsApp
          </a>

          <a
            href="https://github.com/krushnachandre18"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/krushna-chandre-560908386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>

          <a href="https://www.instagram.com/krushna_chandre_18?vrfl=enJ5Y3p5aWE1NzJm" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        KC<span>.</span>
      </a>
      <p>Designed & Developed by Krushna Chandre</p>
      <p>© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
