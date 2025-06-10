import React from "react";
import Compo2 from "./compo2";

function Compo1({ title }) {
  return <Compo2 something={title} />;
}

export default Compo1;
