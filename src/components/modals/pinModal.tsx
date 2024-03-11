import React from "react";
import Modal from "./modal";
import ui from "../ui";
import { ModalProps } from "../../interface/index.interface";

interface PinProps extends ModalProps {
  isOpen: boolean;
  toggle(): void;
  onChange: (params: any) => any;
  onSubmit: () => void;
  disabled: boolean;
}

const Pin: React.FC<PinProps> = ({
  isOpen,
  toggle,
  onChange,
  onSubmit,
  disabled,
}) => {
  return (
    <Modal type="drawer" isOpen={isOpen} toggle={toggle}>
      <ui.Text text="Pin" className="font-black text-lg mb-10" />
      <div className="h-[100px] flex justify-center items-center">
        <ui.PinInput length={4} onChange={onChange} />
        <div className="absolute top-100 bottom-0 left-0 right-0 pl-4 pr-4">
          <ui.Button
            isLoading={true}
            disabled={disabled}
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
            onClick={onSubmit}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Pin;
