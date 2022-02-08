import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { todoApi } from "./store";

function TodoApp() {
  return <div className="App"></div>;
}

function App() {
  return (
    <ApiProvider api={todoApi}>
      <TodoApp />
    </ApiProvider>
  );
}
export default App;
