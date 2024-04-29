import { createContext, useState, useContext } from "react";

export interface RemainingMoneyContextInterface {
  remainingMoney: number;
  setRemainingMoney: (remainingMoney: number) => void;
}

const RemainingMoneyContext = createContext<RemainingMoneyContextInterface>({
  remainingMoney: Number(),
  setRemainingMoney: () => {},
});

export const RemainingMoneyProvider = ({ children }) => {
  const [remainingMoney, setRemainingMoney] = useState<number>(100000000000);

  return (
    <RemainingMoneyContext.Provider
      value={{ remainingMoney, setRemainingMoney }}
    >
      {children}
    </RemainingMoneyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRemainingMoney = () => useContext(RemainingMoneyContext);
