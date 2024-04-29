import "./AccountLimit.style.css";
import { useMoney, Item } from "../../contexts/MoneyContext";

const AccountLimit = () => {
  const { items } = useMoney();

  const limit = 100000000000;

  const totalSum = items.reduce(
    (acc: number, currentValue: Item) =>
      acc + currentValue.price * Number(currentValue.quantity),
    0
  );

  const result = limit - totalSum;
  result < 0 ? false : result;

  return <>{result}</>;
};

export default AccountLimit;
