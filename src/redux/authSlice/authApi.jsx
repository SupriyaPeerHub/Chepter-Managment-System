import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "http://localhost:5000";

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (formData) => ({
        url: '/api/user/login',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
