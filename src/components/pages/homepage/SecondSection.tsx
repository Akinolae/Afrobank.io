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
      }}
      className="bg-dots flex-center"
    >
      <Body
        className="flex-between"
        style={{
          height: "60vh",
          width: "90%",
          borderRadius: "28px",
        }}
      >
        <ImageWrapper
          style={{
            height: "100%",
            background: "#E8E9E7",
            borderTopLeftRadius: "28px",
            borderBottomLeftRadius: "28px",
            flexDirection: "column",
          }}
          className="flex justify-center align-middle text-center"
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
        <ImageWrapper
          style={{
            height: "100%",
          }}
        >
          <img
            src={image}
            height={"auto"}
            width={"100%"}
            style={{
              borderTopRightRadius: "28px",
              borderBottomRightRadius: "28px",
            }}
          />
        </ImageWrapper>
      </Body>
    </Box>
  );
};

export default SecondSection;
