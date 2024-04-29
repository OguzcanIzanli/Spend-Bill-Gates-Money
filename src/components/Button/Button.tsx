import "./Button.style.css";
import { useMoney } from "../../contexts/MoneyContext";
import { useRemainingMoney } from "../../contexts/RemainingMoneyContext";

interface ButtonProps {
  children: string;
  className: string;
  id: string;
}

let newValue: number;

const Button: React.FC<ButtonProps> = ({ children, className, id }) => {
  const { items, setItems } = useMoney();
  const { remainingMoney } = useRemainingMoney();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    const buttonId = parseFloat(target.id);

    const index = items.findIndex((item) => item.id === buttonId);

    const updatedItem = [...items];

    target.innerHTML == "Buy"
      ? (newValue = Number(updatedItem[index].quantity) + 1)
      : Number(updatedItem[index].quantity) > 0
      ? (newValue = Number(updatedItem[index].quantity) + -1)
      : false;

    updatedItem[index].quantity = newValue.toString();
    setItems(updatedItem);
  };

  let sellBtn = "disabledSellBtn";

  if (Number(items[Number(id) - 1].quantity) > 0) {
    sellBtn = "clickableSellBtn";
  }

  let buyBtn = "clickableBuyBtn";

  if (remainingMoney < items[Number(id) - 1].price) {
    buyBtn = "disabledBuyBtn";
  }

  return (
    <button
      className={`${className} ${className == "buyBtn" ? buyBtn : sellBtn}`}
      onClick={handleClick}
      id={`${id}-${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
