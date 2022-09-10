import React from "react";
import {
  AnimatePresence,
  motion,
useScroll
} from "framer-motion";
import { Videos } from "../../components";
const Header = () => {
  // for change with scroll
  const { scrollY } = useScroll();

  // for move text
  const text = ["brand vision", "design culture ", "teaching browss"];
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(
      () =>
        setActiveIndex((prevState) =>
          prevState + 1 === text.length ? 0 : prevState + 1
        ),
      4000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <motion.div className="bg-main p-[2rem] mt-10">
      <motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className=" uppercase text-center flex flex-col justify-center items-center"
        >
          <motion.p className="  tracking-widest ">
            poerful websites and brand experience
          </motion.p>
          <AnimatePresence exitBeforeEnter>
            {
              text.map((value, index) => (
                <motion.div
                  className=" text-4xl xl:text-8xl lg:text-8xl uppercase mt-7  font-head drop-shadow-xl shadow-[#eeee] p-4"
                  key={index}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.2, type: "tween" }}
                >
                  <div>{value}</div>
                </motion.div>
              ))[activeIndex]
            }
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <motion.div className=" text-[12px] mt-5 flex justify-between items-start tracking-wide  uppercase text-left">
        <p>
          our work <br /> centers on resluts
        </p>
        <p>
          Our style <br /> Stays lad back
        </p>
      </motion.div>
      <Videos />
    </motion.div>
  );
};

export default Header;
