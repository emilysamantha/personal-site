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
            I am a penultimate student at Monash University majoring in Computer
            Science, with a minor in Software Development.
          </p>
          <br />
          <p className="about-details">
            I have profound interest in full-stack development, machine
            learning, cloud computing, and everything in between. I am also
            passionate about visual arts, running, and food.
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
              Structures; Object Oriented Design & Implementation; Systems
              Development
            </p>
            <p>
              Mobile Application Development; e-Business Technologies (Fullstack
              Web Development); Databases
            </p>
            <p>
              Advanced Mathematics; Discrete Mathematics; Theory of Computation
            </p>
            <p>3D Modeling & Rendering</p>
          </div>
        </div>

        <div className="stagger">
          <h2>&lt;MainSkills /&gt;</h2>
          <div className="column-details pink">
            <p>Web application development</p>
            <p>Frontend, UI/UX</p>
            <p>Python, C++, Java, HTML/CSS, JavaScript, Typescript, SQL, Go</p>
            <p>Figma, Adobe Illustrator, Procreate</p>
          </div>
        </div>

        <div className="stagger">
          <h2>&lt;Experience /&gt;</h2>
          <div className="column-details">
            <div>
              <h3 className="navy">Webmaster</h3>
              <p className="purple">@ Monash Indonesian Club</p>
              <p className="purple">Jan 2023 - present</p>
            </div>
            <div>
              <h3 className="navy">Programming Bootcamp Tutor</h3>
              <p className="purple">@ Faculty of IT, Monash University</p>
              <p className="purple">July 2022</p>
            </div>
            <div>
              <h3 className="navy">Creative Officer</h3>
              <p className="purple">@ Indonation</p>
              <p className="purple">Mar 2022 - Nov 2022</p>
            </div>
            <div>
              <h3 className="navy">Graphic Designer</h3>
              <p className="purple">@ Monash Indonesian Club</p>
              <p className="purple">Dec 2021 - Dec 2022</p>
            </div>
          </div>
        </div>

        <div className="stagger">
          <h2>&lt;AlsoDoing /&gt;</h2>
          <div className="column-details green">
            <p>Running</p>
            <p>Pilates</p>
            <p>Tring out new food</p>
            <p>Going to parks</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
