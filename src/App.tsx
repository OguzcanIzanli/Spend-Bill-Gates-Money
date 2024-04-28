import "./App.css";
import Item from "./components/Item";
import { MoneyProvider } from "./context/MoneyContext";

function App() {
  return (
    <MoneyProvider>
      <Item />
    </MoneyProvider>
  );
}

export default App;
