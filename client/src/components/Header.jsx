import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
      <header className = "header-container">
        <Link className="header-title" to = "/">
        <h1>GROUP RUN!</h1>
        </Link>
        {/* <img src = "https://www.clipartkey.com/mpngs/m/18-186620_stick-figure-stick-man-running-clip-art-running.png" alt = "running man"/> */}
      </header>
  );
}

export default Header;
