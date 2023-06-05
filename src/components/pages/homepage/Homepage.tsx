import styled from "styled-components";
import Ui from "../../ui";
import { MdOutlineCopyright } from "react-icons/md";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import ForthSection from "./ForthSection";
import React from "react";

const Box = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Footer: React.FC = () => (
  <Box
    style={{
      backgroundColor: "#E8E9E7",
      padding: "2%",
    }}
  >
    <Box
      style={{
        display: "flex",
        padding: 0,
      }}
      className="max-w-6xl m-auto"
    >
      <MdOutlineCopyright />
      <Ui.Text
        text={`${new Date().getFullYear()} `}
        fontSize="12px"
        fontWeight={900}
      />
      <br />
      <Ui.Text fontSize="12px" fontWeight={900} text=" All rights reserved" />
    </Box>
  </Box>
);

const Homepage = () => {
  return (
    <Box className="bg-dots">
      <FirstSection />
      <ThirdSection />
      <SecondSection />
      <ForthSection />
      <Footer />
    </Box>
  );
};

export default Homepage;
