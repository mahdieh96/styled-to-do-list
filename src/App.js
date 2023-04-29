import { ItemData } from "./components/Item/ItemData";
import { ItemList } from "./components/Item/ItemList";
import { NewItem } from "./components/NewItem/NewItem";

function App() {
  const itemData = ["do do sth", "else", "ffv"];

  return (
    <div className="container">
      <NewItem />
      <ItemList itemData={itemData} />
    </div>
  );
}

export default App;
