

import React from 'react';
import logo from "../../assets/img/1/MyWords-02.svg";
import Button1 from '../button/Button1';

let items = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Features",
    link: "/features",
  },
  {
    id: 3,
    title: "Words",
    link: "/words",
  },
];
const Nav = () => {
  return (
    <div className="w-full h-24 flex items-center justify-between px-20">
      <div className="w-40 text-2xl font-bold text-left cursor-pointer font-varela">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="flex items-center gap-x-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-lg cursor-pointer font-varela hover:text-secondary"
          >
            {item?.title}
          </div>
        ))}
      </div>
      {/* ----simple------------------ */}
      <div className="w-40 h-12 rounded-full flex items-center justify-center text-lg text-center font-medium border cursor-pointer font-varela hover:bg-secondary hover:text-secondaryText">
        login
      </div>
    </div>
  );
}

export default Nav