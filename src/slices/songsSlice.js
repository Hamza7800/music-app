import { createSlice } from '@reduxjs/toolkit';


const songsSlice = createSlice({
  name: 'songs',
  initialState: { songs: [] },
  reducers: {
    getSongs: (state, action) => {
      const { playlistName, playlists } = action.payload;
      const selectedPlaylistName = playlistName;
      const selectedPlaylist = playlists.find(
        (playlist) => playlist.name === selectedPlaylistName
      );

      if (selectedPlaylist) {
        state.songs = selectedPlaylist.songs;
      } else {
        state.songs = [];
      }
    },
    playSong: (state, action) => {
      console.log(action.payload);
    }
  },
});

const playSongSlice = createSlice({
  name: 'song',
  initialState: {
    playSong: null,
    isPlaying: false,
  },
  reducers: {
    playSong: (state, action) => {
      state.playSong = action.payload;
    },
    playAudio: (state) => {
      state.isPlaying = true;
    },
    pauseAudio: (state) => {
      state.isPlaying = false;
    },
  }
});

export const { getSongs } = songsSlice.actions;
export const { playSong, pauseAudio, playAudio } = playSongSlice.actions;

export const songsSliceReducer = songsSlice.reducer;
export const playSongSliceRducer = playSongSlice.reducer;
