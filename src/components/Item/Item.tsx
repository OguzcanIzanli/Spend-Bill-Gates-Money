import data from "../../data.json";
import "./Item.style.css";
import Button from "../Button";
import Input from "../Input";
// import { useState } from "react";

const Item = () => {
  // const [btnAction, setBtnAction] = useState("");

  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.id} className="itemContainer">
          <img src={item.img} alt={item.name} height={100} />
          <h2>{item.name}</h2>
          <p>${item.price}</p>

          <div className="itemBtns">
            <Button dataId={item.id} className="sellBtn">
              Sell
            </Button>

            <Input dataId={item.id} price={item.price} />

            <Button dataId={item.id} className="buyBtn">
              Buy
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
