import React from "react";
import "../../App.css";

export type LinksType = {
  title: string;
  href: string;
  active?: boolean;
  callback?: (href: string) => void;
};

export const Links: React.FC<LinksType> = ({ active, href, callback, title }) => {
  
  const onUpdateActiveLink = () => {
    return callback?.(href);
  };

  return (
    <li>
      <a href={`#${href}`} className={active ? "active" : ""} onClick={onUpdateActiveLink}>
        {title}
      </a>
    </li>
  );
};
