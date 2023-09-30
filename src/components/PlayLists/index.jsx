// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../slices/songsSlice";
import "./style.css";
import { useEffect, useState } from "react";
import { selectedPlayListSongs } from "../../slices/playlistsSlice";
import { useGetAllPlaylistsQuery } from "../../slices/playListApiSlice";

const PlayLists = () => {
  const dispatch = useDispatch();
  const { data: allPlaylists } = useGetAllPlaylistsQuery();
  const [showModal, setShowModal] = useState(false);

  // const { playlists } = useSelector((state) => state.playlists);
  // const navigate = useNavigate();

  // const handlePlaylistClick = (playlistName) => {
  //   dispatch(getSongs({ playlists, playlistName }));
  //   navigate("/playlists");
  // };

  // const renderList = playlists?.map((playlist, index) => {
  //   return (
  //     <div
  //       key={index}
  //       // className={`playListName ${isActive ? "active" : ""}`}
  //       className={`playListName `}
  //       onClick={() => handlePlaylistClick(playlist.name)}
  //     >
  //       {playlist.name}
  //     </div>
  //   );
  // });

  // const { allSongs } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(selectedPlayListSongs([]));
  }, []);

  const renderPlayList = allPlaylists?.playlists?.map((playlist) => {
    return (
      <Link
        to={`/playlist/${playlist.name}`}
        onClick={() => dispatch(selectedPlayListSongs(playlist))}
        key={playlist.id}
      >
        <div className="playListName">{playlist.name}</div>
      </Link>
    );
  });

  return (
    <div className="playList">
      <h2>My Playlists</h2>
      {renderPlayList}
      {/* {renderList} */}
    </div>
  );
};

export default PlayLists;
