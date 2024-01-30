import React from "react";
import "./Work.scss";
import pic1 from "../img/Petshop.jpg";

function Work(props) {
  return (
    <section ref={props.myRef} className="work-container" id="Work">
      <div className="section-box">
        <div className="text-container center">
          <h3 className="title-section">Work</h3>
          <h2>Some things I've built</h2>
        </div>
        <div className="card-wrapper">
          <div className="card-container neu center">
            <img src={pic1} alt="Andrés Zapata Mazo" />
            <div className="text-container center">
              <p>Petshop</p>
              <p>E-commerce</p>
              <p className="center">
                What would life be if we had no courage to attempt anything?
              </p>
              <h5 className="center">- Vincent Van Gogh</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    //       <h3 className="title-section">Work</h3>
    //       <h2>Some things I've built </h2>
    //       <div className="petshop-container">
    //         <div className="pic-container">
    //           <div className="over-pic"></div>
    //           <img src={pic1} className="pic1" alt="Petshop" />
    //         </div>
    //         <div className="text-petshop">
    //           <h4>Petshop E-commerce</h4>
    //           <p> </p>
    //         </div>
    //       </div>
    //       <p>
    //         My name is Andrés, I'm a Sound Engineer and a Junior Full Stack
    //         Developer. I enjoy creating things as a Web Developer. I have
    //         qualities of adaptability, determination, leadership and teamwork
    //         management, which have been my greatest tools in each of the
    //         projects where I have worked. I'm looking for opportunitties to
    //         acquire new knowledge to develop myself in new challenges
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Work;
