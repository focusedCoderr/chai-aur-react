import { useState } from "react";

function App() {
	const [color, setcolor] = useState("olive");

	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}
		>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
					<button
						onClick={() => setcolor("red")}
						className="w-20 outline-none px-2 py-2 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "red",
						}}
					>
						Red
					</button>

					<button
						onClick={() => setcolor("green")}
						className="w-20 outline-none px-2 py-0 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "green",
						}}
					>
						Green
					</button>

					<button
						onClick={() => setcolor("blue")}
						className="w-20 outline-none px-2 py-0 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "blue",
						}}
					>
						Blue
					</button>

					<button
						onClick={() => setcolor("olive")}
						className="w-20 outline-none px-2 py-0 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "olive",
						}}
					>
						Olive
					</button>

					<button
						onClick={() => setcolor("grey")}
						className="w-20 outline-none px-2 py-0 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "grey",
						}}
					>
						Grey
					</button>

					<button
						onClick={() => setcolor("yellow")}
						className="w-20 outline-none px-2 py-0 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "yellow",
						}}
					>
						Yellow
					</button>

					<button
						onClick={() => setcolor("pink")}
						className="w-20 outline-none px-2 py-0 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "pink",
						}}
					>
						Pink
					</button>

					<button
						onClick={() => setcolor("purple")}
						className="w-20 outline-none px-2 py-0 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "purple",
						}}
					>
						Purple
					</button>

					<button
						onClick={() => setcolor("lavender")}
						className="w-20 outline-none px-2 py-0 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "lavender",
						}}
					>
						Lavender
					</button>

					<button
						onClick={() => setcolor("white")}
						className="w-20 border-2 border-b px-2 py-0 rounded-full text-black shadow-2xl"
						style={{
							backgroundColor: "white",
						}}
					>
						White
					</button>

					<button
						onClick={() => setcolor("black")}
						className="w-20 outline-none px-2 py-0 rounded-full text-white shadow-gray-950"
						style={{
							backgroundColor: "black",
						}}
					>
						Black
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
