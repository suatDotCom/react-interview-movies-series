import React from "react";
import "./ContentLayout.css";

export function ContentLayout(props) {
  const { children } = props;

  return <div className="content">{children}</div>;
}
