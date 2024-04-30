import "./Input.style.css";
import { useMoney } from "../../contexts/MoneyContext";
import { SetStateAction } from "react";

interface InputProps {
  value: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ value, id }) => {
  const { items, setItems } = useMoney();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputId = parseFloat(event.target.id); // Changing input value id
    const index = items.findIndex((item) => item.id === inputId); // Find the data object with index
    const updatedItems = [...items];

    let newValue = event.target.value; // Input value
    updatedItems[index].quantity = newValue; // Update the item quantity in the object array

    const totalItemPrice = updatedItems.reduce(
      // Calculate total price of selected items
      (acc, currentValue) =>
        acc + currentValue.price * Number(currentValue.quantity),
      0
    );

    if (totalItemPrice > 100000000000) {
      // With this if statement, if the input value (quantity of item) is more than purchasing power, newValue calculated again to find maximum value.
      updatedItems[index].quantity = "0"; // Reset the value to add calculated new value

      const totalItemPrice = items.reduce(
        (acc, currentValue) =>
          acc + currentValue.price * Number(currentValue.quantity),
        0
      );
      newValue = Math.floor(
        (100000000000 - totalItemPrice) / updatedItems[index].price
      ).toString();
    }

    let acceptedNewValue: SetStateAction<string>;
    if (newValue == "") {
      acceptedNewValue = "0";
    } else if (newValue.charAt(0) == "0" || newValue.charAt(0) == "-") {
      acceptedNewValue = newValue.slice(1);
    } else {
      acceptedNewValue = newValue;
    }

    updatedItems[index].quantity = acceptedNewValue;
    setItems(updatedItems);
  };

  return (
    <input
      value={value}
      id={`${id}-Input`}
      type="number"
      onChange={handleChange}
    />
  );
};

export default Input;
