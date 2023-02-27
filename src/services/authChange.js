import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  //   tagTypes: ['Contacts'],

  endpoints: build => ({
    changeContact: build.mutation({
      query: ({ contactId, ...contact }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: contact,
      }),
      // invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useChangeContactMutation } = contactApi;
