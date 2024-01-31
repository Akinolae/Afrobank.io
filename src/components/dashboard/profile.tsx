import Ui from "../ui";
import styled from "styled-components";
import { connect } from "react-redux";
import { useBoolean } from "@fluentui/react-hooks";
import Modal from "../modals/modal";

const Box = styled.div`
  height: 100vh;
`;

const Profile = () => {
  const [isOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);
  return (
    <Box className="w-full h-full">
      <Modal type="modal" isOpen={isOpen} toggle={hideModal}>
        <Ui.Text text="test" />
      </Modal>
      <Ui.Text className="text-white" text="Profile page" />
      <div className="h-[200px] relative w-full bg-blue-950 mt-2 rounded-t-3xl">
        <div
          style={{
            border: "2px solid white",
          }}
          onClick={showModal}
          className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] absolute top-[55%] left-8 bg-rose-500 rounded-full"
        />
      </div>
      <div className="mt-[10%] w-[45%] flex flex-col justify-between">
        <Ui.CustomInput className="text-white" />
        <div className="mt-4">
          <Ui.CustomInput className="text-white" />
        </div>
        <Ui.CustomInput />
        <Ui.CustomInput />
      </div>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {};
};
export default connect(mapStateToProps, {})(Profile);
