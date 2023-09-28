import { PLAYLIST_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const playlistsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlaylists: builder.query({
      query: () => ({
        url: PLAYLIST_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  })
});


export const { useGetAllPlaylistsQuery, } = playlistsApiSlice;
