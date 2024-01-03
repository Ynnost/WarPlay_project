import React, { useState } from "react";
import "../../App.css";

export type RateType = {
  id:number
  price: string;
  active: boolean;
  callback:(id:number)=>void
};

export const Rate: React.FC<RateType> = ({ id, price, active, callback }) => {
  const changeTitle = (price: string) => {
    if (price === "45") {
      return "Почасовая  оплата";
    }
    if (price === "2999") {
      return "Подписка Максимум";
    }
    if (price === "1500") {
      return "Подписка Минимум";
    }
  };

  const changeText = (price: string) => {
    if (price === "45") {
      return "Доступно:                          Каталог игр                        Виртуальный ПК                Безлимитная игровая сессия";
    }
    if (price === "2999") {
      return "Доступно:                          Каталог игр                        Виртуальный ПК                Игровая сессия 10 часов/день";
    }
    if (price === "1500") {
      return "Доступно:                          Каталог игр                        Игровая сессия 4 часов/день";
    }
  };

  return (
    <div className={active ? "rate_act" : "rate"}>
      <div className="text">
        <h2>{changeTitle(price)}</h2>
        <h4>{price + "р. - " + (price === "45" ? "час" : "месяц")}</h4>
        <h5>{changeText(price)}</h5>
      </div>
      <button onClick={()=>callback(id)}>Выбрать</button>
    </div>
  );
};
