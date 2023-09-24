import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import LikedSongsPage from "./pages/LikedSongsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import LibrarayPage from "./pages/LibrarayPage.jsx";
import CreatePlayList from "./pages/CreatePlayList.jsx";
import PlaylistsPage from "./pages/PlaylistsPage.jsx";
import store from "./store";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="/liked-songs" element={<LikedSongsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/library" element={<LibrarayPage />} />
      <Route path="/create-playlist" element={<CreatePlayList />} />
      <Route path="/playlists" element={<PlaylistsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
