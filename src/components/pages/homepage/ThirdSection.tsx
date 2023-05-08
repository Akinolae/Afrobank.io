import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import Ui from "../../ui";

const Box = styled(motion.div)`
  width: 100%;
`;

const CardWrapper = styled(Box)`
  width: 75%;
  margin: 0px auto;
  justify-content: center;
`;

const Wrapper = styled(Box)`
  padding-top: 20px;
  padding-bottom: 20px;
  height: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled(Box)`
  height: 340px;
  width: 340px;
  background-color: #fefbf8;
  border-radius: 20px;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const cardInfo = [
  {
    info: "easy deals",
  },
  {
    info: "easy deals",
  },
  {
    info: "easy deals",
  },
  {
    info: "easy deals",
  },
  {
    info: "easy deals",
  },
  {
    info: "easy deals",
  },
];

const ThirdSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 3,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "100vh",
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <Wrapper>
      <Box
        style={{
          paddingTop: "40px",
          paddingBottom: "50px",
          width: "70%",
          display: "flex",
          flexFlow: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Ui.Text
          text="Afrobank, smarter business"
          className="font-black text-4xl text-center py-5 text-white"
        />
        <Ui.Text
          className="text-center text-sm"
          text="There’s only one smart choice: Afrobank. Grow your company with ease, simplify processes, implement best practices, and gather real-time insights to help you focus on what matters most. From MVP to IPO, Afrobank has your back."
          style={{
            color: "whitesmoke",
          }}
        />
      </Box>
      <CardWrapper
        className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-7 gap-y-6"
        ref={ref}
      >
        {cardInfo.map((data: any, i: number) => {
          return (
            <Card animate={animation} whileHover={{ scale: 1.005 }} key={i}>
              <Box style={{ padding: "5%" }}>
                <Ui.Text text={data.info} />
              </Box>
            </Card>
          );
        })}
      </CardWrapper>
      <Box style={{ paddingTop: "80px" }}></Box>
    </Wrapper>
  );
};

export default ThirdSection;
