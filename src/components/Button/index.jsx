import "./style.css";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={`btn btn-primary`}>
      {children}
    </button>
  );
};

export default Button;
