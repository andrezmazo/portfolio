import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import SideEmail from "./SideEmail";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Work from "./Work";
import { ParallaxProvider } from "react-scroll-parallax";

import "./App.scss";
import useLocalStorage from "use-local-storage";
import ParticlesBackground from "./ParticlesBackground";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
      console.log("entry", entry);
    });
    observer.observe(myRef.current);
    // console.log("myRef",myRef.current)´´ '
  });
  // const square = document.querySelector(".square");
  // square.classList.remove("square-transition");

  // // Create the observer, same as before:
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       square.classList.add("square-transition");
  //       return;
  //     }

  //     square.classList.remove("square-transition");
  //   });
  // });

  // observer.observe(document.querySelector(".square-wrapper"));

  return (
    <React.Fragment>
      <div data-theme={theme}>
        <ParallaxProvider>
          {/* <button className="switch" onClick={switchTheme}></button> */}
          <Header />
          <SideEmail />
          <Home />
          <About myRef={myRef} />
          <Experience />
          <Work />
          <Contact />
          {/* <ParticlesBackground/> */}
        </ParallaxProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
