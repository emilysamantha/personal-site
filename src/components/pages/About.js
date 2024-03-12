import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./About.css";
import file from "../../files/EmilyZarry_Resume.pdf";
import gsap from "gsap";

export default function About() {
  useEffect(() => {
    gsap.fromTo(
      ".stagger",
      { opacity: 0, y: "10vh" },
      {
        duration: 1,
        opacity: 1,
        y: "0vh",
        delay: 2,
        stagger: 0.5,
      }
    );
  });

  return (
    <div className="about">
      <Navbar />
      <div className="about-content">
        <div className="about-title-container">
          <div className="title-cursor">
            <h1 className="about-title">
              about(<span className="pink">emily</span>)
            </h1>
            <div className="cursor"> </div>
          </div>
        </div>
        <div className="about-links stagger">
          <a
            href="https://www.linkedin.com/in/emily-samantha-zarry/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin about-icon purple-hover"></i>
          </a>
          <a href="https://github.com/emilysamantha" target="_blank">
            <i class="fa-brands fa-github about-icon purple-hover"></i>
          </a>
          <h3 className="download-text blue">Download my</h3>
          <a className="cv-btn" href={file} download>
            <i class="fa-solid fa-file-arrow-down cv-btn-icon"></i>
            CV
          </a>
        </div>
        <div className="about-desc-wrapper stagger">
          <p className="about-details">
            I am a final-year student at Monash University majoring in Computer
            Science, with a minor in Software Development.
          </p>
          <br />
          <p className="about-details">
            I have profound interest in full-stack development, algorithms,
            database design, cloud computing, and everything in between. I am
            also passionate about visual arts, running, reading, and food.
          </p>
          <br />
          <p className="about-details">From Indonesia, based in Melbourne.</p>
          <br />
          <p className="about-details pink">// she/her</p>
        </div>

        <br />
        <br />

        <div className="stagger">
          <h2>&lt;CourseWork /&gt;</h2>
          <div className="column-details blue">
            <p>
              Computer Systems, Networks & Security; Algorithms & Data
              Structures; Object Oriented Design & Implementation; Parallel
              Computing; Systems Development
            </p>
            <p>
              Mobile Application Development; e-Business Technologies
              (Full-stack Web Development); Databases (Relational and
              Non-Relational)
            </p>
            <p>
              Advanced Mathematics; Discrete Mathematics; Theory of Computation;
              Programming Paradigms
            </p>
            <p>3D Modeling & Rendering</p>
          </div>
        </div>

        <div className="stagger">
          <h2>&lt;MainSkills /&gt;</h2>
          <div className="column-details pink">
            <p>Web application development, Android Development</p>
            <p>Frontend, UI/UX, Agile Methodologies</p>
            <p>
              Python, C/C++, Go, Java, HTML/CSS, JavaScript, Typescript,
              Haskell, SQL, MongoDB, Neo4j
            </p>
            <p>Figma, Adobe Illustrator, Procreate</p>
          </div>
        </div>

        <div className="stagger">
          <h2>&lt;Experience /&gt;</h2>
          <div className="column-details">
            <div>
              <h3 className="navy">Software Engineer Intern</h3>
              <p>
                <a className="purple" href="https://ppiamonash.com/">
                  @ ANZ Plus
                </a>
              </p>
              <p className="purple">Jan 2024 - Present</p>
            </div>
            <div>
              <h3 className="navy">Webmaster</h3>
              <p>
                <a className="purple" href="https://ppiamonash.com/">
                  @ Monash Indonesian Club
                </a>
              </p>
              <p className="purple">Jan 2023 - Dec 2023</p>
            </div>
            <div>
              <h3 className="navy">Team Member/Barista</h3>
              <p className="purple">@ Zuppa Cafe</p>
              <p className="purple">Feb 2023 - Dec 2023</p>
            </div>
            <div>
              <h3 className="navy">Programming Bootcamp Tutor</h3>
              <p className="purple">@ Faculty of IT, Monash University</p>
              <p className="purple">July 2022</p>
            </div>
            <div>
              <h3 className="navy">Creative Officer</h3>
              <p>
                <a className="purple" href="https://indonation.ppia-rmit.com/">
                  @ Indonation
                </a>
              </p>
              <p className="purple">Mar 2022 - Nov 2022</p>
            </div>
          </div>
        </div>

        <div className="stagger">
          <h2>&lt;AlsoDoing /&gt;</h2>
          <div className="column-details green">
            <p>Running, pilates, spin</p>
            <p>Reading</p>
            <p>Trying out new food</p>
            <p>Going to parks</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
