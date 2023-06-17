import React from "react";
import "./ItemList.css";
import { ItemData } from "./ItemData";
export const ItemList = ({ itemData, deleteItemHandler }) => {
  return (
    <ul className="item-list">
      {itemData.map((item) => (
        <ItemData onDelete={deleteItemHandler} key={item.key} id={item.id}>
          {item.text}
        </ItemData>
      ))}
    </ul>
  );
};
