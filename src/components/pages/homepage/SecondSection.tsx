import styled from "styled-components";
import Ui from "../../ui";
import image from "../../../assets/img.jpeg";
import { breakpoints } from "../../../breakpoints";
import React from "react";

const { xScreen, largeScreen } = breakpoints();
const Box = styled.div`
  width: 100%;
`;

const Body = styled(Box)`
  ${xScreen} {
    flex-direction: column;
    width: 100%;
  }
  ${largeScreen} {
    flex-direction: column;
    width: 100%;
  }
`;

const ImageWrapper = styled(Box)`
  width: 50%:
  ${xScreen} {
    width: 90%;
  }
`;

const SecondSection: React.FC = () => {
  return (
    <Box
      style={{
        height: "100vh",
        zIndex: 1,
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      className="bg-black flex-center"
    >
      <Ui.AnimationWrapper
        animationStart={{
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 3,
          },
        }}
        animationEnd={{ x: "-100vw", opacity: 0 }}
        render={() => (
          <Box className="max-w-6xl m-auto">
            <Body
              className="flex-between m-auto"
              style={{
                height: "70%",
                width: "90%",
                borderRadius: "28px",
              }}
            >
              <ImageWrapper className="mb-4 md:mb-4 lg:mb-0 flex justify-center items-center w-full h-full text-center flex-col">
                <Ui.Text
                  className="font-black text-white text-xl lg:text-2xl"
                  text="Find which plan works best for you"
                />
                <Ui.Text
                  className="font-black text-white text-xs lg:text-sm"
                  text="Not sure which plan to go with?
            Our team can help!"
                />
              </ImageWrapper>
              <ImageWrapper className="w-full h-full flex">
                <img
                  src={image}
                  height={"100%"}
                  width={"100%"}
                  style={{
                    borderTopRightRadius: "28px",
                    borderBottomRightRadius: "28px",
                    objectFit: "contain",
                  }}
                />
              </ImageWrapper>
            </Body>
          </Box>
        )}
      />
    </Box>
  );
};

export default SecondSection;
