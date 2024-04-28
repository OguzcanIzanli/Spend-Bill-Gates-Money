import "./Input.style.css";
import { useMoney } from "../../context/MoneyContext";
import { useState, ChangeEvent } from "react";

interface InputProps {
  dataId: number;
  price: number;
}

const Input: React.FC<InputProps> = ({ dataId, price }) => {
  const { items, setItem } = useMoney();
  const [value, setValue] = useState<string>("0");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(event.target.value, 10);

    if (isNaN(newValue) || newValue == 0) {
      newValue = 0;
      return false;
    }
    setValue(newValue.toString());

    const index = items.findIndex((item) => item.itemId === dataId);

    if (index !== -1) {
      // If the item exists, update its quantity
      const updatedItem = [...items];
      updatedItem[index].quantity = newValue;
      setItem(updatedItem);
    } else {
      // If the item does not exist, add it to the array
      setItem([...items, { itemId: dataId, quantity: newValue, price: price }]);
    }
  };

  return <input type="number" value={value} onChange={handleChange} />;
};

export default Input;
