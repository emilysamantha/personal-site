import React from "react";
import "./Cards.css";

export default function CardItem(props) {
  return (
    <li
      data-aos="fade-up"
      data-aos-delay={400 * props.order}
      data-aos-duration="1000"
      className="card-item"
    >
      <div className="card-start">
        <div className="card-top">
          <i class="fa-regular fa-folder"></i>
          <div className="card-top-right">
            <a href={props.githubLink} target="_blank">
              <i class={"fa-brands fa-github navy-hover " + props.color}></i>
            </a>
            {props.openLink && (
              <a href={props.openLink} target="_blank">
                <i
                  class={
                    "fa-solid fa-arrow-up-right-from-square navy-hover " +
                    props.color
                  }
                ></i>
              </a>
            )}
          </div>
        </div>
        <h3 className="card-title">{props.title}</h3>
        <p className="card-desc">{props.desc}</p>
      </div>
      <div className="card-end">
        <p className={props.color}>{props.using}</p>
      </div>
    </li>
  );
}
