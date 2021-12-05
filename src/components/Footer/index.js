import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/aeforbush"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/Octocat.jpg")}
            alt="Github"
            className="logo"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/aforbush/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/LI-In-Bug.png")}
            alt="LinkedIn"
            className="logo"
          ></img>
        </a>
      </div>
    </footer>
  );
}
