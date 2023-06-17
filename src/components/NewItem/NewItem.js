import React, { useState } from "react";
import "./NewItem.css";
import { Button } from "../UI/Button/Button";
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
      <Button onClick={addGoalHandler} type="submit">
        Add Goal
      </Button>
    </div>
  );
};
