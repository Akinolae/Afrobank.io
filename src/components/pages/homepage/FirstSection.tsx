import styled from "styled-components";
import Ui from "../../ui";
import { motion } from "framer-motion";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Box = styled.div`
  width: 100%;
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
      <Box
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
      </Box>
      <Box className="flex-center flex-column bg" style={{ height: "100vh" }}>
        <Box
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          <Ui.Text
            fontSize="44px"
            style={{
              paddingBottom: "12px",
              lineHeight: "54px",
              fontWeight: "700",
            }}
            text="The modern way to send and recieve money"
          />
          <Ui.Text text="Fast free and efficient" fontSize="22px" />
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
        <Box
          style={{ marginTop: "10px", width: "50%" }}
          className="flex-center"
        >
          <Ui.Badge
            background="#f2edc9"
            borderRadius="10px"
            style={{ padding: "5px", textAlign: "center", width: "28%" }}
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
      </Box>
    </Box>
  );
};

export default FirstSection;
