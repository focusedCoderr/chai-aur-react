import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoObject) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todoObject }]);
  };

  // const deleteTodo = (id) =>
  // 	setTodos(
  // 		todos.filter((eachTodo) => {
  // 			eachTodo.id !== id;
  // 		})
  // 	);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id !== id));
  };

  const updateTodo = (id, todo) => {
    console.log("I will update now");

    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) => {
        console.log(prevTodos.length);

        eachTodo.id === id ? todo : eachTodo;
      })
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length) {
      console.log(
        "Length of array was something other than 0 and some todos should be rendered"
      );
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todos.map((eachTodo) => (
              <div key={eachTodo.id} className="w-full">
                <TodoItem todo={eachTodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
