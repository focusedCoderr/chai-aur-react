import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value1, setValue1] = useState(43);
  const [value2, setValue2] = useState(77);

  function swap() {
    setValue1(value2);
    setValue2(value1);
  }
  return (
    <>
      <h1>Value 1 : {value1}</h1>
      <h1>Value 2 : {value2}</h1>

      <button onClick={swap}>Swap Button</button>

      <h1>Before Swap: Value 1 : 43</h1>
      <h1>Before Swap: Value 2 : 77</h1>
    </>
  );
}

export default App;
