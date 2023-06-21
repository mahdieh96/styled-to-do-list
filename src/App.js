import { useState } from "react";
import { ItemData } from "./components/Item/ItemData";
import { ItemList } from "./components/Item/ItemList";
import { NewItem } from "./components/NewItem/NewItem";
import "./App.css";
function App() {
  const data = [
    { text: "do do sth", id: "1" },
    { text: "else", id: "2" },
  ];
  const [itemData, setItemData] = useState(data);
  let classes = "";
  const addNewItemHandler = (newItem) => {
    setItemData((prev) => {
      return [...prev, { text: newItem, id: Math.random().toString() }];
    });
  };

  const deleteItemHandler = (deletedItemId) => {
    setItemData((prev) => {
      return prev.filter((item) => item.id !== deletedItemId);
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (data.length > 0) {
    content = (
      <ItemList itemData={itemData} deleteItemHandler={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section id="goal-form">
        <NewItem addNewItemHandler={addNewItemHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
