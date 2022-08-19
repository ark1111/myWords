

import React from 'react';
import img1 from "../../../assets/img/1/MyWords-10.svg";
import img2 from "../../../assets/img/1/MyWords-11.svg";
import img3 from "../../../assets/img/1/MyWords-12.svg";
import img4 from "../../../assets/img/1/MyWords-13.svg";

const Way = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center">
      <div className="w-full text-center text-4xl font-varela">
        This is your way...
      </div>
      <div className="w-full flex items-center justify-between mt-[7%]">
        <img src={img1} alt="way-img" className="w-[14%]" />
        <div className="w-[14%] px-2">
          <div className="w-full text-center text-3xl font-bold">Create</div>
          <div className="w-full text-center text-xl font-light">
            your list...
          </div>
        </div>
        <img src={img2} alt="way-img" className="w-[14%]" />
        <div className="w-[14%] px-2">
          <div className="w-full text-center text-3xl font-bold">Customize</div>
          <div className="w-full text-center text-xl font-light">
            your list...
          </div>
        </div>
        <img src={img3} alt="way-img" className="w-[14%]" />
        <div className="w-[14%] px-2">
          <div className="w-full text-center text-3xl font-bold">Share</div>
          <div className="w-full text-center text-xl font-light">
            your list...
          </div>
        </div>
        <img src={img4} alt="way-img" className="w-[14%]" />
      </div>
    </div>
  );
}

export default Way