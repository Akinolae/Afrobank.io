import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import woman from "../../../assets/happy.jpeg";

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
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <Box
      style={{
        height: "75vh",
      }}
      className="bg-dots flex-center"
    >
      <motion.div className="flex justify-between items-center">
        <Wrapper />
        <Box style={{ x: x }}>
          <h1
          className="text-center"
            style={{
              fontSize: "10em",
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
