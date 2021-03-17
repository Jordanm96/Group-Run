import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className = "header-container">
      <header>
        <Link className="header-title" to = "/">
        <h1>GROUP RUN!</h1>
        </Link>
        {/* <img src = "https://www.clipartkey.com/mpngs/m/18-186620_stick-figure-stick-man-running-clip-art-running.png" alt = "running man"/> */}
      </header>
    </div>
  );
}

export default Header;
