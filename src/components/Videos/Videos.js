import React, { useState, useRef } from "react";
import { data } from "../../constatns";
import { motion } from "framer-motion";
import { BsArrowDownLeft } from "react-icons/bs";
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

  return (
    <div className="mt-5">
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ ...mouse.fly }}
        className="flex"
      >
        <span className="bg-hover text-white p-2 text-sm rounded-2xl uppercase ">
          Show me the work
        </span>
        <span className="bg-hover ml-3 text-white  rounded-full p-3 ">
          <BsArrowDownLeft />
        </span>
      </motion.div>

      <motion.div
        ref={boxRef}
        style={{ ...mouse.box, perspective: 700 }}
        onMouseMove={(e) => handleMouseMove(e)}
        animate={{
          rotateX: mousePosition.centerX * 40,
          rotateY: mousePosition.centerY * 40,
        }}
      >
        {data.data.map((item, index) => {
          return (
            <motion.div className="video border rounded-[30px]" key={index}>
              <video
                preload="auto"
                controls
                autoPlay
                muted
                className="rounded-[30px] border-2 border-gray w-100 h-[40vh] xl:h-[80vh] lg:h-[80vh] md:h-[60vh]  shadow-xl "
              >
                <source
                  src={item.v1}
                  type="video/mp4"
                  className="h-100 w-100"
                />
              </video>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Videos;
