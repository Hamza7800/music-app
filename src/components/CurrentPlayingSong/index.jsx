import { useSelector } from "react-redux";
import "./style.css";
import icon from "../../assets/file_icon_gr.svg";

const CurrentPlayingSong = () => {
  const { playSong } = useSelector((state) => state.playSong);
  return (
    <div className="currentlyPlayingSong">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div>
        <h2>{playSong?.title}</h2>
        <p>{playSong?.artist}</p>
      </div>
    </div>
  );
};

export default CurrentPlayingSong;
