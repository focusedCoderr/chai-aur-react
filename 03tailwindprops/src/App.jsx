import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
	const [count, setCount] = useState(0);
	const myObj = {
		name: "Learn me",
		what: "JS",
		cool: true,
	};

	const notMyObj = {
		name: "Don't Learn",
		what: "Shortcuts",
		cool: false,
	};

	return (
		<>
			<h1 className="bg-amber-700 text-black border p-4 rounded-2xl mb-2">
				Tailwind Test
			</h1>

			<Card name="Gaurav" anObj={myObj} />
			<Card anObj={notMyObj} />
		</>
	);
}

export default App;
