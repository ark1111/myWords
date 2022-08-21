

import React from 'react';
import lineImg from "../../../assets/img/1/MyWords-15.svg";

const CardOfDay = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-between rounded-2xl bg-secondary mb-20 px-8 py-10">
      <div className="w-2/5 h-full flex flex-col items-center justify-center gap-y-6">
        <div className="w-full text-center text-[15vh] font-black text-primaryText">
          Card
        </div>
        <div className="w-full text-center text-[15vh] font-black text-primaryText">
          Of
        </div>
        <div className="w-full text-center text-[15vh] font-black text-primaryText">
          Day
        </div>
      </div>
      <img src={lineImg} alt="lineImg" className='h-full' />
      <div className="w-2/5 h-full flex items-center justify-center">
        <div className="w-4/5 h-[90%] rounded-lg bg-background"></div>
      </div>
    </div>
  );
}

export default CardOfDay