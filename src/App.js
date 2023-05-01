import { useState } from "react";
import { ItemData } from "./components/Item/ItemData";
import { ItemList } from "./components/Item/ItemList";
import { NewItem } from "./components/NewItem/NewItem";

function App() {
  const data = ["do do sth", "else", "ffv"];
  const [itemData, setItemData] = useState(data);

  const addNewItemHandler = (newItem) => {
    setItemData((prev) => {
      return [...prev, newItem];
    });
  };
  return (
    <div className="container">
      <NewItem addNewItemHandler={addNewItemHandler} />
      <ItemList itemData={itemData} />
    </div>
  );
}

export default App;
