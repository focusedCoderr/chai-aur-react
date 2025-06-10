import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Compo1 from "./components/compo1.jsx";
import Compo2 from "./components/compo2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App title="Fusfusaya"></App>
  </StrictMode>
);
