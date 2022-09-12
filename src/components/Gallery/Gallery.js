import React from "react";
import { Card, Buttons } from "../../components";
import { icons } from "../../constatns";
const Gallery = () => {
  return (
    <section>
      <div
        className="ml-2 border-t-[2px] border-black
        flex flex-col xl:flex-row w-[100%] mt-0 xl:mt-[310px] 
        justify-between items-start xl:items-center lg:items-center 
        uppercase
        "
      >
        <div className=" font-gall font-head  text-[2rem] xl:text-[8rem] lg:text-title">
          Latest
        </div>
        <div className=" xl:ml-auto text-[8px] xl:text-[10px] lg:text-[10px]  mt-10 mr-20">
          We have case studies , in <br /> case you feel like <br /> studying
          them .
        </div>
        <div className="font-gall font-head  text-[2rem] xl:text-[8rem] lg:text-title">
          case studies
        </div>
      </div>
      <div>
        <Card />
      </div>

      <div>
        <Buttons title="View all work" icon={<icons.BsArrowDownLeft/>} />
      </div>
    </section>
  );
};

export default Gallery;
