import React, { useCallback } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Todo, todoApi } from "./store";

function TodoApp() {
  const { data: todos } = todoApi.useGetAllQuery();
  const [deleteTodo] = todoApi.useDeleteTodoMutation();
  const [updateTodo] = todoApi.useUpdateTodoMutation();

  const onToggle = useCallback(
    (todo: Todo) => updateTodo({ ...todo, done: !todo.done }),
    [updateTodo]
  );

  const onDelete = useCallback((todo: Todo) => deleteTodo(todo), [deleteTodo]);

  // return <div className="App">{JSON.stringify(todos)}</div>;
  return (
    <div className="App">
      <div className="todos">
        {todos?.map((todo) => (
          <React.Fragment key={todo.id}>
            <div>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => {
                  onToggle(todo);
                }}
              />
              <span>{todo.text}</span>
            </div>
            <button
              onClick={() => {
                onDelete(todo);
              }}
            >
              Delete
            </button>
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
