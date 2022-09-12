import React from "react";
import { Header, Gallery, Clients } from "../../components";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div>
      <div className="h-100">
      <Header />
      </div>
      <Gallery />
      <Clients />
    </motion.div>
  );
};

export default Home;
