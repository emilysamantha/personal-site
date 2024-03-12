import React, { useEffect } from "react";
import "./Hero.css";
import gsap from "gsap";
import Spline from "@splinetool/react-spline";

export default function Hero() {
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

    gsap.fromTo(
      ".hero-btn",
      { opacity: 0 },
      {
        duration: 0.5,
        opacity: 1,
        delay: 3,
      }
    );

    gsap.fromTo(
      ".hero-spline",
      { opacity: 0, scale: 0.75, rotation: 90, y: "10vh" },
      {
        duration: 0.75,
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: "0vh",
        delay: 3.5,
      }
    );
  }, []);

  return (
    <div className="hero">
      <div className="hero-text">
        <div className="hero-title-container">
          <div className="title-cursor">
            <h1 className="hero-title">
              emily<span className="purple">.is()</span>
            </h1>
            <div className="cursor"> </div>
          </div>
        </div>
        <h3 className="hero-name stagger">Emily Zarry</h3>
        <h3 className="hero-desc stagger">
          <i>Student, Software Engineer</i>
        </h3>
        <a className="hero-btn" href="mailto:emilyzarry@gmail.com">
          <i class="fa-solid fa-envelope btn-icon"></i>Say Hello
        </a>
      </div>
      <Spline
        className="hero-spline"
        scene="https://prod.spline.design/ev5NrH3HXte1u59k/scene.splinecode"
      />
    </div>
  );
}
