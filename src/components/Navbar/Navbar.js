import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navTitle">
          <h1>Where in the world?</h1>
        </a>
        <button className="btn">
          <span className="darkIcon">
            <FontAwesomeIcon icon={faMoon} />
          </span>
          <span className="darkText">Dark Mode</span>
        </button>
      </nav>
    );
  }
}
