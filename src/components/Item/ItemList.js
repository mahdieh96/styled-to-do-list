import React from "react";
import "./ItemList.css";
import { ItemData } from "./ItemData";
export const ItemList = ({ itemData }) => {
  return (
    <div className="item-list">
      {itemData.map((item) => (
        <ItemData data={item} />
      ))}
    </div>
  );
};
