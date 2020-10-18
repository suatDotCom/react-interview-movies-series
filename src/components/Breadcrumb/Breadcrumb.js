import React, { useState, useEffect } from "react";
import "./Breadcrumb.css";
import { useHistory, useLocation } from "react-router-dom";

export function Breadcrumb(props) {
  const location = useLocation();

  return (
    <div className="functionalities">
      <ul id="breadcrumb" className="breadcrumb">
        <li></li>
        <li className="active">
          <strong>{location.pathname.replace("/", "")}</strong>
        </li>
      </ul>
    </div>
  );
}
