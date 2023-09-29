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
    getCurrentUserSongs: builder.query({
      query: () => ({
        url: `${SONGS_URL}/current`,
      }),
      keepUnusedDataFor: 5,
    }),

    createSong: builder.mutation({
      query: (data) => ({
        url: SONGS_URL,
        method: "POST",
        body: data,
      }),
    }),
    updateSong: builder.mutation({
      query: (data) => ({
        url: `${SONGS_URL}/${data.songId}`,
        method: "PUT",
        body: data.body,
      }),
    }),
    deleteSong: builder.mutation({
      query: (data) => ({
        url: `${SONGS_URL}/${data.songId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllSongsQuery,
  useCreateSongMutation,
  useDeleteSongMutation,
  useGetCurrentUserSongsQuery,
  useUpdateSongMutation,
} = songsApiSlice;
