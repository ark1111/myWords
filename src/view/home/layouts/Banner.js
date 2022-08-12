

import React from 'react'
import img1 from "../../../assets/img/1/MyWords-03.svg";
import img2 from "../../../assets/img/1/MyWords-04.svg";

const Banner = () => {
  return (
    <div
      className="w-full rounded-2xl bg-primary font-varela"
      style={{ height: "calc(100vh - 140px)" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <div className="text-6xl text-center font-varela font-bold text-backgroundText">
          Learn English
        </div>
        <div className="text-6xl text-center font-varela font-bold mt-4  text-backgroundText">
          in <span className="text-secondary">Your</span> way...
        </div>
        <div className="w-40 h-14 rounded-full flex items-center justify-center text-lg text-backgroundText bg-background mt-10 cursor-pointer">
          Get Started
        </div>
        {/* //imges-------------------------------- */}
        <img
          src={img1}
          alt="banner-img"
          className="w-48 absolute top-[15%] left-[-30px]"
        />
        <img
          src={img2}
          alt="banner-img"
          className="w-60 absolute bottom-[20%] right-[-110px] rotate-90"
        />
      </div>
    </div>
  );
}

export default Banner