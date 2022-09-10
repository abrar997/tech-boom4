import React from "react";
import {Card} from '../../components'
const Gallery = () => {
  return (
    <div>
      <div className="flex flex-row  mt-0 xl:mt-20  justify-between items-center  p-[2rem] ">
        <div className=" font-gall font-bold text-title">Latest</div>
        <div className="  ml-auto   uppercase text-[10px] mt-10 mr-20">
          We have case studies , in <br /> case you feel like <br /> studying
          them .
        </div>
        <div className="font-gall font-bold text-title">case studies</div>
        <div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Gallery;
