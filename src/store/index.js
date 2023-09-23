import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../slices/apiSlice';
import playlistsSliceReducer from '../slices/playlistsSlice';
import { songsSliceReducer, playSongSliceRducer } from '../slices/songsSlice';

const store = configureStore({
  reducer: {
    [ apiSlice.reducerPath ]: apiSlice.reducer,
    playlists: playlistsSliceReducer,
    songs: songsSliceReducer,
    playSong: playSongSliceRducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware),
  devTools: true,
});


export default store;