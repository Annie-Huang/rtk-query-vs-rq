import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { todoApi } from "./store";

function TodoApp() {
  const { data: todos } = todoApi.useGetAllQuery();

  // return <div className="App">{JSON.stringify(todos)}</div>;
  return (
    <div className="App">
      <div className="todos">
        {todos?.map((todo) => (
          <React.Fragment key={todo.id}>
            <div>
              <input type="checkbox" checked={todo.done} onChange={() => {}} />
              <span>{todo.text}</span>
            </div>
            <button onClick={() => {}}>Delete</button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <ApiProvider api={todoApi}>
      <TodoApp />
    </ApiProvider>
  );
}
export default App;
