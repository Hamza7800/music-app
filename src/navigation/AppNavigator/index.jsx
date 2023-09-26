import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import LikedSongsPage from "../../pages/LikedSongsPage";
import SearchPage from "../../pages/SearchPage";
import LibrarayPage from "../../pages/LibrarayPage";
import CreatePlayList from "../../pages/CreatePlayList";
import PlaylistsPage from "../../pages/PlaylistsPage";

export const AppNavigator = () => {
  return (
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="/liked-songs" element={<LikedSongsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/library" element={<LibrarayPage />} />
      <Route path="/create-playlist" element={<CreatePlayList />} />
      <Route path="/playlists" element={<PlaylistsPage />} />
    </Route>
  );
};
