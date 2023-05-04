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
      padding: "2%",
    }}
  >
    <Box
      style={{
        display: "flex",
        padding: 0,
      }}
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
    <Box>
      <FirstSection />
      <SecondSection />
      <Footer />
      {/* <FirstPage /> */}
    </Box>
  );
};

export default Homepage;
