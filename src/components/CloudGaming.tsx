import React from "react";
import Comput from "../image/Comput.svg";

type CloudGamingType = {};

export const CloudGaming: React.FC<CloudGamingType> = () => {
  return (
    <div className="cloudGaming">
      <div>
        <img src={Comput} alt="img" />
      </div>
      <div className="cloudGaming_text">
        <div className="header_text">
          <div className="line_text">
            <hr />
            <h6>Облачный Гейминг</h6>
          </div>
          <h2>Как это работает</h2>
        </div>
        <div className="description">
          <h5>Наши сервера запускают игру, и передают вам картинку, которой вы можете управлять в реальном времени!</h5>
          <h5>
            Приложение запустится на ПК с процессором от 1.5 GHz , от 1 Gb RAM и доступом в интернет от 15 мбит/с на всех операционых
            системах Windows 7, 8, 10 MacOS и Linux .
          </h5>
        </div>
        <a href="#download">
          <h3>Загрузить</h3>
        </a>
      </div>
    </div>
  );
};

export default CloudGaming;
