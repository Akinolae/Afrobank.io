import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../breakpoints";
import { motion } from "framer-motion";
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
  grid-gap: 20px 5px;
  margin: 0px auto;
  justify-content: center;
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
  height: 345px;
  width: 350px;
  background-color: #fefbf8;
  border-radius: 20px;
  transition: all ease 0.3s;
  &:hover {
    transform: scale(1.019);
    opacity: 0.9;
  }
`;

const ThirdSection = () => {
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
  ];
  return (
    <Wrapper>
      <Box
        style={{
          paddingTop: "80px",
          marginBottom: "40px",
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
          text="Faster finances, smarter business"
          style={{
            color: "white",
            textAlign: "center",
          }}
        />
        <Ui.Text
          fontSize="16px"
          text="There’s only one smart choice: Friday Finance. Grow your company with ease, simplify processes, implement best practices, and gather real-time insights to help you focus on what matters most. From MVP to IPO, Friday Finance has your back."
          style={{
            color: "whitesmoke",
            textAlign: "center",
          }}
        />
      </Box>
      <CardWrapper>
        {cardInfo.map((data: any, i: number) => {
          return (
            <Card key={i}>
                <Box style={{padding: '5%'}}>

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
