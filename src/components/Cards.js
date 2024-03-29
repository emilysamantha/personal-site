import React, { useEffect } from "react";
import CardItem from "./CardItem";
import "./CardItem.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cards() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const projects = {
    "Parallel Bloom Filter String Matching": {
      desc: "Implemented a Bloom filter string matching algorithm using the OpenMP library, utilizing multiple threads to improve performance. Processes a large text file and a query file to determine if the query strings are present in the text file.",
      techStack: "C, OpenMP",
      link: "https://github.com/emilysamantha/2102_A1",
      color: "blue",
      order: 1,
    },
    "Tetris": {
      desc: "Developed a Tetris game using Functional Reactive Programming (FRP) principles and the RxJS library.",
      techStack: "Javascript, RxJS, HTML / CSS",
      link: "https://github.com/emilysamantha/2102_A1",
      color: "green",
      order: 2,
    },
    "Ukkonen's Algorithm": {
      desc: "Implemented Ukkonen's algorithm to construct a suffix tree for a given string in linear time.",
      techStack: "Python",
      link: "https://github.com/emilysamantha/FIT3155_A2_Q1",
      color: "pink",
      order: 3,
    },
    "Burrows-Wheeler Transform Based Encoder and Decoder": {
      desc: "Developed an encoder that performs a run-length binary encoding on the transformed input string using Huffman and Elias codewords. Also developed a decoder to decode the binary file by performing the inverse Burrows-Wheeler Transform.",
      techStack: "Python",
      link: "https://github.com/emilysamantha/2102_A1",
      color: "pink",
      order: 0,
    },
    "Income Expense Tracker": {
      desc: "Developed a web app that allows the user to track income and expense transactions. Users are able to view income and expense summaries according to month and category.",
      techStack: "React, MongoDB, Express, Node, Mongoose, Axios",
      link: "https://github.com/emilysamantha/my-expense-tracker",
      color: "blue",
      order: 1,
    },
    "Quizzical App": {
      desc: "Developed an interactive web app that allows the user to test their trivia skills by displaying a set of questions retrieved from an API and showing the results and their final score.",
      techStack: "React, Javascript, HTML / CSS",
      link: "https://github.com/emilysamantha/quizzical-app",
      open: "https://emilysamantha.github.io/quizzical-app/",
      color: "pink",
      order: 2,
    },
    "Sudoku Game": {
      desc: "Recreated the classic Sudoku game with a command-line GUI that allows the player to place a number, undo a move, and ask for a hint.",
      techStack: "Python",
      link: "https://github.com/emilysamantha/sudoku-game",
      color: "purple",
      order: 0,
    },
    
    "Pairs Card Game": {
      desc: "Recreated a multi-player card game called Pairs using knowledge of object-oriented programming, pointers and references, and C++ memory management.",
      techStack: "C++",
      link: "https://github.com/emilysamantha/pairs-game",
      color: "blue",
      order: 1,
    },
    "Personal Site": {
      desc: "Designed and developed a responsive personal website to showcase my abilities, knowledge, and also personality.",
      techStack: "React, GSAP, Spline",
      link: "https://github.com/emilysamantha/personal-site",
      open: "https://emilysamantha.github.io/personal-site",
      color: "green",
      order: 2,
    },
  };

  // const projects = {
  //   "TDSB Homework Management Interface": {
  //     desc: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
  //     techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
  //     link: "https://github.com/gazijarin/TDSBHomeworkManagement",
  //     open: "https://tdsb-app.herokuapp.com/",
  //     color: "purple",
  //     order: 1,
  //   },
  //   "Adam A.I.": {
  //     desc: "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
  //     techStack: "Javascript, HTML / CSS",
  //     link: "https://github.com/gazijarin/adamai",
  //     open: "https://gazijarin.github.io/AdamAI/",
  //     color: "pink",
  //     order: 2,
  //   },
  //   "Distributed Logging and Monitoring System": {
  //     desc: "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
  //     techStack: "Node.js (Express.js), React.js, PostgreSQL",
  //     link: "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System",
  //     color: "green",
  //     order: 3,
  //   },
  //   "Odin Bot": {
  //     desc: "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
  //     techStack: "Javascript, Node.js, Natural NLP, Telegram API",
  //     link: "https://github.com/gazijarin/OdinBot",
  //     open: "",
  //     color: "blue",
  //     order: 4,
  //   },
  //   "Game Centre": {
  //     desc: "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
  //     techStack: "Java, Android Studio",
  //     link: "https://github.com/gazijarin/gamecentre",
  //     open: "",
  //     color: "green",
  //     order: 5,
  //   },
  //   "Minimax Stonehenge": {
  //     desc: "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
  //     techStack: "Python",
  //     link: "https://github.com/gazijarin/stonehenge",
  //     open: "",
  //     color: "pink",
  //     order: 6,
  //   },
  // };

  return (
    <div className="cards">
      <h2
        data-aos="fade-up"
        data-aos-duration="800"
        className="cards-title"
        id="projects"
      >
        <span className="pink">//</span> my projects
      </h2>
      <div className="cards-container">
        <ul className="cards-items">
          {Object.keys(projects).map((key, i) => (
            <CardItem
              title={key}
              desc={projects[key]["desc"]}
              using={projects[key]["techStack"]}
              githubLink={projects[key]["link"]}
              openLink={projects[key]["open"]}
              color={projects[key]["color"]}
              order={projects[key]["order"]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
