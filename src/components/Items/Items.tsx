import "./Items.style.css";
import Button from "../Button";
import Input from "../Input";
import { useMoney } from "../../contexts/MoneyContext";

const Items = () => {
  const { items } = useMoney();
  console.log("as" + "asd");
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

// import "./Input.style.css";
// import { useMoney } from "../../contexts/MoneyContext";
// import { SetStateAction, useState, useEffect } from "react";

// interface InputProps {
//   value: string;
//   id: string;
// }

// const Input: React.FC<InputProps> = ({ value, id }) => {
//   const { items, setItems } = useMoney();
//   const [inputValue, setInputValue] = useState<string>(value);

//   useEffect(() => {
//     setInputValue(items[Number(id) - 1].quantity);
//   }, [id, items]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const inputId = parseFloat(event.target.id);
//     const index = items.findIndex((item) => item.id === inputId);
//     const updatedItems = [...items];

//     let newValue = event.target.value || "0";
//     updatedItems[index].quantity = newValue;

//     const totalItemPrice = updatedItems.reduce((acc, currentItem) => acc + currentItem.price * Number(currentItem.quantity), 0);

//     if (totalItemPrice > 100000000000) {
//       updatedItems[index].quantity = "0";
//       newValue = Math.floor((100000000000 - totalItemPrice) / updatedItems[index].price).toString();
//       setInputValue(newValue);
//     }

//     setItems(updatedItems);
//     setInputValue(newValue);
//   };

//   return (
//     <input
//       value={inputValue}
//       id={`${id}-Input`}
//       type="number"
//       onChange={handleChange}
//     />
//   );
// };

// export default Input;
