import { createContext, useState, useContext } from "react";

export type Item = {
  itemId: number;
  quantity: number;
  price: number;
};

export interface MoneyContextInterface {
  items: Item[];
  setItem: (items: Item[]) => void;
}

const MoneyContext = createContext<MoneyContextInterface>({
  items: [],
  setItem: () => {},
});

export const MoneyProvider = ({ children }) => {
  const [items, setItem] = useState<Item[]>([]);
  console.log(items);
  return (
    <MoneyContext.Provider value={{ items, setItem }}>
      {children}
    </MoneyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMoney = () => useContext(MoneyContext);
