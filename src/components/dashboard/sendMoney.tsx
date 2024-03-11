import Ui from "../ui";
import styled from "styled-components";

const Box = styled.div`
  height: 100vh;
`;

const SendMoney = () => {
  return (
    <Box className="flex justify-between w-full h-full">
      <Ui.Text text="send money" />
    </Box>
  );
};
export default SendMoney;
