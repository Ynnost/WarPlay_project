import React from "react";
import { Slaider } from "./Slider";

type MeinScreenType = {};

export const MeinScreen: React.FC<MeinScreenType> = () => {
  return (
    <div className="mein">
      <div>
        <div className="slider">
          <Slaider />
        </div>
      </div>
    </div>
  );
};
