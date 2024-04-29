import React, { useState } from "react";
import "./Work.scss";
import pic1 from "../img/Petshop.jpg";
import picSatmed from "../img/SATMED.jpg";
import gifSatmed from "../img/gifs/SATMED.gif";
import picAtv from "../img/ATV.jpg";
import picSICARAC from "../img/SISCARAC.png";
import gifAtv from "../img/gifs/ATV.gif";
import Badge from "./Badge";

function Work(props) {
  const atvTechnologies = [
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
    "Scrum",
  ];
  const satmedTechnologies = [
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
  ];
  const siscaracTechnologies = [
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
    ".NET",
    "HTML5",
    "Scrum",
    "Bootstrap",
  ];

  const [satmed, setSatmed] = useState(picSatmed);
  const [atv, setAtv] = useState(picAtv);
  return (
    <section ref={props.myRef} className="work-container" id="Work">
      <div className="section-box">
        <div className="text-container center">
          <h3 className="title-section">Work</h3>
          <h2>Some of the jobs I've contributed to</h2>
        </div>
        <div className="cards-container">
          <div className="card-wrapper">
            <div className="card-back">
              <div className="card-container">
                <img
                  src={atv}
                  title="ATV"
                  onMouseEnter={() => setAtv(gifAtv)}
                  onMouseLeave={() => setAtv(picAtv)}
                />{" "}
                <div className="text-container center">
                  <p>ATV</p>
                  <p>Student platform for universities</p>
                  <p>
                    Development of a web platform for management and creation of
                    tutoring and study groups for the University of Antioquia,
                    and multiple universities in the Aburra Valley, focused on
                    reducing student dropout rates in universities.{" "}
                  </p>
                  <div className="badges-wrapper">
                    {atvTechnologies.map((technology) => (
                      <Badge key={technology} technology={technology} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card-back">
              <div className="card-container">
                <img
                  src={satmed}
                  alt="Andrés Zapata Mazo"
                  onMouseEnter={() => setSatmed(gifSatmed)}
                  onMouseLeave={() => setSatmed(picSatmed)}
                />{" "}
                <div className="text-container center">
                  <p>SATMED</p>
                  <p>Early Warning Platform of Medellin</p>
                  <p>
                    Early warning platform to prevent and address the violation
                    of the rights of children, adolescents, and youth. Taking
                    into account situations of risk prior to violation and, in
                    certain cases, the activation of alerts for the monitoring
                    and restoration of their rights.{" "}
                  </p>
                  <div className="badges-wrapper">
                    {satmedTechnologies.map((technology) => (
                      <Badge key={technology} technology={technology} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card-back">
              <div className="card-container">
                <img src={picSICARAC} title="SISCARAC" />
                <div className="text-container center">
                  <p>SISCARAC</p>
                  <p>Web platform and mobile app for characterization.</p>
                  <p>
                    Web platform and Play Store application for the population
                    characterization registry of Antioquia with Prodepaz.{" "}
                  </p>
                  <div className="badges-wrapper">
                    {siscaracTechnologies.map((technology) => (
                      <Badge key={technology} technology={technology} />
                    ))}
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

export default Work;
