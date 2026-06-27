import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#0A0E1A",
        fontFamily: "'Inter', sans-serif",
        color: "rgba(240,238,233,1)",
      }}
    >
      <Navbar />
    </div>
  );
}

export default App;
