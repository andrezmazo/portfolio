import React from "react";
import "./Technologies.scss";
import pic from "../img/pc-pic.png";

function Technologies() {
  return (
    <section className="technologies-container" id="Technologies">
      <div className="section-box">
        <div className="box-container neu center">
          <div className="text-container center">
            <h3 className="title-section">Technologies</h3>
            <h2>Some technologies i've worked with </h2>
            <div className="list">
              <div>
                <h3>Front End technologies:</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React Js</li>
                  <li>Angular</li>
                  <li>Html</li>
                  <li>CSS</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <hr />
              <div>
                <h3> Back End technologies:</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Node.JS</li>
                  <li>MySQL</li>
                  <li>Redux</li>
                  <li>Express js</li>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>MongoDb</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a className="picture-container" href="https://github.com/andrezmazo">
          <img src={pic} className="main-picture" alt="Hocus" id="hocus-pic" />
        </a>
      </div>
    </section>
  );
}

export default Technologies;
