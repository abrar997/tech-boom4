import React from "react";
import { Card } from "../../components";
const Gallery = () => {
  return (
    <div>
      <div
        className="ml-2 border-t-[2px] border-black
        flex flex-col xl:flex-row w-[100%] mt-0 xl:mt-20 justify-between items-start xl:items-center lg:items-center p-[2rem] 
      "
      >
        <div className=" font-gall font-head font-bold text-[2rem] xl:text-title lg:text-title">
          Latest
        </div>
        <div className=" xl:ml-auto  uppercase text-[8px] xl:text-[10px] lg:text-[10px]  mt-10 mr-20">
          We have case studies , in <br /> case you feel like <br /> studying
          them .
        </div>
        <div className="font-gall font-head font-bold text-[2rem] xl:text-title lg:text-title">
          case studies
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Gallery;
