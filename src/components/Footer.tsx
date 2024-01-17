import React, { useEffect, useState } from "react";
import { Links, LinksType } from "./universalСomponents/Links";
import "../App.css";
import logo from "../image/LogoF.svg";
import { Outlet } from "react-router-dom";

type FooterType = {};

export const Footer: React.FC<FooterType> = () => {
  return (
    <div>
      <div className="">
        <span className="logoFooter">
          <img src={logo} alt="" />
          <h2>WARPLAY.CLOUD</h2>
          <h3>2024. All rights reserved.</h3>
          <h4>Design by desart</h4>
        </span>
        <span className="contactFooter">
          <a href="#political">Политика конфиденциальности</a>
          <a href="#coocie">Файлы Coocie</a>
        </span>
      </div>
    </div>
  );
};
