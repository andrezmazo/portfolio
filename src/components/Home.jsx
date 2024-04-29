import React from "react";
import "./Home.scss";
import { Parallax } from "react-scroll-parallax";

function Home() {
  return (
    <div className="parallax-group" id="Home">
      <Parallax translateY={[-50, 50]} className="parallax-layer sky" />
      <Parallax translateY={[-40, 40]} className="parallax-layer mountains" />
      <Parallax translateY={[-20, 20]} className="parallax-layer buildings1" />
      <Parallax translateY={[0, 0]} className="parallax-layer buildings2" />
      <Parallax translateY={[-60, 60]} className="parallax-layer name-parallax">
        <div className="name-container">
          <h1>Hi, i'm</h1>
          <h1>ANDRÉS</h1>
        </div>
      </Parallax>
      <Parallax
        translateY={[-60, 60]}
        className="parallax-layer lastname-parallax"
      >
        <h1>ZAPATA MAZO</h1>
      </Parallax>
      <div className="parallax-layer gradient"></div>
    </div>
  );
}

export default Home;
