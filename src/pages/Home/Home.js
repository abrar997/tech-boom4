import React from "react";
import { Header, Gallery } from "../../components";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div>
      <div className="h-100">
      <Header />
      </div>
      <Gallery />
    </motion.div>
  );
};

export default Home;
