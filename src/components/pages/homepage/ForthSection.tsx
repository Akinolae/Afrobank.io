import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import woman from "../../../assets/happy.jpeg";
import { useRef } from "react";

const Box = styled(motion.div)`
  width: 100%;
  position: relative;
`;

const Wrapper = styled(Box)`
  background-image: url(${woman});
  width: 600px;
  height: 400px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  &:before {
    background-color: red;
  }
`;

const ForthSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <Box
      style={{
        height: "75vh",
      }}
      className="bg-dots flex-center"
    >
      <motion.div className="flex justify-between items-center">
        <Wrapper ref={ref} />
        <Box style={{ y }}>
          <h1
            className="text-center"
            style={{
              fontSize: "16px",
              zIndex: 1,
              whiteSpace: "nowrap",
              transition: "all 2s ease-in-out",
            }}
          >
            Hello world
          </h1>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ForthSection;
