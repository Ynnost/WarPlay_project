import React, { useEffect, useState } from "react";
import { Links, LinksType } from "./Links";
import "../App.css";
import logo from "../image/Logo.svg";

type HeaderType = {};

let link: LinksType[] = [
  { title: "Главная", href: "home" },
  { title: "Сервера", href: "servers" },
  { title: "Скачать", href: "download" },
  { title: "Открыть в браузере", href: "open" },
  { title: "Цены", href: "prices" },
  { title: "Тех поддержка", href: "support" },
  { title: "Контакты", href: "contact" },
];

export const Header: React.FC<HeaderType> = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <div className={`topbar ${scrolled ? "scrolled":''}`}>
      <div className="logo">
        <img src={logo} alt="" />
        <p>WARPLAY.CLOUD</p>
      </div>
      <div className="menu">
        <ul className="list">
          {link.map((li, i) => (
            <Links key={i} active={activeLink === li.href} href={li.href} callback={onUpdateActiveLink} title={li.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};
