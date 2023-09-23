import { createSlice } from '@reduxjs/toolkit';


const songsSlice = createSlice({
  name: 'songs',
  initialState: { songs: [], currentPlayList: null },
  reducers: {
    getSongs: (state, action) => {
      const { playlistName, playlists } = action.payload;
      const selectedPlaylistName = playlistName;
      const selectedPlaylist = playlists.find(
        (playlist) => playlist.name === selectedPlaylistName
      );

      if (selectedPlaylist) {
        state.songs = selectedPlaylist.songs;
        state.currentPlayList = selectedPlaylist;
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
    currentSongIndex: 0
  },
  reducers: {
    playSong: (state, action) => {
      state.playSong = action.payload.song;
      state.currentSongIndex = action.payload.index;
    },
    playAudio: (state) => {
      state.isPlaying = true;
    },
    pauseAudio: (state) => {
      state.isPlaying = false;
    },

    nextSong: (state, action) => {
      const { currentSongIndex } = state;
      const nextIndex = currentSongIndex + 1;

      if (nextIndex < action.payload.songs.length) {
        state.currentSongIndex = nextIndex;
        state.playSong = action.payload.songs[ nextIndex ];
      } else {
        state.currentSongIndex = 0;
      }
    },

    pervSong: (state, action) => {
      const { currentSongIndex } = state;
      const nextIndex = currentSongIndex - 1;

      if (nextIndex >= 0) {
        state.currentSongIndex = nextIndex;
        state.playSong = action.payload.songs[ nextIndex ];
      } else {
        state.currentSongIndex = 0;
        state.playSong = action.payload.songs[ 0 ];
      }
    }
  }
});

export const { getSongs } = songsSlice.actions;
export const { playSong, pauseAudio, playAudio, nextSong, pervSong } = playSongSlice.actions;

export const songsSliceReducer = songsSlice.reducer;
export const playSongSliceRducer = playSongSlice.reducer;
