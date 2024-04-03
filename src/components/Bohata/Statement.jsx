import React from "react";
import "./Statement.css"

export default function Statement(props) {
  return (
    <>
      <section className="bohata-statement-section">
        <h2>{props.quote}</h2>
        <p>{props.date}</p>
      </section>
    </>
  );
}
