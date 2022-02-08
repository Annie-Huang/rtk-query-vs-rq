import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { todoApi } from "./store";

function TodoApp() {
  const { data: todos } = todoApi.useGetAllQuery();
  return <div className="App">{JSON.stringify(todos)}</div>;
}

function App() {
  return (
    <ApiProvider api={todoApi}>
      <TodoApp />
    </ApiProvider>
  );
}
export default App;
