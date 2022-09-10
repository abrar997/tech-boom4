import React from "react";
import { GiSplitCross } from "react-icons/gi";
import { images } from "../../constatns";
import { motion } from "framer-motion";

const Card = () => {
  const [data] = React.useState([
    {
      link: "P/11",
      text: "platforming our innovation and advancing the future of web design  ",
      icon: <GiSplitCross />,
      name: "Webflow",
      img: images.web,
      img1: images.blue,
    },
    {
      link: "P/102",
      text: "platforming our innovation and advancing the future of web design  ",
      icon: <GiSplitCross />,
      name: "Webflow",
      img: images.web,
      img1: images.blue,
    },
    {
      link: "P/103",
      text: "platforming our innovation and advancing the future of web design  ",
      icon: <GiSplitCross />,
      name: "Webflow",
      img: images.web,
      img1: images.blue,
    },
  ]);
  return (
    <div className="flex flex-col xl:flex-row lg:flex-row p-[3rem] justify-between items-center  ">
      {data.map((item,index) => {
        return (
          <div key={index} className="border-l-2 border-[gray] p-5 pl-7 ">
            <p className="w-[70%] text-lg leading-10">{item.link}</p>
            <p className="w-[70%] leading-6 tracking-wide text-lg">
              {item.text}
            </p>
            <p className="flex items-center  text-xl  mt-4 leading-10">
              <span>{item.icon} </span>
              <span className="ml-2">{item.name} </span>
            </p>

            <div className="z-0 relative w-[90%]">
              <motion.div
                initial={{ opacity: 1 }}
                // whileHover={{ opacity: 0 }}
                animate={{hover:0}}
                className="z-0 top-0 absolute"
              >
                <img src={item.img} className="border rounded-[30px]" />
              </motion.div>
              <div className=" relative z-1">
                <motion.img
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
