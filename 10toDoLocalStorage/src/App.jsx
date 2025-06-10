import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/ToDoContexts";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todoMessage) => {
    todos.push();
  };
  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </TodoProvider>
  );
}

export default App;
