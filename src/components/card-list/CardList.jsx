import React from "react";
import Card from "./Card";
import "./Card.css";

export default function CardList({ monsters }) {
  return (
    <div className="monsters">
      {/* iterate every monster in the monsters object*/}
      {monsters.length === 0 ? (
        <div>
          <h1>No monsters found 😢</h1>
        </div>
      ) : (
        monsters.map((monster) => <Card key={monster.id} monster={monster} />)
      )}
    </div>
  );
}
