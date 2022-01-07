import React from "react";
import Project from "../Project";

export default function Portfolio() {
  const projects = [
    {
      name: "Tomodachi",
      description:
        "Creation simulation game where the object is to keep your planet alive by balancing the system spheres with four game interactions.",
      image: "",
      technologies: ["MERN SPA", "Apollo-GraphQL", "Heroku", "JWT"],
      github: "https://github.com/Johnson90cm/Tomodachi.git",
      deployed:
        "https://tomodachi-sadboitay.herokuapp.com/",
      },
    {
      name: "Travel Bonanza",
      description:
        "Designed for the adventurous at heart, Travel Bonanza randomly selects an inexpensive destination based on choice of departing/returning airport and selected dates",
      image: "../../assets/images/Screen Shot 2021-12-05 at 2.12.42 PM.png",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "API - Skyscanner, OpenWeather and PredictHQ",
        "Materialize for CSS",
      ],
      github: "https://github.com/aeforbush/Project-.git",
      deployed: "https://bhyland95.github.io/Project1/",
    },
    {
      name: "Powder Project",
      description:
        "The Powder Project is a CMS style site that helps snow sport enthusiasts determine where to go in Utah for their next winter adventure. Users will be able to find Utah Mountain Resorts, their rating as well as the Powder report for that resort.",
      image: "../../assets/images/Screen Shot 2021-12-05 at 2.17.46 PM.png",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "NodeJS",
        "HandlebarsJS",
        "Express & Sequelize",
        "Heroku & AWS S3",
      ],
      github: "https://github.com/aeforbush/the_powder_project.git",
      deployed: "https://hidden-anchorage-82210.herokuapp.com/",
    },
    {
      name: "Social Network API",
      description:
        "Social Network API is a back-end solution for a social-networking site using MongoDB, Mongoose and Express.js. RESTful API routes tested with Insomnia Core.",
      image: "",
      technologies: ["NodeJS", "ExpressJS", "Moment", "MongoDB", "Mongoose"],
      github: "https://github.com/aeforbush/social_networkAPI",
      deployed:
        "https://www.icloud.com/iclouddrive/0-HMpTDuXOcbq5QhurYQGpXdQ#Social_Network_API",
    },
	{
		name: "Note Taker",
		description:
		  "Note Taker makes creating, viewing and deleting notes a delight! The application, which is powered by ExpressJS, allows you to save plain text notes with a title.",
		image: "",
		technologies: ["NodeJS", "ExpressJS"],
		github: "https://github.com/aeforbush/note_taker.git",
		deployed:
		  "https://note-taker-82.herokuapp.com/",
	  },
	  {
		name: "E-Commerce Back End",
		description:
		  "E Commerce is a back end project using Express.js and Sequelize to interact with the MySQL database. This application demonstrates the API Routes performing RESTful CRUD opportations using Insomnia a testing resource.",
		image: "",
		technologies: ["NodeJS", "ExpressJS", "MySQL", "Sequelize"],
		github: "https://github.com/aeforbush/e-commerce.git",
		deployed:
		  "https://www.icloud.com/iclouddrive/0P_20yHTBaPYbPX7zuXaroxHQ#ecommerce_back_end_demo",
	  },
  ];

  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
		  <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
		  <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
		  <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
		  <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}
