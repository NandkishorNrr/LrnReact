import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card"; "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 rounded-xl text-black p-4 mb-4">Tailwind Test</h1>
      <Card username="Rtr" />
      <Card username="Nrr" btnText= "visit"/>
    </>
  );
}

export default App;
