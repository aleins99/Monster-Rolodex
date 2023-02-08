import React from "react";
export default function Card({ monster }) {
  return (
    <div className="monster-card">
      <img
        src={`https://www.robohash.org/${monster.id}/?set=set1`}
        alt={monster.name}
      />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
}
