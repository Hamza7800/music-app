import Button from "../Button";
import iconShuffle from "../../assets/shuffle.svg";
import iconPlay from "../../assets/play.svg";
import iconNext from "../../assets/next.svg";
import iconPrev from "../../assets/next.svg";
import iconRepeat from "../../assets/repeat.svg";
import "./styles.css";

const Controls = () => {
  return (
    <div className="controls">
      <Button iconOnly onClick={() => {}}>
        <img src={iconShuffle} alt="" />
      </Button>
      <Button iconOnly>
        <img src={iconPrev} alt="" style={{ rotate: "180deg" }} />
      </Button>
      <Button iconOnly onClick={() => {}}>
        <img src={iconPlay} alt="" />
      </Button>
      <Button iconOnly>
        <img src={iconNext} alt="" />
      </Button>
      <Button iconOnly>
        <img src={iconRepeat} alt="" />
      </Button>
    </div>
  );
};

export default Controls;
