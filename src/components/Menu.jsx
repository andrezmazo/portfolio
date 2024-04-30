import React from "react";
import "./Menu.scss";

function Menu() {
  return (
    <nav className="menu">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      ></link>
      <input
        type="checkbox"
        href="#"
        className="menu-open"
        name="menu-open"
        id="menu-open"
      />
      <label className="menu-open-button" for="menu-open">
        <span className="lines line-1"></span>
        <span className="lines line-2"></span>
        <span className="lines line-3"></span>
      </label>

      <a title="Resume" href="/CV-AndresZapataMazo.pdf" className="menu-item">
        {" "}
        <i className="fa fa-file"></i>{" "}
      </a>
      <a title="Contact" href="#Contact" className="menu-item">
        {" "}
        <i className="fa fa-envelope"></i>{" "}
      </a>
      <a title="Projects" href="#Projects" className="menu-item">
        {" "}
        <i className="fa fa-laptop"></i>{" "}
      </a>
      <a title="Work" href="#Work" className="menu-item">
        {" "}
        <i className="fa fa-briefcase"></i>{" "}
      </a>
      <a title="Technologies" href="#Technologies" className="menu-item">
        <i className="fa fa-tools"></i>{" "}
      </a>
      <a title="About me" href="#About" className="menu-item">
        {" "}
        <i className="fa fa-smile"></i>{" "}
      </a>
      <a title="Home" href="#Home" className="menu-item">
        {" "}
        <i className="fa fa-home"></i>{" "}
      </a>
    </nav>
  );
}

export default Menu;
