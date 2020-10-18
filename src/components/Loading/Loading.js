import React, { Fragment } from "react";
import Logo from "../../assets/images/databoss_logo.png";
import "./Loading.css";

export function Loading(Component) {
  return (
    <Fragment>
      <div className="overlay"></div>
      <div className="loading-wrapper">
        <img src={Logo} alt="logo" />
      </div>
    </Fragment>
  );
}
