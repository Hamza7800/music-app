import { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Controls from "./components/Controls";
import CurrentPlayingSong from "./components/CurrentPlayingSong";
import PlayLists from "./components/PlayLists";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocalData } from "./slices/playlistsSlice";
import { pauseAudio, playAudio } from "./slices/songsSlice";
import volumnIcon from "./assets/volumnIcon.svg";
import "./App.css";
import Button from "./components/Button";
// import { Login } from "./pages/login";
// import { Signup } from "./pages/signup";
// import HomePage from "./pages/HomePage";

function App() {
  const { allSongs } = useSelector((state) => state.songs);
  const { selectedPlayListSongs } = useSelector((state) => state.playlists);
  const { id } = useParams();
  const location = useLocation();
  const isPlaylistPage = location.pathname.startsWith("/playlist/");

  const selectedSongsList = isPlaylistPage
    ? selectedPlayListSongs?.playlist_songs?.map((song) => song.song)
    : allSongs;

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.playlists);
  const { playSong, isPlaying } = useSelector((state) => state.playSong);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      dispatch(pauseAudio());
      audioRef.current?.pause();
    } else {
      dispatch(playAudio(playSong?.filePath));
      audioRef.current?.play();
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

  {
    /* <Login /> */
  }
  {
    /* <Signup /> */
  }
  return (
    <div className="app">
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
            songs={selectedSongsList}
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
}

export default App;
