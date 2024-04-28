import "./Button.style.css";

const Button = ({ children, className, btnAction }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;

    target.innerHTML === "Buy" ? btnAction("buy") : btnAction("sell");
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
