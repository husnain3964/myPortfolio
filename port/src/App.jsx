import React from "react";
import Navber from "./components/navber/Navber.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/About.jsx";
import "./app.css";
function App() {
  return (
    <div>
      {" "}
      <Navber />
      <Hero />
      <About />
    </div>
  );
}

export default App;
