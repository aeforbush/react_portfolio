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
        <h1 className="page-header">Security is The Way</h1>
      </div>

      <div>
        <p>
        Hi there!  I'm an experienced web developer and aspiring cybersecurity professional.  I am responsible, a dedicated learner, and a team player.  
        I am capable of working on projects that require collection and analysis, effective presentation and communication skills.

        </p>
        <p> 
        Experienced in AGILE development, web development (Javascript and Typescript), testing, AWS Cloud technology and NIST Cybersecurity Framework.
        </p>
        <p>
        Please contact me with further inquiries.  Thanks!  
        </p>
      </div>
    </section>
  );
}
