import React from "react";
import Map from "../image/map.svg";
type LocationMapType = {};

export const LocationMap: React.FC<LocationMapType> = () => {
  return (
    <div className="mapLocal">
      <div className="gameBrowser_text">
        <div className="header_text">
          <div className="line_text">
            <hr />
            <h6>Игровые сервера на карте</h6>
          </div>
          <h2>Карта локаций</h2>
        </div>
      </div>
      <img src={Map} alt="" />
    </div>
  );
};
