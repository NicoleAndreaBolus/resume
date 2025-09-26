import React from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg";

/* =========================
   Header
========================= */
function Header() {
  return (
    <div className="header">
      <img src={profileImage} alt="Profile" className="profile-img" />
      <h1 className="name">Nicole Andrea Bolus</h1>
    </div>
  );
}

/* =========================
   Contact
========================= */
function Contact() {
  return (
    <div className="sidebar-box">
      <div className="section-header">Contact</div>
      <div className="section-body">
        <p>
          <strong>Address</strong>
          Apalit Pampanga
        </p>
        <p>
          <strong>Phone</strong>
          +639295954517
        </p>
        <p>
          <strong>E-mail</strong>
          nagbolus.student@ua.edu.ph
        </p>
      </div>
    </div>
  );
}

/* =========================
   Skills
========================= */
function Skills() {
  return (
    <div className="sidebar-box">
      <div className="section-header">Skills</div>
      <div className="section-body">
        <ul className="skills-list">
          <li>React, Vite, TypeScript</li>
          <li>Node.js, REST & GraphQL</li>
          <li>Agile & Scrum coaching</li>
          <li>Product thinking & UX collaboration</li>
          <li>CI/CD, tests, observability</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Summary
========================= */
function Summary() {
  return (
    <div className="section">
      <p className="summary-text">
        Results-driven engineering leader with experience delivering web and
        mobile products. I design pragmatic system architectures, coach small
        agile teams, and translate product strategy into measurable outcomes. I
        prioritize clarity, collaboration, and continuous improvement.
      </p>
    </div>
  );
}

/* =========================
   Education
========================= */
function Education() {
  return (
    <div className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-entry">
        <p>
          <strong>Bachelor of Science in Information Technology</strong>
        </p>
        <p>
          <em>University of the Assumption - San Fernando, Pampanga</em>
        </p>
      </div>
      <div className="education-entry">
        <p>
          <strong>Senior High School</strong>
        </p>
        <p>
          <em>St. Vincent's Academy</em>
        </p>
      </div>
    </div>
  );
}

/* =========================
   Job Entry (reusable)
========================= */
function JobEntry(props) {
  return (
    <div className="job-entry">
      <div className="job-year">{props.year}</div>
      <div className="job-details">
        <p>
          <strong>{props.title}</strong>
        </p>
        <p>
          <em>{props.company}</em>
        </p>
        <ul>
          {props.detail1 && <li>{props.detail1}</li>}
          {props.detail2 && <li>{props.detail2}</li>}
          {props.detail3 && <li>{props.detail3}</li>}
          {props.task && <li>{props.task}</li>}
        </ul>
      </div>
    </div>
  );
}

/* =========================
   Experience
========================= */
function Experience() {
  return (
    <div className="section">
      <h2 className="section-title">Experience</h2>
      <JobEntry
        year="2021 - Current"
        title="Lead Product Engineer"
        company="Lighthouse Labs, Inc."
        detail1="Lead a cross-functional engineering team of 7 to deliver SaaS features on quarterly roadmap."
        detail2="Introduced component-driven design system reducing UI regressions by 40%."
        detail3="Mentored engineers on testing, observability, and deployment best practices."
      />
      <JobEntry
        year="2017 - 2021"
        title="Senior Software Developer"
        company="BrightWave Solutions"
        detail1="Built and maintained the company’s customer portal using React and Node.js."
        detail2="Collaborated with product and UX to improve onboarding flow resulting in +18% activation."
        detail3="Owned CI/CD pipeline improvements and reduced deploy time by 60%."
      />
      <JobEntry
        year="2014 - 2017"
        title="Software Engineer"
        company="Innovatech"
        detail1="Implemented integrations with 3rd-party services and built monitoring dashboards."
        detail2="Wrote clear documentation and trained new hires across engineering and QA."
        task="Additional side project: Automated internal reporting tool."
      />
    </div>
  );
}

/* =========================
   Main App
========================= */
function App() {
  return (
    <div className="app">
      <div className="resume-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <Header />
          <Contact />
          <Skills />
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <Summary />
          <Education />
          <Experience />
        </main>
      </div>
    </div>
  );
}

export default App;
