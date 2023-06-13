import Ui from "../ui";
import React from "react";
import Drawer from "../ui/drawer";
import { IoMdClose } from "react-icons/io";
import { ModalProps } from "../../interface/index.interface";
import { Modal as FluentiUiModal } from "@fluentui/react";

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  type,
  size,
  width,
  toggle,
  isOpen,
  styles,
  children,
  showCloseButton,
  ...rest
}) => {
  return (
    <>
      {type === "drawer" ? (
        <Drawer isOpen={isOpen} dismissPanel={toggle} {...rest}>
          <>{children}</>
        </Drawer>
      ) : (
        <FluentiUiModal
          styles={styles}
          isOpen={isOpen}
          onDismiss={toggle}
          {...rest}
        >
          <div className="flex justify-end w-full">
            <Ui.Button
              width="20px"
              height={"20px"}
              className="text-lg w-full"
              onClick={toggle}
            >
              <IoMdClose />
            </Ui.Button>
          </div>
          <div className="h-full">{children}</div>
        </FluentiUiModal>
      )}
    </>
  );
};

export default Modal;
