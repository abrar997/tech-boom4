import React from "react";
import { data } from "../../constatns";
import { motion } from "framer-motion";

const Videos = () => {

  return (
    <>
      {data.data.map((item,index) => {
        return (
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          translate={{duration:5 }}
          className=" border  rounded-2xl" key={index}>
            <video
              loop
              muted
              controls
              className="rounded-xl  border-2 border-gray	"
            >
              <source src={item.v1} type="video/mp4" />
            </video>
          </motion.div>
        );
      })}
    </>
  
  );
};

export default Videos;
