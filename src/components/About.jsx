import React from "react";
import "./About.scss";
import pic from "../img/pic.jpg";

function About(props) {
  return (
    <section ref={props.myRef} className="about-container" id="About">
      <div className="section-box">
        <a
          className="picture-container"
          href="https://www.linkedin.com/in/andrezmazo"
        >
          <img src={pic} className="main-picture" alt="Andrés Zapata Mazo" />
        </a>
        <div className="box-container neu center">
          {/* <div className="small-picture">
            <img src={pic} className="main-picture" alt="Andrés Zapata Mazo" />
          </div> */}
          <div className="text-container center">
            <h3 className="title-section">About me</h3>
            <h2>Hello!</h2>
            <p>
              My name is Andrés, I'm a Full Stack Developer and a Sound
              Engineer. I enjoy creating things as a Web Developer. I have
              qualities of adaptability, determination, leadership and teamwork
              management, which have been my greatest tools in each of the
              projects where I have worked. I'm looking for opportunitties to
              acquire new knowledge to develop myself in new challenges
            </p>
            <p className="center">
              What would life be if we had no courage to attempt anything?
            </p>
            <h5 className="center">- Vincent Van Gogh</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
