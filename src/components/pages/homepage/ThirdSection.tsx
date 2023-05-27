import styled from "styled-components";
import { motion } from "framer-motion";
import Ui from "../../ui";

const Box = styled(motion.div)`
  width: 100%;
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
  height: 270px;
  width: 100%;
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
  return (
    <Wrapper>
      <Box className="max-w-6xl m-auto">
        <Box
          className="flex flex-col justify-center items-center w-full h-full"
          style={{
            paddingTop: "40px",
            paddingBottom: "50px",
          }}
        >
          <Ui.Text
            text="Afrobank, smarter business"
            className="font-black text-center text-4xl py-5 text-white"
          />
          <Ui.Text
            className="text-center text-sm w-3/4"
            text="There’s only one smart choice: Afrobank. Grow your company with ease, simplify processes, implement best practices, and gather real-time insights to help you focus on what matters most. From MVP to IPO, Afrobank has your back."
            style={{
              color: "whitesmoke",
              margin: "auto",
            }}
          />
        </Box>
        <Ui.AnimationWrapper
          className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-7 gap-y-6"
          style={{
            width: "75%",
            margin: "0px auto",
          }}
          renderProps={{
            className: "sm:w-80",
            whileHover: { scale: 1.005 },
          }}
          render={() => {
            return (
              <>
                {cardInfo.map((data: any, i: number) => {
                  return (
                    <Card key={i}>
                      <Box className="h-full w-full" style={{ padding: "5%" }}>
                        <Ui.Text text={data.info} />
                      </Box>
                    </Card>
                  );
                })}
              </>
            );
          }}
        />
        <Box style={{ paddingTop: "80px" }}></Box>
      </Box>
    </Wrapper>
  );
};

export default ThirdSection;
