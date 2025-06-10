import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todoMessage) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: Date.now(), todoMessage: todoMessage, completed: false },
		]);
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

	return (
		<TodoProvider
			value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
		>
			<h1 class="text-3xl font-bold underline">Hello world!</h1>
		</TodoProvider>
	);
}

export default App;
