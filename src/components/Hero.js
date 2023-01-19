import React, { useEffect } from "react";
import "./Hero.css";

export default function Hero() {
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
          <i>Student, Software Developer</i>
        </h3>
        <a className="hero-btn" href="mailto:emilyzarry@gmail.com">
          <i class="fa-solid fa-envelope btn-icon"></i>Say Hello
        </a>
      </div>
      {/* <Spline
        className="hero-spline"
        scene="https://prod.spline.design/ev5NrH3HXte1u59k/scene.splinecode"
      /> */}
    </div>
  );
}
