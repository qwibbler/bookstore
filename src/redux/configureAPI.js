import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QxcBzIB2XstvQp9Xqxd/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    // postBook: builder.query({
    //   query: (newBook) => {url: '/book'; method: 'POST'; body: newBook}
    // })
  }),
});

export const { useGetPostsQuery } = apiSlice;
