import React, { useEffect, useState } from "react";
import { Links, LinksType } from "./universalСomponents/Links";
import "../App.css";
import logo from "../image/Logo.svg";
import { Outlet } from "react-router-dom";

type HeaderType = {};

let link: LinksType[] = [
  { title: "Главная", to: "/home" },
  { title: "Сервера", to: "/servers" },
  { title: "Скачать", to: "/download" },
  { title: "Открыть в браузере", to: "/open" },
  { title: "Цены", to: "/prices" },
  { title: "Тех поддержка", to: "/support" },
  { title: "Контакты", to: "/contact" },
];

export const Header: React.FC<HeaderType> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (index: number) => {
    const element = document.querySelector(`#section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className={`topbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="" />
          <p>WARPLAY.CLOUD</p>
        </div>
        <div className="menu">
          <ul className="list">
            {link.map((li, i) => (
              <Links key={i} to={li.to} title={li.title} onClick={() => handleLinkClick(i)} />
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};
