import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostType } from "./posts.types";
import { User, UserTag } from "./user.types";

export const getApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPostsByName: builder.query<PostType[], string>({
      query: (name) => `${name}`,
    }),
    getUserByName: builder.query<User[], string>({
      query: (name) => `users?username=${name}`,

      providesTags: (result): UserTag[] =>
        result ? [{ type: "User", id: result[0]?.id }] : [],
    }),
  }),
});

export const {
  useGetPostsByNameQuery,
  useGetUserByNameQuery,
  useLazyGetUserByNameQuery,
  util: { invalidateTags },
} = getApi;
