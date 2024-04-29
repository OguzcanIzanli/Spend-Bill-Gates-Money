import "./Button.style.css";
import { Item, useMoney } from "../../contexts/MoneyContext";

interface ButtonProps {
  children: string;
  className: string;
  id: string;
}

let newValue: number;

const Button: React.FC<ButtonProps> = ({ children, className, id }) => {
  const { items, setItems } = useMoney();

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

  const limit = 100000000000;

  const totalSum = items.reduce(
    (acc: number, currentValue: Item) =>
      acc + currentValue.price * Number(currentValue.quantity),
    0
  );

  let buyBtn = "clickableBuyBtn";

  const result = limit - totalSum;
  console.log(result);
  if (result < items[Number(id) - 1].price) {
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
