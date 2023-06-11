import React from "react";
import Modal from "./modal";
import ui from "../ui";

interface ModalProps {
  isOpen: boolean;
  toggle(): void;
  onChange: (params: any) => any;
}

const Pin: React.FC<ModalProps> = ({ isOpen, toggle, onChange }) => {
  return (
    <Modal type="drawer" isOpen={isOpen} toggle={toggle}>
      <ui.Text text="Pin" className="font-black text-lg mb-10" />
      <div className="h-[100px] flex justify-center items-center">
        <ui.PinInput length={4} onChange={console.log} />
        <div className="absolute top-100 bottom-0 left-0 right-0 pl-4 pr-4">
          <ui.Button
            // isLoading={true}
            text="Submit"
            className="hover h-10 font-black justify-center m-auto items-center"
            color={"white"}
            backgroundColor={"#3B1FA4"}
            borderRadius="10px"
            width="100%"
            style={{
              marginTop: "22px",
              marginBottom: "22px",
              fontSize: "12px",
            }}
            type="submit"
          />
        </div>
      </div>
    </Modal>
  );
};

export default Pin;
