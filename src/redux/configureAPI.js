
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QxcBzIB2XstvQp9Xqxd/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;