import styled from "styled-components";
import Ui from "../../ui";
import { motion } from "framer-motion";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { breakpoints } from "../../../breakpoints";

const { xScreen } = breakpoints();

const Box = styled.div`
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
  height: 100vh;
  ${xScreen} {
    width: 90%;
    height: 55vh;
  }
`;
const FirstSection = () => {
  return (
    <Box
      className="flex-center"
      style={{
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "#E8E9E7",
      }}
    >
      <Nav
        className="flex-between"
        style={{
          padding: "1%",
          height: "50px",
          border: "1px solid #e3e1e1",
        }}
      >
        <div
          style={{
            paddingLeft: "5%",
          }}
        >
          <Ui.Text text="Logo" />
        </div>
        <div
          style={{
            padding: "5%",
          }}
        >
          <Link to="/login">
            <Ui.Button
              text="Login"
              height={"45px"}
              fontSize={16}
              color={"white"}
              className="hover"
              backgroundColor={"#3B1FA4"}
              style={{
                fontWeight: 900,
                minWidth: "150px",
                borderRadius: "50px",
              }}
            />
          </Link>
        </div>
      </Nav>
      <Body className="flex-center flex-column bg">
        <Box
          style={{
            textAlign: "center",
          }}
        >
          <Ui.Text
            fontSize="20px"
            style={{
              paddingBottom: "12px",
              lineHeight: "25px",
              fontWeight: "900",
            }}
            text="The modern way to send and recieve money"
          />
          <Ui.Text text="Fast free and efficient" />
        </Box>
        <motion.div
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
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
