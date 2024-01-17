import React from "react";
import i1 from "../image/gameBrouser/Rectangle 94.jpg";
import i2 from "../image/gameBrouser/Rectangle 206.jpg";
import i3 from "../image/gameBrouser/Rectangle 205.jpg";
type GameBrouserType = {};

export const GameBrouser: React.FC<GameBrouserType> = () => {
  return (
    <div className="gameBrowser">
      <div className="gameBrowser_text">
        <div className="header_text">
          <div className="line_text">
            <hr />
            <h6>Играть можно в браузере</h6>
          </div>
          <h2>Запускайте на любых устройствах</h2>
        </div>
        <div className="description">
          <h5>Наш модуль доступен на все популярные ОС и работает на всех компьютерах.</h5>
        </div>
        <a href="#openBrowser">
          <h3>Открыть в браузере</h3>
        </a>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{
            width: 603.09,
            height: 345.78,
            left: 0,
            top: 301.52,
            position: "absolute",
            transform: "rotate(-30deg)",
            transformOrigin: "0 0",
            boxShadow: "-33px 17px 29px rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="img"
          src={i1}
        />
        <img
          style={{
            width: 603.09,
            height: 345.78,
            left: 242.21,
            top: 567.01,
            position: "absolute",
            transform: "rotate(-30deg)",
            transformOrigin: "0 0",
            boxShadow: "-33px 17px 29px rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="img"
          src={i3}
        />
        <img
          style={{
            width: 603.09,
            height: 345.78,
            left: 310.31,
            top: 325.66,
            position: "absolute",
            transform: "rotate(-30deg)",
            transformOrigin: "0 0",
            boxShadow: "0px 15px 8px rgba(0, 0, 0, 0.71)",
            borderRadius: 10,
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="img"
          src={i2}
        />
      </div>
    </div>
  );
};
