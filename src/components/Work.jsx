import React, { useState } from "react";
import "./Work.scss";
import picSatmed from "../img/logoSATMED.jpg";
import gifSatmed from "../img/gifs/SATMED.gif";
import picAtv from "../img/logoATV.jpg";
import picIcfes from "../img/logoIcfes.jpg";
import gifManual from "../img/gifs/Manual.gif";
import gifCatalogo from "../img/gifs/Catalogo.gif";
import gifEditorial from "../img/gifs/Editorial.gif";

import picEditorial from "../img/logoEditorial.jpg";
import picContraloria from "../img/logoContraloria.jpg";
import gifAtv from "../img/gifs/ATV.gif";
import picSICARAC from "../img/logoSISCARAC.png";
import Badge from "./Badge";

function Work(props) {
  const [hoveredImage, setHoveredImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ICFES Observatory",
      description:
        "A specialized study on the data quality of ICFES's Data Lake, focusing on the analysis and visualization of georeferenced data from academic tests. This project included the development of a landing page in WordPress that allows users to explore results based on specific filters. Various AWS technologies were used to ensure a detailed and reliable analysis of data quality.",
      category: "Data Quality Analisis, Documentaion and a Landing Page",
      image: picIcfes,
      gif: null,
      technologies: [
        "AWS",
        "Athena",
        "DynamoDB",
        "S3",
        "WordPress",
        "Node.js",
        "JavaScript",
        "Python",
        "PowerBI",
        "Data Lake",
        "Data Analysis",
        "QA",
      ],
      link: null,
    },
    {
      id: 2,
      title: "APPUI User Manual",
      description:
        "A webpage for the General Comptroller's Office of Colombia, serving as a detailed user guide for the APPUI platform. This interactive manual explains the system's functionality step by step, designed to be intuitive and accessible. The development followed a collaborative approach with Scrum, ensuring accuracy in requirements analysis and usability.",
      category: "Data Analysis, Requirements Analysis and a landing page",
      image: picContraloria,
      gif: gifManual,
      technologies: [
        "JavaScript",
        "CSS",
        "HTML",
        "Scrum",
        "API Rest",
        "GitHub",
        "Data Analysis",
        "QA",
      ],
      link: "https://www.appui.contraloria.gov.co/manual",
    },
    {
      id: 3,
      title: "APPUI Resource Catalog",
      description:
        "A landing page developed for the General Comptroller's Office of Colombia. This page allows users to view and access the resources of the APPUI application, making it easier for public entities to use and consult relevant information. The project was built with a RESTful architecture and developed in a collaborative environment using agile methodologies.",
      category: "Data Analysis, Requirements Analysis and a landing page",
      image: picContraloria,
      gif: gifCatalogo,
      technologies: [
        "JavaScript",
        "CSS",
        "HTML",
        "Scrum",
        "API Rest",
        "GitHub",
        "Data Analysis",
        "QA",
      ],
      link: "https://www.appui.contraloria.gov.co/catalogue",
    },
    {
      id: 4,
      title: "Editorial Udea",
      description:
        "An integrated inventory and accounting system for the Editorial de la Universidad de Antioquia. This system was designed to optimize inventory control, automate accounting processes, and improve the editorial's administrative management. The project included a thorough requirements analysis and was implemented following agile methodologies (Scrum).",
      category: "Inventory and accounting system",
      image: picEditorial,
      gif: gifEditorial,
      technologies: [
        "Angular",
        "Java",
        "Scrum",
        "TypeScript",
        "HTML",
        "CSS",
        "API Rest",
        "GitHub",
      ],
      link: null,
    },
    {
      id: 5,
      title: "ATV",
      description:
        "Development of a web platform for management and creation of tutoring and study groups for the University of Antioquia, and multiple universities in the Aburra Valley, focused on reducing student dropout rates.",
      category: "Student platform for universities",
      image: picAtv,
      gif: gifAtv,
      technologies: [
        "React",
        "JavaScript",
        "PHP",
        "MySQL",
        "Redux",
        "CSS3",
        "HTML5",
        "Node.js",
        "Express.js",
        "Bootstrap",
        "GoogleAPI",
        "APIRest",
        "Swagger",
        "Scrum",
      ],
      link: null,
    },
    {
      id: 6,
      title: "SATMED",
      description:
        "Early warning platform to prevent and address the violation of the rights of children, adolescents, and youth. It activates alerts for monitoring and restoration of their rights in risk situations.",
      category: "Early Warning Platform of Medellin",
      image: picSatmed,
      gif: gifSatmed,
      technologies: [
        "Vue.js",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "CSS3",
        "Node.js",
        "APIRest",
        "Bootstrap",
        "Express.js",
        "HTML5",
        "Scrum",
      ],
      link: "https://www.medellin.gov.co/satmed/nuevo-caso",
    },
    {
      id: 7,
      title: "SISCARAC",
      description:
        "Web platform and Play Store application for the population characterization registry of Antioquia with Prodepaz.",
      category: "Web platform and mobile app for characterization",
      image: picSICARAC,
      gif: null,
      technologies: [
        "Angular",
        "JavaScript",
        "TypeScript",
        "MySQL",
        ".NET",
        "Ionic",
        "Cordova",
        "Android",
        "PlayStore",
        "CSS3",
        "Node.js",
        "APIRest",
        "Express.js",
        "HTML5",
        "Scrum",
        "Bootstrap",
      ],
      link: null,
    },
  ];

  return (
    <section ref={props.myRef} className="work-container" id="Work">
      <div className="section-box">
        <div className="text-container center">
          <h3 className="title-section">Work</h3>
          <h2>Some of the jobs I've contributed to</h2>
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

export default Work;
