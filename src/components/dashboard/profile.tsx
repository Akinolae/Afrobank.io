import Ui from "../ui";
import styled from "styled-components";

const Box = styled.div`
  height: 100vh;
`;

const Profile = () => {
  return (
    <Box className="flex justify-between w-full h-full">
      <Ui.Text text="Profile page" />
    </Box>
  );
};
export default Profile;
