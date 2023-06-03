import styled from "styled-components";
import Ui from "../../ui";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import woman from "../../../assets/happy.jpeg";

const Box = styled(motion.div)`
  width: 100%;
`;

const Nav = styled(Box)`
  @media only screen and (max-width: 595px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background: black;
  }
`;
const Body = styled(motion.div)``;

const Image = styled.img`
  @media only screen and (max-width: 595px) {
    width: 100%;
  }
`;

const FirstSection = () => {
  return (
    <Box className="pl-10 pr-10 bg-black">
      <Box className="max-w-6xl m-auto">
        <Nav className="flex justify-between pt-10 pb-4 align-middle">
          <div>
            <span className="text-white text-xl lg:text-3xl">Afrobank</span>
          </div>
          <div className="flex">
            <Link to="/signup">
              <Ui.Button
                text="Create account"
                color={"white"}
                fontSize={10}
                className="hover h-9 font-black justify-center items-center"
                width="7rem"
                backgroundColor={"#3B1FA4"}
                borderRadius="50px"
              />
            </Link>
            <Link to="/login">
              <Ui.Button
                fontSize={10}
                text="Login"
                color={"white"}
                className="hover ml-3 h-9 font-black justify-center items-center"
                width="4rem"
                backgroundColor={"#3B1FA4"}
                borderRadius="50px"
              />
            </Link>
          </div>
        </Nav>
        <Body className="flex flex-col h-screen md:flex-col lg:flex-row">
          <Box className="pt-14 h-full flex flex-col justify-center items-center">
            <Ui.SlideAnimationWrapper
              animationStart={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 2.5,
                },
              }}
              animationEnd={{ x: "-100vw", opacity: 0 }}
              render={() => (
                <>
                  <Ui.Text
                    className="lg:leading-tight text-center md:text-center lg:text-start lg:text-5xl md:text-3xl sm:text-2xl font-black text-white"
                    style={{
                      paddingBottom: "12px",
                      fontWeight: "900",
                      backgroundSize: "10px",
                    }}
                    text="The modern way to send & recieve money"
                  />

                  <Ui.Text
                    className="text-xs pl-6 pr-6 leading-6 md:leading-tight md:pr-8 lg:pl-0 md:pl-8 text-center md:text-sm lg:text-lg md:text-center lg:text-start lg:pr-32"
                    style={{ color: "#cbcbcb" }}
                  >
                    <>
                      Trust Afrobank to deliver lightening fast, safe and secure
                      transactions, it's what we live by, we stand by our words.
                    </>
                  </Ui.Text>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full md:w-32 lg:w-32 md:m-auto lg:m-0"
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link to="/signup">
                      <Ui.Button
                        text="Get started"
                        height={"40px"}
                        fontSize={12}
                        color={"white"}
                        backgroundColor={"#3B1FA4"}
                        borderRadius="10px"
                        style={{ fontWeight: 500 }}
                        className="justify-center items-center mt-9"
                      />
                    </Link>
                  </motion.div>
                 
                </>
              )}
            />
          </Box>
          <Box className="h-full md:w-full sm:w-45 xl:w-45 flex lg:justify-center lg:items-center relative">
            <Ui.SlideAnimationWrapper
              animationStart={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 3,
                },
              }}
              animationEnd={{ x: "100vw", opacity: 0 }}
              render={() => (
                <Image
                  src={woman}
                  style={{ borderRadius: "20px" }}
                  height={"100%"}
                  width={"100%"}
                  alt="woman"
                />
              )}
            />
          </Box>
        </Body>
      </Box>
    </Box>
  );
};

export default FirstSection;
