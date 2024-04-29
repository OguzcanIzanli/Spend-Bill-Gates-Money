import "./App.css";
import Items from "./components/Items";
import { MoneyProvider } from "./contexts/MoneyContext";
import AccountLimit from "./components/AccountLimit";

function App() {
  return (
    <MoneyProvider>
      <AccountLimit />
      <Items />
    </MoneyProvider>
  );
}

export default App;
