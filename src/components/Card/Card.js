import React from "react";
import { icons } from "../../constatns";
import { images } from "../../constatns";
import { motion } from "framer-motion";

const Card = () => {
  const [data] = React.useState([
    {
      link: "P/11",
      text: "platforming our innovation and advancing the future of web design  ",
      icon: <icons.GiSplitCross />,
      name: "Webflow",
      img: images.b1,
      img1: images.blue,
    },
    {
      link: "P/102",
      text: "platforming our innovation and advancing the future of web design  ",
      icon: <icons.GiSplitCross />,
      name: "Webflow",
      img: images.home2,
      img1: images.h2,
    },
    {
      link: "P/103",
      text: "platforming our innovation and advancing the future of web design  ",
      icon: <icons.GiSplitCross />,
      name: "Webflow",
      img: images.web,
      img1: images.sweet,
    },
  ]);

  return (
    <div
      className="app__gallery-cards flex flex-col xl:flex-row lg:flex-row
     md:xl:flex-row p-[1rem] xl:p-[3rem]
    lg:[p-2] md-[p-2]
    justify-around xl:justify-between lg:justify-between md:justify-between
     xl:items-center  "
    >
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="mb-5 border-l-[1px]
           border-[gray] p-5 pl-7 "
          >
            <p className="w-[70%] text-sm xl:text-sm mb-6 lg:text-lg md:text-md text-[grey] ">
              {item.link}
            </p>
            <p className="w-[70%] leading-6 tracking-wide text-sm xl:text-lg lg:text-lg md:text-md">
              {item.text}
            </p>

            <p className="flex items-center text-sm xl:text-xl lg:text-lg  mt-1 leading-10 mb-3">
              <span>{item.icon} </span>
              <span className="ml-2">{item.name} </span>
            </p>

            <div className="z-0 relative w-[250px] xl:w-[380px] lg:w-[380px] md:w-[340px]">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ hover: 0 }}
                className="z-0 top-0 absolute"
              >
                <motion.img src={item.img} className="border  rounded-[30px]" />
              </motion.div>
              <div className=" relative z-1">
                <motion.img
                  initail={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  src={item.img1}
                  className=" border rounded-[30px]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
