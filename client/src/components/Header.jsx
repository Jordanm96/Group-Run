import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <header className="header-container">
      <Link className="header-title" to="/">
        <h1 className="group-run-title">GROUP RUN!</h1>
      </Link>
      <div className="create-new">
        <Link id="add-button" to="/add">
          <h3 className = "add-run">Add Run</h3>
        </Link>
      </div>
      {/* <img src = "https://www.clipartkey.com/mpngs/m/18-186620_stick-figure-stick-man-running-clip-art-running.png" alt = "running man"/> */}
    </header>
  );
}

export default Header;
