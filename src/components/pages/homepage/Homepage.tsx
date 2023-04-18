import styled from "styled-components";
import Ui from "../../ui";
import { MdOutlineCopyright } from "react-icons/md";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const Box = styled.div`
  width: 100%;
`;

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
      <FirstSection />
      <SecondSection />
      <Footer />
      {/* <FirstPage /> */}
    </Box>
  );
};

export default Homepage;
