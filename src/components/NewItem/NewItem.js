import React, { useState } from "react";
import "./NewItem.css";
export const NewItem = (props) => {
  const [newItem, setNewItem] = useState("");
  const addGoalHandler = () => {
    props.addNewItemHandler(newItem);
    setNewItem("");
  };
  const addDataHandler = (e) => {
    setNewItem(e.target.value);
  };
  return (
    <div className="new-item">
      <h2 className="new-item__title">Course Goal</h2>
      <input
        className="new-item__data"
        onChange={addDataHandler}
        value={newItem}
      />
      <button className="new-item__button" onClick={addGoalHandler}>
        Add Goal
      </button>
    </div>
  );
};
