import "./style.css";
import icon from "../../assets/file_icon_gr.svg";

const CurrentPlayingSong = ({
  name = "My Heart Will Go On",
  artist = "Celine Dion",
}) => {
  return (
    <div className="currentlyPlayingSong">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default CurrentPlayingSong;
