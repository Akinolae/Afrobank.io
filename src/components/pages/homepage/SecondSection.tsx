import styled from "styled-components";
import Ui from "../../ui";
import image from "../../../assets/img.jpeg";
import { breakpoints } from "../../../breakpoints";

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

const SecondSection = () => {
  return (
    <Box
      style={{
        height: "75vh",
        zIndex: 1,
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      className="bg-dots flex-center"
    >
      <Box className="max-w-6xl m-auto">
        <Body
          className="flex-between m-auto"
          style={{
            height: "70%",
            width: "90%",
            borderRadius: "28px",
          }}
        >
          <ImageWrapper
            style={{
              background: "#E8E9E7",
              borderTopLeftRadius: "28px",
              borderBottomLeftRadius: "28px",
            }}
            className="flex justify-center items-center w-full h-full text-center flex-col"
          >
            <Ui.Text
              className="font-black text-2xl"
              text="Find which plan works best for you"
            />
            <Ui.Text
              className="font-black text-sm"
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
                objectFit: "contain"
              }}
            />
          </ImageWrapper>
        </Body>
      </Box>
    </Box>
  );
};

export default SecondSection;
