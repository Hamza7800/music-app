import Button from "../Button";
import iconPlay from "../../assets/play.svg";
import iconHeart from "../../assets/heart.svg";
import iconSearch from "../../assets/search_file.svg";
import iconDate from "../../assets/time_and_date.svg";
import "./style.css";

const ActionBar = () => {
  return (
    <div className="actionBar">
      <div className="btns">
        <Button iconOnly onClick={() => {}}>
          <img src={iconPlay} alt="" />
        </Button>
        <Button iconOnly>
          <img src={iconHeart} alt="" onClick={() => {}} />
        </Button>
      </div>
      <div className="btns">
        <Button iconOnly onClick={() => {}}>
          <img src={iconSearch} alt="" />
        </Button>
        <Button>
          <img src={iconDate} alt="" onClick={() => {}} />
          Date Added
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
