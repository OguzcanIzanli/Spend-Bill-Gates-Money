import "./AccountLimit.style.css";
import { useRemainingMoney } from "../../contexts/RemainingMoneyContext";
import { useMoney } from "../../contexts/MoneyContext";
import { useEffect } from "react";

const AccountLimit = () => {
  const { remainingMoney, setRemainingMoney } = useRemainingMoney();
  const { items } = useMoney();

  const limit = 100000000000;

  useEffect(() => {
    const totalSum = items.reduce(
      (acc, currentValue) =>
        acc + currentValue.price * Number(currentValue.quantity),
      0
    );
    setRemainingMoney(limit - totalSum);
  }, [items, setRemainingMoney]);

  return (
    <div className="accountContainer">
      <div className="remainingMoneyContainer">
        <div className="remainingMoney">{`$${remainingMoney}`}</div>
      </div>
    </div>
  );
};

export default AccountLimit;

// .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
