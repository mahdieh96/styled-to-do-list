import React, { useState } from "react";
import "./NewItem.css";
import { Button } from "../UI/Button/Button";
export const NewItem = (props) => {
  const [newItem, setNewItem] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.addNewItemHandler(newItem);
  };
  const addDataHandler = (e) => {
    setNewItem(e.target.value);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input onChange={addDataHandler} type="text" />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
