import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	let [counter, setCounter] = useState(0);

	function increaseCounter() {
		if (counter <= 19) {
			setCounter((prevCounter) => {
				return prevCounter + 1;
			});
			setCounter((prevCounter) => prevCounter + 1);
			setCounter((prevCounter) => prevCounter + 1);
			setCounter((prevCounter) => prevCounter + 1);
		}
	}

	function decreaseCounter() {
		if (counter > 0) {
			setCounter(counter - 1);
			setCounter(counter - 1);
			setCounter(counter - 1);
			setCounter(counter - 1);
		}
	}
	return (
		<>
			<h1>Chai aur Gaurav</h1>
			<h2>Counter value: {counter}</h2>
			<button onClick={increaseCounter}>Increase Value {counter}</button>
			<br />
			<br />
			<button onClick={decreaseCounter}>Decrease Value {counter}</button>
			<p>Footer: {counter}</p>
		</>
	);
}

export default App;
