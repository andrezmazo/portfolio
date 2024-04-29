import React, { useState } from "react";
import "./Projects.scss";
import picPetshop from "../img/Petshop.jpg";
import Badge from "./Badge";

function Projects(props) {
  const petshopSkills = ["react", "html", "node", "mysql", "ejs", "css"];

  const atvTechnologies = [
    "React",
    "JavaScript",
    "EJS",
    "HTML5",
    "Node.js",
    "MySQL",
    "CSS3",
    "Express.js",
    "APIRest",
    "Scrum",
    "PHP",
  ];

  return (
    <section ref={props.myRef} className="projects-container" id="Project">
      <div className="section-box">
        <div className="text-container center">
          <h3 className="title-section">Projects</h3>
          <h2>Some things I've built</h2>
        </div>
        <div className="cards-container">
          <div className="card-wrapper">
            <div className="card-back">
              <div className="card-container">
                <img src={picPetshop} title="Petshop" />{" "}
                <div className="text-container center">
                  <p>Petshop</p>
                  <p>E-commerce</p>
                  <p>
                    E-commerce platform built using React, HTML, SASS, EJS, and
                    MySQL. It includes features such as user authentication,
                    profile management, shopping cart, administration, product
                    search, and purchase history tracking.{" "}
                  </p>
                  <div className="badges-wrapper">
                    {atvTechnologies.map((technology) => (
                      <Badge key={technology} technology={technology} />
                    ))}
                    <Badge technology="React" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
