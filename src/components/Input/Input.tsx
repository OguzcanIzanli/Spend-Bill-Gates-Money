import "./Input.style.css";
import { useMoney } from "../../contexts/MoneyContext";
import { SetStateAction, useState } from "react";
import { useEffect } from "react";

interface InputProps {
  value: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ value, id }) => {
  const { items, setItems } = useMoney();

  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    setInputValue(items[Number(id) - 1].quantity);
  }, [id, items]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputId = parseFloat(event.target.id);
    const index = items.findIndex((item) => item.id === inputId);

    const updatedItems = [...items];
    let newValue = event.target.value;
    updatedItems[index].quantity = newValue;

    const totalItemPrice = updatedItems.reduce(
      (acc, currentValue) =>
        acc + currentValue.price * Number(currentValue.quantity),
      0
    );

    if (totalItemPrice > 100000000000) {
      updatedItems[index].quantity = "0";
      console.log(updatedItems);
      const totalItemPrice = items.reduce(
        (acc, currentValue) =>
          acc + currentValue.price * Number(currentValue.quantity),
        0
      );
      newValue = Math.floor(
        (100000000000 - totalItemPrice) / updatedItems[index].price
      ).toString();

      setInputValue(newValue);
      updatedItems[index].quantity = newValue;

      return setItems(updatedItems);
    }

    let acceptedNewValue: SetStateAction<string>;
    if (newValue == "") {
      acceptedNewValue = "0";
    } else if (newValue.charAt(0) == "0") {
      acceptedNewValue = newValue.slice(1);
    } else {
      acceptedNewValue = newValue;
    }

    updatedItems[index].quantity = acceptedNewValue;
    setInputValue(acceptedNewValue);
    setItems(updatedItems);
  };

  return (
    <input
      value={inputValue}
      id={`${id}-Input`}
      type="number"
      onChange={handleChange}
    />
  );
};

export default Input;
