import { SONGS_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const songsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSongs: builder.query({
      query: () => ({
        url: SONGS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  })
});


export const { useGetAllSongsQuery } = songsApiSlice;
