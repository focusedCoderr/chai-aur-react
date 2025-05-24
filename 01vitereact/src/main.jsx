import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
function MyApp() {
	return (
		<div>
			<h1>CustomApp is star</h1>
		</div>
	);
}

const reactElement = {
	type: "a",
	props: {
		href: "https://google.com",
		target: "_blank",
	},
	children: "Click me to visit google",
};

const anotherElement = (
	<a href="https://www.google.com" target="_blank">
		Click me I am cool
	</a>
);

const anotherReactElement = React.createElement(
	"a",
	{ href: "https://google.com", target: "_blank" },
	"Do not waste your time here"
);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
