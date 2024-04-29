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
    let acceptedNewValue: SetStateAction<string>;
    const newValue = event.target.value;

    if (newValue.charAt(1) == "0") {
      return false;
    } else if (newValue == "") {
      acceptedNewValue = "0";
    } else if (newValue.charAt(0) == "0") {
      acceptedNewValue = newValue.slice(1);
    } else {
      acceptedNewValue = newValue;
    }

    const index = items.findIndex((item) => item.id === inputId);

    const updatedItem = [...items];
    updatedItem[index].quantity = acceptedNewValue;
    setItems(updatedItem);
    setInputValue(acceptedNewValue);
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
