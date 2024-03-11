import Ui from "../ui";
import styled from "styled-components";

const Box = styled.div`
  height: 100vh;
`;

const Settings = () => {
  return (
    <Box className="flex justify-between w-full h-full">
      <Ui.Text text="Settings" />
    </Box>
  );
};
export default Settings;
