import React from "react";
import "./Experience.scss";
import pic from "../img/pc-pic.png";

function Experience() {
  return (
    <section className="experience-container" id="Experience">
      <div className="section-box">
        <div className="box-container neu center">
          <div className="text-container center">
            <h3 className="title-section">Experience</h3>
            <h2>Some technologies i've worked with </h2>
            <div className="list">
              <div>
                <h3>Front End technologies:</h3>
                <ul>
                  <li>JavaScript.</li>
                  <li>React js.</li>
                  <li>Angular.</li>
                  <li>Html.</li>
                  <li>CSS.</li>
                  <li>Sass.</li>
                  <li>Bootstrap.</li>
                </ul>
              </div>
              <hr />
              <div>
                <h3> Back End technologies:</h3>
                <ul>
                  <li>JavaScript.</li>
                  <li>Node.JS.</li>
                  <li>MySQL</li>
                  <li>Java.</li>
                  <li>PHP.</li>
                  <li>MongoDb.</li>
                  <li>MySQL.</li>
                  <li>Express js.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="picture-container">
          <img src={pic} className="main-picture" alt="Andrés Zapata Mazo" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
