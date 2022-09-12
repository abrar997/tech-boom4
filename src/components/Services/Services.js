import React from "react";
import { images, icons, data } from "../../constatns";
import { motion } from "framer-motion";
import { Buttons } from "../../components";
const Services = () => {
  const scrollRef = React.useRef();
  return (
    <div
      className="app__home-services grid grid-cols-1 xl:grid-cols-2 gap-10 p-[2rem]
    border-t-2  border-black "
    >
      <motion.div className="images row-span-4  rounded-[30px]">
        <img src={images.service} className="rounded-[30px] h-[90%]" />
      </motion.div>

      <motion.div className=" app__home-services-text  h-[900px]  flex flex-col  justify-between">
        <h1
          className="font-head text-[4rem] lg:text-[6rem] xl:text-[8rem] flex flex-col xl:flex-row lg:xl:flex-row md:xl:flex-row justify-around 
         xl:justify-between 
        uppercase"
        >
          Our
          <span className=" font-mono flex text-sm mt-[10px] xl:mt-[130px] ">
            <icons.FaStarOfLife />
            <icons.FaStarOfLife />
            <icons.FaStarOfLife />
          </span>
          services
        </h1>
        <p className="flex xl:justify-end  uppercase text-[10px] ">
          *** we get what you want,
          <br /> strategize what you need , and <br />
          deliver with impact , no lip
          <br /> services , just full services
        </p>

        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-1  xl:gap-5 lg:gap-5 md:gap-3 mt-[10px] xl:w-auto">
          {data.services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col  justify-start xl:justify-between items-start mt-10
                "
              >
                <p className=" leading-10 text-[gray] xl:mt-5">{item.count} </p>
                <h1 className="xl:leading-[4rem] lg:leading-[3rem] md:leading-[2rem] capitalize font-bold text-lg xl:text-3xl">
                  {item.name}
                </h1>
                <p className=" xl:font-semibold text-[8px] xl:text-[12px] mt-5">
                  {" "}
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex  mt-10 w-screen   ">
          <Buttons
            title="jsut show me a list of services"
            icon={<icons.AiOutlinePlus />}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
