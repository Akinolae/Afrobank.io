import styled from "styled-components";
import Ui from "../ui";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineCopyright } from "react-icons/md";
import image from "../../assets/img.jpeg";

const Box = styled.div`
  width: 100%;
`;
const FirstPage = () => {
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
              // className="hover"
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

const SecondSection = () => {
  return (
    <Box
      style={{
        height: "75vh",
      }}
      className="bg-dots flex-center"
    >
      <Box
        className="flex-between"
        style={{
          height: "60vh",
          width: "90%",
          borderRadius: "28px",
        }}
      >
        <Box
          style={{
            width: "50%",
            height: "100%",
            background: "#E8E9E7",
            borderTopLeftRadius: "28px",
            borderBottomLeftRadius: "28px",
            flexDirection: "column",
          }}
          className="flex-center"
        >
          <Ui.Text
            fontSize="26px"
            fontWeight={900}
            text="Find which plan
            works best for you"
          />
          <Ui.Text
            fontSize="18px"
            fontWeight={900}
            text="Not sure which plan to go with?
            Our team can help!"
          />
        </Box>
        <Box
          style={{
            width: "50%",
            height: "100%",
          }}
        >
          <img
            src={image}
            height={"100%"}
            width={"100%"}
            style={{
              objectFit: "cover",
              borderTopRightRadius: "28px",
              borderBottomRightRadius: "28px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const Footer = () => (
  <Box
    style={{
      backgroundColor: "#E8E9E7",
    }}
  >
    <Box
      style={{
        padding: "1%",
        display: "flex",
      }}
    >
      <MdOutlineCopyright />
      <Ui.Text
        text={`${new Date().getFullYear()}`}
        fontSize="12px"
        fontWeight={900}
      />
    </Box>
    <Box
      style={{
        paddingLeft: "1%",
        paddingBottom: "1%",
        lineHeight: "1px",
      }}
    >
      <Ui.Text fontSize="12px" fontWeight={900} text="All rights reserved" />
    </Box>
  </Box>
);

const Homepage = () => {
  return (
    <Box>
      <FirstPage />
      <SecondSection />
      <Footer />
      {/* <FirstPage /> */}
    </Box>
  );
};

export default Homepage;
