import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export function Card(props) {
  const { title, redirectPath, description, thumbImage } = props;

  return (
    <div className="item">
      <Link to={redirectPath ? redirectPath: "#" } className="card">
      <div
          className="thumb"
          style={{ backgroundImage: `url(${thumbImage})` }}
        ></div>
        <article>
          <h1>{title}</h1>
          <span>{description}</span>
        </article>

      </Link>
    </div>
  );
}
