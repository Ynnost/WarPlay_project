import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MeinScreen } from "./components/MeinScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <MeinScreen />
    </div>
  );
}

export default App;
