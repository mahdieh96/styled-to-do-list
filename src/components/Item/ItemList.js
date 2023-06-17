import React from "react";
import "./ItemList.css";
import { ItemData } from "./ItemData";
export const ItemList = ({ itemData, deleteItemHandler }) => {
  const itemClickedHandler = (e) => {
    deleteItemHandler(e.currentTarget.id);
  };
  let i = 0;
  return (
    <ul className="item-list">
      {itemData.map((item) => (
        <li className="item-data" onClick={itemClickedHandler} key={i++} id={i}>
          <ItemData data={item} />
        </li>
      ))}
    </ul>
  );
};
