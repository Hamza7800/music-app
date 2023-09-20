import data from "../../../public/data.json";
import "./style.css";

const Songs = () => {
  const { tracks } = data;
  console.log(tracks);

  const formatDuration = (duration_ms) => {
    const seconds = Math.floor((duration_ms / 1000) % 60);
    const minutes = Math.floor((duration_ms / (1000 * 60)) % 60);
    const hours = Math.floor((duration_ms / (1000 * 60 * 60)) % 24);

    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const renderList = tracks.map((track) => {
    return (
      <div className="song-row songs" key={track.id}>
        <span className="song-column id-column">{track.id}</span>
        <span className="song-column title-column">{track.name}</span>
        <span className="song-column album-column">{track.album}</span>
        <span className="song-column date-added-column">
          {track.date_added}
        </span>
        <span className="song-column duration-column">
          {formatDuration(track.duration_ms)}
        </span>
      </div>
    );
  });

  return (
    <div>
      {/* Header row */}
      <div className="song-row header-row">
        <span className="song-column id-column">#</span>
        <span className="song-column title-column">Title</span>
        <span className="song-column album-column">Album</span>
        <span className="song-column date-added-column">Date Added</span>
        <span className="song-column duration-column">Duration</span>
      </div>
      {/* Data rows */}
      {renderList}
    </div>
  );
};

export default Songs;
