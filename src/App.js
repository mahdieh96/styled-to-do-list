import { ItemData } from "./components/Item/ItemData";
import { ItemList } from "./components/Item/ItemList";

function App() {
  const itemData = ["do do sth", "else", "ffv"];
  return <ItemList itemData={itemData} />;
}

export default App;
