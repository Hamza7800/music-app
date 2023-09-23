import { useRef, useState } from "react";
import { playAudio, pauseAudio } from "../../slices/songsSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import iconShuffle from "../../assets/shuffle.svg";
import iconPlay from "../../assets/play.svg";
import iconNext from "../../assets/next.svg";
import iconPrev from "../../assets/next.svg";
import iconRepeat from "../../assets/repeat.svg";
import "./styles.css";

const Controls = ({
  audioRef,
  togglePlayPause,
  playSong,
  isPlaying,
  volume,
}) => {
  // const dispatch = useDispatch();
  // const { playSong, isPlaying } = useSelector((state) => state.playSong);
  // const audioRef = useRef(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [remainingDuration, setRemainingDuration] = useState(0);

  // const togglePlayPause = () => {
  //   if (isPlaying) {
  //     console.log("pause");
  //     dispatch(pauseAudio());
  //     audioRef.current.pause();
  //   } else {
  //     console.log("play");
  //     dispatch(playAudio(playSong?.src));
  //     audioRef.current.play();
  //   }
  // };
  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    // Use padStart to ensure two digits for seconds and milliseconds
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${minutes}:${formattedSeconds}`;
  }

  // Update progress bar and skip to clicked position
  function updateProgress(e) {
    const audioElement = e.currentTarget;
    const { duration, currentTime } = audioElement;
    const progressPercent = (currentTime / duration) * 100;
    setProgressPercent(progressPercent);
    const remaining = duration - currentTime;
    setRemainingDuration(formatTime(remaining));
  }

  // Set progress bar and skip audio when clicked
  function setProgress(e) {
    const width = e.currentTarget.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;

    const skipTime = (clickX / width) * duration;
    audioRef.current.currentTime = skipTime;

    // Update progress bar width as well
    const progressPercent = (skipTime / duration) * 100;
    setProgressPercent(progressPercent);
  }

  return (
    <>
      <div className="controls">
        <Button iconOnly onClick={() => {}}>
          <img src={iconShuffle} alt="" />
        </Button>
        <Button iconOnly>
          <img src={iconPrev} alt="" style={{ rotate: "180deg" }} />
        </Button>
        <Button iconOnly onClick={togglePlayPause}>
          <img src={iconPlay} alt="" />
        </Button>
        <Button iconOnly>
          <img src={iconNext} alt="" />
        </Button>
        <Button iconOnly>
          <img src={iconRepeat} alt="" />
        </Button>
      </div>
      <div className="ctrl">
        {playSong?.duration}
        <div
          className="progressContainer"
          id="progressContainer"
          onClick={setProgress}
        >
          <div
            className="progress"
            id="progress"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        {remainingDuration}
      </div>
      <div style={{ display: "none", pointerEvents: "none" }}>
        {playSong && (
          <div>
            <audio
              ref={audioRef}
              key={playSong?.src}
              controls
              autoPlay={isPlaying}
              onTimeUpdate={updateProgress}
              volume={volume}
            >
              <source src={playSong?.src} type="audio/mp3" />
            </audio>
          </div>
        )}
      </div>
    </>
  );
};

export default Controls;
