import React from "react";

export default function About() {
  return (
    <section>
      <div className="left">
        <img
          src={require("../../assets/images/AimeeAvatarNoBack.png").default}
          alt="about me"
          className="photo"
        />
      </div>
      <div className="center" id="about">
        <h1 className="page-header">Big Ideas lead to Progress </h1>
      </div>

      <div>
        <p>
          Hello! I'm Aimee and I have a knack for grasping big ideas and applying those ideas to smaller more manageable components.  Former educator turned developer, I love creating eloquently organized applications and am experienced in developing full stack
          applications; but, my real jam is developing flexible and secure back ends.
          I'm all about that data, oh ya!
        </p>
        <p> 
        Experienced in using NodeJS, MySQL, MongoDB and GraphQL, please look over my most recent back end projects.  Additionally, I'm expanding my knowledge as a graduate student in the MSIS program at the University of Utah starting in 2022.
        </p>
        <p>
          Contact me if you have a work opportunity and would like to learn more about me as a developer.  
        </p>
      </div>
    </section>
  );
}
