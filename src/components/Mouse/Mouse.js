// import { useEffect } from "react";
// import {
//   motion,
//   MotionValue,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   transform,
// } from "framer-motion";

// // function useTransformSpring() {
// //   const transformValue = useTransform(MotionValue, [0, 1],[1,2])
// //   const springValue = useSpring(transformValue, { damping: 10 })
// //   return springValue
// // }

// const Mouse = () => {
//   //   const screenX = useMotionValue(0)
//   //   const screenY = useMotionValue(0)
//   //   const x = useTransformSpring(screenX, [-200, 200])
//   //   const y = useTransformSpring(screenY, [-100, 100])

//   //   useEffect(() => {
//   //     function handleMouseMove() {
//   //       const width = transform([0, window.innerWidth], [0, 1])(MouseEvent.clientX)
//   //       const height = transform([0, window.innerHeight], [0, 1])(MouseEvent.clientY)
//   //       screenX.set(width)
//   //       screenY.set(height)
//   //     }
//   //     document.addEventListener('mousemove', handleMouseMove)
//   //     return () => {
//   //       document.removeEventListener('mousemove', handleMouseMove)
//   //     }
//   //   }, [])

//   return (
//     <motion.div
//     initial={{opacity:0}}
//     // animate={{visibility:"visible"}}
//     whileHover={{scale:[1,2],opacity:1}}
//     transition={{ type: "spring", stiffness: 400, damping: 10 }}

//       style={{
//         width: 100,
//         height: 100,
//         backgroundColor: "pink",
//         borderRadius: "100%",
//         // x,
//         // y,
//       }}
//     />
//   );
// };

// export default Mouse;

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Mouse =()=> {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>Hello CodeSandbox</h1>
      <Box />
    </div>
  );
}

const css = {
  box: {
    backgroundColor: "linen",
    width: "30vw",
    height: "30vw",
    position: "relative"
  },
  fly: {
    position: "absolute",
    width: "20px",
    height: "20px",
    margin: "-10px",
    backgroundColor: "red",
    borderRadius: 10
  }
};

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight
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
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
  };
}

const Box = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };
  return (
    <motion.div
      ref={boxRef}
      style={{ ...css.box, perspective: 600 }}
      onMouseMove={e => handleMouseMove(e)}
      animate={{
        rotateX: mousePosition.centerX * 20,
        rotateY: mousePosition.centerY * 20
      }}
    >
      <motion.div
        style={css.fly}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
      />
      <motion.div
        style={{ ...css.fly, backgroundColor: "gold" }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ type: "spring" }}
      />
      <motion.div
        style={{ ...css.fly, backgroundColor: "orange" }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ type: "tween" }}
      />
      {mousePosition.x} / {mousePosition.y}
      <br />
      {mousePosition.centerX} / {mousePosition.centerY}
      <br />
      {mousePosition.width} / {mousePosition.height}
      <br />
    </motion.div>
  );
};

export default Mouse;