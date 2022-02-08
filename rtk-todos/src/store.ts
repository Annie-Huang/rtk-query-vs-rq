import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  // invalidatable tags. Basically define the kind of entity types without your system.
  tagTypes: ["Todos"],
});
