import React from "react";
import { Header, Gallery, Clients, Services } from "../../components";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div>
      <div className="h-100">
        <Header />
      </div>
      <div className="p-[2rem]">
        <Gallery />
        <Clients />
        <Services />
      </div>
    </motion.div>
  );
};

export default Home;
