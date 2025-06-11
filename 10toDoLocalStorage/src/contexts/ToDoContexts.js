import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todoObject) => {},
  updateTodo: (id, todoObject) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
