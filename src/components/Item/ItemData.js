import React from "react";
import "./ItemData.css";
export const ItemData = ({ children, id, onDelete }) => {
  const itemClickedHandler = (e) => {
    onDelete(id);
  };
  return (
    <li className="item-data" onClick={itemClickedHandler}>
      {children}
    </li>
  );
};
