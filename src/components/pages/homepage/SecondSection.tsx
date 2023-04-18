import styled from "styled-components";
import Ui from "../../ui";
import image from "../../../assets/img.jpeg";

const Box = styled.div`
  width: 100%;
`;

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

export default SecondSection;
