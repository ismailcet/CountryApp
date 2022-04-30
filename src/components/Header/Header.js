import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="searchInput">
          <label htmlFor="search-country" className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input
            type="text"
            id="search-country"
            placeholder="Search for a country"
            className="searchBox"
          ></input>
        </div>
        <select className="selectionBox">
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Remove Selection" defaultValue>
            Filter by Region
          </option>
        </select>
      </header>
    );
  }
}
