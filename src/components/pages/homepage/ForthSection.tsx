import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Box = styled(motion.div)`
  width: 100%;
  position: relative;
`;


const ForthSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  return (
    <Box
      style={{
        height: "75vh",
      }}
      className="bg-dots flex-center"
    >
      <motion.div
        className="flex justify-center items-center"
        style={{ height: "100%", width: "100%" }}
      >
        <Box className="h-full w-full" ref={ref} style={{ y}}>
          <motion.h1
            style={{
              fontSize: "100px",
              zIndex: 1,
              whiteSpace: "nowrap",
              transition: "all 2s ease-in-out",
            }}
          >
           
          </motion.h1>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ForthSection;
