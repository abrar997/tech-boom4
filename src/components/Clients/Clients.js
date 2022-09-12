import React from "react";
import { data } from "../../constatns";
import { motion } from "framer-motion";
const Clients = () => {
  return (
    <div
      className="app__home mt-[50px] pb-[80px]  pt-[20px] 
       border-t-2 border-black flex flex-col items-center justify-center"
    >
      <div className="app__home-header">
        <p className=" uppercase  font-semibold">
          ourclients bring the party . here are some on the vip list .
        </p>
      </div>
      <div
        className=" grid grid-rows-3 gap-10 xl:gap-5 lg:gap-5 md:gap:7
         grid-cols-5 xl:grid-cols-5  mt-10
         justify-center m-auto 
       
      "
      >
        {data.client.map((item, index) => {
          return (
            <div key={index} className='flex items-center justify-center'>
              <img
                src={item.img}
                className=" w-[200px]  xl:w-[40%] lg:w-[40%] md:w-[40%]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
