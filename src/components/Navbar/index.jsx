import "./style.css";
import Button from "../Button";

const Navbar = () => {
  const onClickHandler = () => {
    console.log("hi");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Button onClick={onClickHandler}>Home</Button>
    </div>
  );
};

export default Navbar;
