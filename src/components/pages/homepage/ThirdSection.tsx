import styled from "styled-components";
import { motion } from "framer-motion";
import Ui from "../../ui";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosFlash } from "react-icons/io";
import { BiTime, BiTransfer } from "react-icons/bi";

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
  height: 350px;
  width: 100%;
  border-radius: 20px;
  background-color: #fefbf8;
  transition: all ease 0.3s;
`;

const iconSize = {
  fontSize: "34px",
};

const cardInfo = [
  {
    info: "Get onboarded in minutes.",
    subText:
      "Get onboarded in minutes and gain access to mouth watering gifts, we're waiting for you.",
    icon: <BiTime style={iconSize} />,
  },
  {
    info: "Enjoy free transfers",
    subText:
      "Transactions are free at Afrobank, no matter the number of transactions just know we've got you covered.",
    icon: <BiTransfer style={iconSize} />,
  },
  {
    info: "Fast, Safe & Secure",
    subText:
      "Trust Afrobank to deliver lightening fast, safe and secure transactions, it's what we live by, we stand by our words.",
    icon: <IoIosFlash style={iconSize} />,
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
          <Ui.Text className="font-black text-center text-4xl py-5 text-white">
            <>
              <span className="text-gray-400 text-5xl">Afrobank</span>, smarter
              business
            </>
          </Ui.Text>
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
            width: "80%",
            margin: "0px auto",
          }}
          timer={3}
          render={() => {
            return (
              <>
                {cardInfo.map((data: any, i: number) => {
                  return (
                    <Card
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="flex justify-between items-center"
                      key={i}
                    >
                      <Box style={{ padding: "9%" }}>
                        {data.icon}
                        <Ui.Text
                          fontSize="17px"
                          className="font-black mb-3 mt-4"
                          text={data.info}
                        />
                        <Ui.Text fontSize={"12px"} text={data.subText} />
                        <motion.div className="mt-11">
                          <Ui.Button
                            fontSize={10}
                            style={{
                              background: "none",
                              textDecoration: "underline",
                              textUnderlineOffset: "10px",
                            }}
                            className="p-0 m-0"
                          >
                            <>
                              <Ui.Text text="Read more" />
                              <AiOutlineArrowRight
                                style={{ fontSize: "15px" }}
                                className="pl-1"
                              />
                            </>
                          </Ui.Button>
                        </motion.div>
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
