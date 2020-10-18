import React from "react";
import "./HeaderLayout.css";
import Logo from "../assets/images/databoss_logo.png";
import { Link } from "react-router-dom";

export function HeaderLayout() {
  return (
    <header className="header-fixed">
      <div className="header-limiter">
        <h1>
          <Link to="/home">
            <img alt="logo" src={Logo} className="databoss-logo"></img>
          </Link>
        </h1>

        <nav>
          <a href="#">Login</a>
        </nav>
      </div>
    </header>
  );
}
