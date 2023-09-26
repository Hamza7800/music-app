import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import PlayLists from "../components/PlayLists";
import CurrentPlayingSong from "../components/CurrentPlayingSong";
import Controls from "../components/Controls";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import volumnIcon from "../assets/volumnIcon.svg";
import { fetchLocalData } from "../slices/playlistsSlice";
import { pauseAudio, playAudio } from "../slices/songsSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.playlists);
  const { playSong, isPlaying } = useSelector((state) => state.playSong);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      console.log("pause");
      dispatch(pauseAudio());
      audioRef.current.pause();
    } else {
      console.log("play");
      dispatch(playAudio(playSong?.src));
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLocalData());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleVolumeChange = (e) => {
    const newVolume = e?.target?.value;
    if (newVolume && audioRef.current) {
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    } else {
      return;
    }
  };
  return (
    <div>
      <div className="container">
        <div>
          <Navbar />
          <PlayLists />
        </div>
        {/* <div style={{ width: "100%" }}>
          <PlayListHeader />
          <Divider />
          <ActionBar />
          <Divider />
          <Songs songs={songs} />
        </div> */}
        <Outlet />
      </div>
      <div className="bottom_control_board">
        <CurrentPlayingSong />
        <div className="grid_item1">
          <Controls
            isPlaying={isPlaying}
            playSong={playSong}
            audioRef={audioRef}
            togglePlayPause={togglePlayPause}
            volume={volume}
          />
          {/* <div className="duration">ds</div> */}
          {/* <Divider /> */}
        </div>
        <div className="volumn">
          <Button iconOnly>
            <img src={volumnIcon} alt="" />
          </Button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01" // You can adjust the step value as needed
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
