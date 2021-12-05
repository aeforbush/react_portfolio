import React from "react";

export default function About() {
  return (
    <section>
      <div className="left">
        <img
          src={require("../../assets/images/AimeeAvatar200.png")}
          alt="about me"
          className="photo"
        />
      </div>
      <div className="center" id="about">
        <h1 className="page-header">Entrepreneur * Creator * Tenacious</h1>
      </div>

      <div>
        <p>
          Hello! I'm Aimee and I love creating elegently and beautifully
          organized applications. I'm experienced in developing full-stack
          applications but my real jam is developing flexible, secure back-ends.
          I'm all about that data, oh ya! The front-end is cool though and like
          I said, I love creating so give me a shout! Until then... ✌️
        </p>
      </div>
    </section>
  );
}
