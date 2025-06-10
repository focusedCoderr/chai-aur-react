import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todoMessage) => {},
  updateTodo: (id, todoMessage) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
