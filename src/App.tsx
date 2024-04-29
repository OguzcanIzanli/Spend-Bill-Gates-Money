import "./App.css";
import Items from "./components/Items";
import { MoneyProvider } from "./contexts/MoneyContext";
import AccountLimit from "./components/AccountLimit";
import { RemainingMoneyProvider } from "./contexts/RemainingMoneyContext";
import Receipt from "./components/Receipt";

function App() {
  return (
    <RemainingMoneyProvider>
      <MoneyProvider>
        <AccountLimit />
        <Items />
        <Receipt />
      </MoneyProvider>
    </RemainingMoneyProvider>
  );
}

export default App;
