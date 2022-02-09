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
      // Give this call a providesTags so if it ever gets invalidate, this call will be recalled again.
      providesTags: [{ type: "Todos", id: "LIST" }],
    }),
    // The first argument, Todo, is the request object, and the second argument, Todo, is the return object
    updateTodo: build.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: "PUT",
          body: todo,
        };
      },
      // Because it got the same value as the providesTags in 'getAll', 'getAll' api will be called again after this call is finished.
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    deleteTodo: build.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: "DELETE",
          body: todo,
        };
      },
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
});
