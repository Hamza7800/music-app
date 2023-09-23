import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLocalData = createAsyncThunk(
  "data/fetchLocalData",
  async () => {
    const response = await fetch("/songs.json");
    const data = await response.json();
    return data;

  }
);

const playListSlice = createSlice({
  name: "data",
  initialState: {
    playlists: [],
    status: "idle",
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocalData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocalData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.playlists = action.payload.playlists;
      })
      .addCase(fetchLocalData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});



export default playListSlice.reducer;
