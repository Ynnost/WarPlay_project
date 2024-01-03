import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { MeinScreen } from "./components/MeinScreen";
import { CloudGaming } from "./components/CloudGaming";
import { StartPlaying } from "./components/StartPlaying";
import { Rates } from "./components/Rates";

function App() {
  return (
    <div className="App">
      <Header />
      <MeinScreen />
      <CloudGaming />
      <StartPlaying />
      <Rates/>
    </div>
  );
}

export default App;
