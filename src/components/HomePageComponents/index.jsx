import { Link } from "react-router-dom";
import { selectedPlayListSongs } from "../../slices/playlistsSlice";
import { useDispatch } from "react-redux";
import "./style.css";

const HomePageComponents = ({ allPlaylists }) => {
  const dispatch = useDispatch();
  const renderList = allPlaylists?.map((playlist) => {
    return (
      <Link
        to={`/playlist/${playlist.name}`}
        onClick={() => dispatch(selectedPlayListSongs(playlist))}
        key={playlist.id}
      >
        <div className="playlist">{playlist.name}</div>
      </Link>
    );
  });

  return (
    <>
      <h2>PlayLists</h2>
      <div className="pList">{renderList}</div>
    </>
  );
};

export default HomePageComponents;
