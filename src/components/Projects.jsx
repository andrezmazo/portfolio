import React, { useState } from "react";
import "./Projects.scss";
import picPetshop from "../img/logoPetshop.jpg";
import picLibreria from "../img/logoLibreria.jpg";
import gifLibreria from "../img/gifs/Libreria.gif";
import picExpenseTracker from "../img/logoExpenseTracker.jpg";
import gifExpenseTracker from "../img/gifs/ExpenseTracker.gif";
import Badge from "./Badge";

function Projects(props) {
  const [hoveredImage, setHoveredImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Petshop",
      description:
        "E-commerce platform built using React, HTML, SASS, EJS, and MySQL. It includes features such as user authentication, profile management, shopping cart, administration, product search, and purchase history tracking.",
      category: "E-commerce",
      image: picPetshop,
      gif: null,
      technologies: [
        "React",
        "JavaScript",
        "EJS",
        "HTML5",
        "Node.js",
        "MySQL",
        "CSS3",
        "Express.js",
        "APIRest",
        "Github",
        "Scrum",
        "PHP",
      ],
      link: "https://github.com/andrezmazo/petshop",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "A personal finance tracking application built with React and Node.js using TypeScript, allowing users to manage and categorize their expenses, track budgets, and visualize their spending habits.",
      category: "Finance",
      image: picExpenseTracker,
      gif: gifExpenseTracker,
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "HTML5",
        "Bootstrap",
        "CSS3",
        "Express.js",
        "Github",
        "APIRest",
      ],
      link: "https://github.com/andrezmazo/expense-tracker",
    },
    {
      id: 3,
      title: "Library Inventory Management",
      description:
        "A web application designed for library or bookstore inventory management. The application offers registered users a secure login and provides functionalities to create, edit, and delete book records, as well as to view product details. The project includes both frontend and backend solutions, ensuring secure authentication and effective product administration.",
      category: "Inventory Management",
      image: picLibreria,
      gif: gifLibreria,
      technologies: [
        "Node.js",
        "MySQL",
        "Sequelize",
        "Express.js",
        "JWT",
        "Swagger",
        "Angular",
        "Angular Material",
        "TypeScript",
        "HTML5",
        "Sass",
        "Github",
        "APIRest",
      ],
      link: "https://github.com/andrezmazo/LibreriaFRONT",
    },
  ];

  return (
    <section ref={props.myRef} className="projects-container" id="Projects">
      <div className="section-box">
        <div className="text-container center">
          <h3 className="title-section">Projects</h3>
          <h2>Some things I've built</h2>
        </div>
        <div className="cards-container">
          {projects.map((project) => (
            <div key={project.id} className="card-wrapper">
              <div className="card-back">
                <div className="card-container">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          hoveredImage === project.id && project.gif
                            ? project.gif
                            : project.image
                        }
                        alt={project.title}
                        title={project.title}
                        onMouseEnter={() => setHoveredImage(project.id)}
                        onMouseLeave={() => setHoveredImage(null)}
                      />
                    </a>
                  ) : (
                    <img
                      src={
                        hoveredImage === project.id && project.gif
                          ? project.gif
                          : project.image
                      }
                      alt={project.title}
                      title={project.title}
                      onMouseEnter={() => setHoveredImage(project.id)}
                      onMouseLeave={() => setHoveredImage(null)}
                    />
                  )}
                  <div className="text-container center">
                    <p>{project.title}</p>
                    <p>{project.category}</p>
                    <p>{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="project-link"
                      >
                        View Project
                      </a>
                    )}
                    <div className="badges-wrapper">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} technology={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
