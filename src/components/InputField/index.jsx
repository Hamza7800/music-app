import "./style.css";

const InputField = ({ placeholder, type, name }) => {
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default InputField;
