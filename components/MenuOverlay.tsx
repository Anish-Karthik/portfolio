import React from "react";
import NavLink from "./NavLink";

type NavLinkType = {
  title: string;
  path: string;
};

const MenuOverlay = ({ links } : {links: NavLinkType[]}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
