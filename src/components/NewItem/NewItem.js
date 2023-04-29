import React from "react";
import "./NewItem.css";
export const NewItem = () => {
  return (
    <div className="new-item">
      <h2 className="new-item__title">Course Goal</h2>
      <input className="new-item__data" />
      <button className="new-item__button">Add Goal</button>
    </div>
  );
};
