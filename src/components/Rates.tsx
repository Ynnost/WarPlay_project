import React, { useState } from "react";
import { Rate } from "./universalСomponents/Rate";

type RatesType = {};

export const Rates: React.FC<RatesType> = () => {
  const [rate, setRate] = useState([
    { id: 1, prise: "45", active: false },
    { id: 2, prise: "2999", active: false },
    { id: 3, prise: "1500", active: false },
  ]);

  const onChangeClick = (id: number) => {
    setRate(rate.map((el) => (el.id === id ? { ...el, active: true } : { ...el, active: false })));
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
        {rate.map((r) => (
          <Rate id={r.id} key={r.id} price={r.prise} active={r.active} callback={onChangeClick} />
        ))}
      </div>
      <div className="hr">
        <hr />
      </div>
    </div>
  );
};
