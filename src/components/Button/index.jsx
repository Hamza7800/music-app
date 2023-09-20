import "./style.css";

const Button = ({ onClick, children, iconOnly }) => {
  const buttonClass = `btn  btn-primary ${iconOnly ? "icon-only" : ""}`;

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
