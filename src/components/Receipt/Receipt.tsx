import "./Receipt.style.css";
import { useMoney } from "../../contexts/MoneyContext";
import { useRemainingMoney } from "../../contexts/RemainingMoneyContext";

const Receipt = () => {
  const { items } = useMoney();
  const { remainingMoney } = useRemainingMoney();

  const filteredList = items.filter((item) => {
    return Number(item.quantity) > 0;
  });

  const close = filteredList.length > 0 ? "" : "close";

  const formatPrice = (price) => {
    if (price < 1000) {
      return `$${price}`;
    } else if (price < 1000000) {
      const formatted = (price / 1000).toFixed(1);
      return `$${formatted.replace(/\.0$/, "")}k`;
    } else if (price < 1000000000) {
      const formatted = (price / 1000000).toFixed(1);
      return `$${formatted.replace(/\.0$/, "")}m`;
    } else {
      const formatted = (price / 1000000000).toFixed(1);
      return `$${formatted.replace(/\.0$/, "")}b`;
    }
  };

  const list = filteredList.map((item, index) => (
    <div key={index} className="listContainer">
      <div className="itemName">{item.name}</div>
      <div className="itemQuantity">{`x${item.quantity}`}</div>
      <div className="totalPrice">
        {formatPrice(item.price * Number(item.quantity))}
      </div>
    </div>
  ));

  return (
    <div className={`receiptContainer ${close}`}>
      <h1>Your Receipt</h1>
      {list}
      <div className="resultContainer">
        <p>Total</p>
        <div className="total">{`$${(100000000000 - remainingMoney)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
      </div>
    </div>
  );
};

export default Receipt;
