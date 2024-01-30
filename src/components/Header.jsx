import React, {useState, useEffect} from "react";
import "./Header.scss";

function Header() {
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
         let moving = window.pageYOffset
         setVisible( moving < 250 || moving < position);
         setPosition(moving)
        
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
  })


const headerHandler = position === 0 ? "site-header hide-bar" : ( visible ? "site-header" : "hidden")


  return (
    <header className={headerHandler}>
      {/* // <header className= "site-header" style={{top:{headerHandler}}} > */}
      <h2>
        {" "}
        <a href="#Home"> AZM</a>
      </h2>
      <ul>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Work">Work</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <a href="/CV-Andrés Zapata Mazo.pdf" className="btn-resume">
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
