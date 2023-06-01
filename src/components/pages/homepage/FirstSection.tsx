import styled from "styled-components";
import Ui from "../../ui";
import { motion } from "framer-motion";
import { IoIosInformationCircleOutline } from "react-icons/io";
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
    bottom: 0;
    z-index: 1;
    width: 100%;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background: #e8e9e7;
  }
`;
const Body = styled(motion.div)`
  height: 100vh;
  transition: all ease 0.3s;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 595px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  @media only screen and (max-width: 595px) {
    width: 100%;
  }
`;

const FirstSection = () => {
  return (
    <Box className="py-5 px-6 bg-black">
      <Box className="max-w-6xl m-auto">
        <Nav
          className="flex justify-between align-middle"
          style={{
            height: "50px",
          }}
        >
          <div>
            <span className="text-white text-3xl">Afrobank</span>
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
        <Body>
          <Box
            className="h-full w-full flex flex-col justify-center pr-16"
            style={{
              width: "55%",
            }}
          >
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
                    className="lg:text-5xl md:text-3xl sm:text-2xl font-black text-white"
                    style={{
                      paddingBottom: "12px",
                      fontWeight: "900",
                      backgroundSize: "10px",
                      lineHeight: "55px",
                    }}
                    text="The modern way to send & recieve money"
                  />

                  <Ui.Text fontSize="19px" style={{ color: "#cbcbcb" }}>
                    <>
                      Trust Afrobank to deliver lightening fast, <br />
                      safe and secure transactions, it's what we live by,
                      <br />
                      we stand by our words.
                    </>
                  </Ui.Text>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32"
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
          <Box
            style={{ width: "45%" }}
            className="flex justify-end items-center relative"
          >
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
