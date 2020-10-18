import React from "react";
import { Card } from "../../components/Card/Card";
import "./Home.css";
import MoviesThumb from "../../assets/images/movies_thumb.jpg";
import SeriesThumb from "../../assets/images/series_thumb.jpg";

const categories = [
  {
    title: "Movies",
    thumbImage: MoviesThumb,
    description: "best movies",
    redirectPath: "/movies",
  },
  {
    title: "Series",
    thumbImage: SeriesThumb,
    description: "best series",
    redirectPath: "/series",
  },
];
export function Home() {
  const cards = categories.map((item, key) => {
    return <Card {...item} key={key} />;
  });
  return <div className="categories">{cards}</div>;
}
