import React, { useState } from "react";
import { Rate } from "./universalСomponents/Rate";

type RatesType = {};

export const Rates: React.FC<RatesType> = () => {

  const [activeStates, setActiveStates] = useState([false, false, false]);

  const onChangeClick = (index: number) => {
    setActiveStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="rates">
      <div className="header_text">
        <div className="line_text">
          <hr />
          <h6>Гибкие тарифы</h6>
        </div>
        <h2>Доступные подписки</h2>
      </div>
      <div className="rates_box">
        <Rate price={"45"} active={activeStates[0]} callback={() => onChangeClick(0)} />
        <Rate price={"2999"} active={activeStates[1]} callback={() => onChangeClick(1)} />
        <Rate price={"1500"} active={activeStates[2]} callback={() => onChangeClick(2)} />
      </div>
      <div className="hr">
        <hr />
      </div>
    </div>
  );
};
