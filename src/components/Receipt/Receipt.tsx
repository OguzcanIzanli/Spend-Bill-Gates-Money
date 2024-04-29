import "./Receipt.style.css";
import { useMoney } from "../../contexts/MoneyContext";

const Receipt = () => {
  const { items } = useMoney();

  return <div className="receiptContainer">Receipt</div>;
};

export default Receipt;
