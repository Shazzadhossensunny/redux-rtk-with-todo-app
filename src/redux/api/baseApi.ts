import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (taskInfo) => ({
        url: `/tasks`,
        method: "POST",
        body: taskInfo,
      }),
    }),
    getTask: builder.query({
      query: () => `/tasks`,
      providesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ id, ...updateTask }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: updateTask,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const { useCreateTaskMutation, useGetTaskQuery, useUpdateTaskMutation } =
  baseApi;
