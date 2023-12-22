import React from "react";

type MeinScreenType = {};

export const MeinScreen: React.FC<MeinScreenType> = () => {
  return (
    <div className="mein">
      <div className="container">
        <div className="slider">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="title">
          <h3>Сервис облачного гейминга</h3>
          <h1>Преврати свое устройство в игровое</h1>
        </div>
        <div className="link_upp">
          <a>
            <img src="" alt="" />
            <p>UPGRADE</p>
          </a>
        </div>
      </div>
    </div>
  );
};
