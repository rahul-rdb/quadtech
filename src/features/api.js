import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: `api`,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tvmaze.com",
  }),
  endpoints: (build) => ({
    movieList: build.query({
      query: () => `/search/shows?q=all`,
    }),
    singleMovie: build.query({
      query: (id) => `/shows/${id}`,
    }),
  }),
});

export const { useMovieListQuery, useSingleMovieQuery } = api;
