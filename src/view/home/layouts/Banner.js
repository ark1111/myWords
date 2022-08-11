

import React from 'react'

const Banner = () => {
  return (
    <div
      className="w-full rounded-2xl bg-primary font-varela"
      style={{ height: "calc(100vh - 140px)" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-6xl text-center font-varela font-bold text-backgroundText">
          Learn English
        </div>
        <div className="text-6xl text-center font-varela font-bold mt-4  text-backgroundText">
          in <span className="text-secondary">Your</span> way...
        </div>
        <div className="w-40 h-14 rounded-full flex items-center justify-center text-lg text-backgroundText bg-background mt-10 cursor-pointer">
          Get Started
        </div>
      </div>
    </div>
  );
}

export default Banner