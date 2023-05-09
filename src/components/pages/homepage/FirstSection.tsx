import styled from "styled-components";
import Ui from "../../ui";
import { motion } from "framer-motion";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

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
    background: #e8e9e7;
  }
`;
const Body = styled(Box)`
  height: 80vh;
`;

const FirstSection = () => {
  return (
    <Box
      className="py-5 px-6"
      style={{
        overflow: "hidden",
        backgroundColor: "#E8E9E7",
      }}
    >
      <Nav
        className="flex justify-between align-middle"
        style={{
          height: "50px",
        }}
      >
        <div>
          <Ui.Text text="Logo" />
        </div>
        <div>
          <Link to="/login">
            <Ui.Button
              text="Login"
              color={"white"}
              className="hover h-10 text-sm font-black"
              width="7rem"
              backgroundColor={"#3B1FA4"}
              borderRadius="50px"
            />
          </Link>
        </div>
      </Nav>
      <Body className="flex-center flex-column">
        <Box
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            duration: 3,
          }}
          style={{
            textAlign: "center",
          }}
        >
          <Ui.Text
            className="lg:text-4xl md:text-3xl sm:text-2xl w-3/5 text-center font-black"
            style={{
              paddingBottom: "12px",
              fontWeight: "900",
              margin: "auto",
              backgroundSize: "10px",
            }}
            text="The modern way to send"
          />
          <Ui.Text
            className="lg:text-4xl md:text-3xl sm:text-2xl w-3/5 text-center font-black"
            style={{
              paddingBottom: "12px",
              fontWeight: "900",
              margin: "auto",
              backgroundSize: "10px",
              
            }}
            text="and recieve money"
          />
          <Ui.Text text="Fast free and efficient" />
        </Box>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/signup">
            <Ui.Button
              text="Get started"
              height={"40px"}
              width="150px"
              fontSize={16}
              color={"white"}
              backgroundColor={"#3B1FA4"}
              borderRadius="10px"
              style={{ fontWeight: 500, marginTop: "10px" }}
            />
          </Link>
        </motion.div>
        <Box style={{ marginTop: "10px" }} className="flex-center">
          <Ui.Badge
            background="#f2edc9"
            borderRadius="10px"
            style={{ padding: "5px", textAlign: "center", width: "250px" }}
          >
            <>
              <IoIosInformationCircleOutline
                style={{ paddingRight: "3px" }}
                size={"10px"}
              />
              <Ui.Text
                fontSize="10px"
                text="Get free sign up bonus when you register"
              />
            </>
          </Ui.Badge>
        </Box>
      </Body>
    </Box>
  );
};

export default FirstSection;
