import React, { useState } from "react";
import "./NewItem.css";
import { Button } from "../UI/Button/Button";
export const NewItem = (props) => {
  const [newItem, setNewItem] = useState("");
  const [isValid, setIsValid] = useState(true);
  console.log(isValid);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (newItem.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.addNewItemHandler(newItem);
  };
  const addDataHandler = (e) => {
    if (e.target.value.length > 0) setIsValid(true);
    setNewItem(e.target.value);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input onChange={addDataHandler} type="text" />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
