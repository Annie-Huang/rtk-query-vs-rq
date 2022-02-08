import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  // invalidatable tags. Basically define the kind of entity types without your system.
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    // Auto create 4 hooks with the endpoint name:
    //      useGetAllQuery, useGeAllMutation, useLazyGetAllQuery, usePrefetch hooks
    // The first argument, Todo[], is the return object
    getAll: build.query<Todo[], void>({
      query: () => `todos`,
      // I don't understand where is the id: "LIST" coming from as it's not in
      // C:\react\rtk-query-vs-rq\server\src\modules\todos\todo.controller.ts
      providesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
});
