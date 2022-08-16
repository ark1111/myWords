


import React, { useState } from 'react';
import img1 from "../../assets/img/1/MyWords-06.png"
import img2 from "../../assets/img/1/MyWords-07.png";


const Button1 = () => {
  const [active,setActive]=useState(null);
  const hoverHandler1 = () => {
    let container = document.querySelector(".button-img-container");
    container.style.transform = "translateX(-100%)";
    setActive(true);
  };
  const hoverHandler2 = () => {
    let container = document.querySelector(".button-img-container");
    container.style.transform = "translateX(0%)";
    setActive(false);
  };
  return (
    <div
      className="w-40 h-12 relative rounded-full overflow-hidden cursor-pointer"
      onMouseEnter={hoverHandler1}
      onMouseLeave={hoverHandler2}
    >
      <div className="button-img-container flex absolute top-0 left-0 z-[1] transition-all duration-200">
        <img src={img1} alt="btn-img" className="w-40 h-full" />
        <img src={img2} alt="btn-img" className="w-40 h-full" />
      </div>
      <div className="button-text w-full h-full flex items-center justify-center text-base text-backgroundText absolute top-0 left-0 z-[2]" style={active ? {color:'#fff'}:null}>
        Login
      </div>
    </div>
  );
}

export default Button1