import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Compo1 from "./components/compo1";

function App({ title }) {
  return <Compo1 title={title} />;
}

export default App;
