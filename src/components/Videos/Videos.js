import React, { useState, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { videos,icons } from "../../constatns";
// style
const mouse = {
  fly: {
    position: "absolute",
    zIndex: "10",
  },
  main: {
    position: "relative",
  },
};

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };
  let reference = referenceElement.offsetParent;
  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}
const Videos = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };
  const { scrollYProgress } = useViewportScroll();
  // const opacity = useTransform(scrollYProgress/, [0, 1], [0, 1]);
  return (
    <div className="mt-5 pb-[20px]">
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ ...mouse.fly }}
        className="flex text-[10px] xl:text-sm lg:text-sm md:text-sm"
      >
        <span className="bg-hover text-white p-2  rounded-2xl uppercase ">
          Show me the work
        </span>
        <span className="bg-hover ml-3 text-white  rounded-full p-3 ">
          <icons.BsArrowDownLeft />
        </span>
      </motion.div>
      <motion.div
        ref={boxRef}
        // style={{ ...mouse.box, perspective: 700 }}
        onMouseMove={(e) => handleMouseMove(e)}
        animate={{
          rotateX: mousePosition.centerX * 40,
          rotateY: mousePosition.centerY * 40,
        }}
      >
        <motion.div className="video border  rounded-[30px] ">
          <video
            preload="auto"
            controls
            autoPlay
            muted
            className="w-[100%] mb-[10px] border-1 border-gray shadow-xl h-[50vh] xl:h-[70vh] lg:h-[70vh]   object-cover "
          >
            <source src={videos.header} type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Videos;
