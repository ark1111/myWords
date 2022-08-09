

import React from 'react'

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
    <div className="w-full h-24 flex items-center justify-between px-10">
      <div className="w-32 text-2xl font-bold text-left cursor-pointer font-varela">
        MyWords
      </div>
      <div className="flex items-center gap-x-10">
        {items.map((item, index) => (
          <div key={index} className="text-lg cursor-pointer font-varela hover:text-primary">
            {item?.title}
          </div>
        ))}
      </div>
      <div className="w-32 h-14 rounded-full flex items-center justify-center text-lg text-center font-medium border cursor-pointer font-varela hover:bg-secondary hover:text-secondaryText">
        login
      </div>
    </div>
  );
}

export default Nav