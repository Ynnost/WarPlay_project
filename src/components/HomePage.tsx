import React from "react";
import "../App.css";

import { MeinScreen } from "./MeinScreen";
import { StartPlaying } from "./StartPlaying";
import { Rates } from "./Rates";
import CloudGaming from "./CloudGaming";

function HomePage() {
  return (
    <div className="App">
      <div id="section-0">
        <MeinScreen />
      </div>
      <div id="section-1">
        <CloudGaming />
      </div>
      <div id="section-2">
        <StartPlaying />
      </div>
      <div id="section-3">
        <Rates />
      </div>
    </div>
  );
}

export default HomePage;
