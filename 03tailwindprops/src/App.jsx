import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const bhimPhoto = `https://images.pexels.com/photos/2519829/pexels-photo-2519829.jpeg`;
  const notBhimPhoto = `https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card title="Bhim" photo={bhimPhoto} />
      <Card title="" photo={notBhimPhoto} />
    </>
  );
}

export default App;
