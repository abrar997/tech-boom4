import React from "react";
import { images, icons, data } from "../../constatns";
import { motion } from "framer-motion";
import { Buttons } from "../../components";
const Services = () => {
  const scrollRef = React.useRef();
  return (
    <div className="grid grid-cols-2 gap-10 p-[2rem] border-t-2 place-content-between border-black">
      <motion.div className="images row-span-4 border rounded-[30px]">
        <img src={images.service} className="rounded-[30px] h-[80%]" />
      </motion.div>

      <motion.div
        className="row-span-3  flex flex-col  justify-between"
        initail={{ overflow: "hidden" }}
        whileInView={{ overflow: "scrollY" }}
        viewport={{ root: scrollRef }}
      >
        <h1 className="font-head text-[8rem] flex justify-between uppercase">
          Our
          <span className=" font-mono flex text-sm mt-[130px] ">
            <icons.FaStarOfLife />
            <icons.FaStarOfLife />
            <icons.FaStarOfLife />
          </span>
          services
        </h1>
        <p className="flex  justify-end  uppercase text-[12px] mt-[80px]">
          *** we get what you want,
          <br /> strategize what you need , and <br />
          deliver with impact , no lip
          <br /> services , just full services
        </p>

        <div className=" grid grid-cols-2 gap-5 mt-[100px] ">
          {data.services.map((item, index) => {
            return (
              <div key={index} className="flex flex-col p-5">
                <p className=" leading-10 text-[gray]">{item.count} </p>
                <h1 className="leading-[4rem] capitalize font-bold text-3xl">
                  {" "}
                  {item.name}
                </h1>
                <p className=" font-semibold  "> {item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-start justify-start mt-10">
          <Buttons
            title="jsut show me a list of services"
            icon={<icons.AiOutlinePlus />}
          />{" "}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
