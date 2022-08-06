import React from "react";
import "./components.css";
function Person({ name, img, nickname, occupation, status }) {
  return (
    <section className="card info">
      <img className="img" src={img} alt={name} />
      <p className="titleP">{name}</p>
      <p>{nickname}</p>

      <p className="titleP">Ocupparions</p>
      {occupation.map((job, i) => (
        <p key={i}>{job}</p>
      ))}
      <p className="titleP">Status</p>
      <p>{status}</p>
    </section>
  );
}

export default Person;
