import React from "react";
import Acc from "../image/Acc.svg";
import Mod from "../image/Mod.svg";
import Tar from "../image/Tar.svg";
import Gam from "../image/Gam.svg";

type StartPlayingType = {};

export const StartPlaying: React.FC<StartPlayingType> = () => {
  return (
    <div className="startPlaying">
      <div className="header_text">
        <div className="line_text">
          <hr />
          <h6>Быстрый старт</h6>
        </div>
        <h2>Начни играть</h2>
      </div>
      <div className="image">
        <span>
          <img src={Acc} alt="img" />
          <h5>Создайте аккаунт</h5>
        </span>
        <hr />
        <span>
          <img src={Mod} alt="img" />
          <h5>Скачайте модуль</h5>
        </span>
        <hr />
        <span>
          <img src={Tar} alt="img" />
          <h5>Выберите тариф</h5>
        </span>
        <hr />
        <span>
          <img src={Gam} alt="img" />
          <h5>Начните играть</h5>
        </span>
      </div>
      <a href="#start">
        <h3>Начать</h3>
      </a>
    </div>
  );
};
