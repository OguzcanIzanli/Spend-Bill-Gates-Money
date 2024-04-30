import "./Items.style.css";
import Button from "../Button";
import Input from "../Input";
import { useMoney } from "../../contexts/MoneyContext";

const Items = () => {
  const { items } = useMoney();

  return (
    <div className="container">
      {items.map((item) => (
        <div key={item.id} className="itemContainer">
          <img src={item.img} alt={item.name} height={100} />
          <h2>{item.name}</h2>
          <p>${item.price}</p>

          <div className="itemBtns">
            <Button id={item.id} className="sellBtn">
              Sell
            </Button>

            <Input id={item.id} value={item.quantity} />

            <Button id={item.id} className="buyBtn">
              Buy
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
