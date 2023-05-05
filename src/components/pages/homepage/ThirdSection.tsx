import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { breakpoints } from "../../../breakpoints";
import { motion, useAnimation, useInView } from "framer-motion";
import Ui from "../../ui";

const { xScreen, mediumScreen, largeScreen } = breakpoints();
const Box = styled(motion.div)`
  width: 100%;
`;

const CardWrapper = styled(Box)`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  width: 75%;
  grid-template-columns: repeat(3, 1fr);
  margin: 0px auto;
  justify-content: center;
  ${mediumScreen} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  ${xScreen} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }
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
    console.log(inView);
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 1.2,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "100vh",
      });
    }
  }, [inView]);

  return (
    <Wrapper>
      <Box
        style={{
          paddingTop: "80px",
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
          fontSize="24px"
          fontWeight={500}
          text="Afrobank, smarter business"
          style={{
            color: "white",
            textAlign: "center",
          }}
        />
        <Ui.Text
          fontSize="16px"
          text="There’s only one smart choice: Afrobank. Grow your company with ease, simplify processes, implement best practices, and gather real-time insights to help you focus on what matters most. From MVP to IPO, Afrobank has your back."
          style={{
            color: "whitesmoke",
            textAlign: "center",
          }}
        />
      </Box>
      <CardWrapper ref={ref}>
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
