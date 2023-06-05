import React, { JSXElementConstructor, useEffect } from "react";
import styled, { CSSProperties } from "styled-components";
import { motion, usePresence, AnimatePresence } from "framer-motion";
import Ui from "../ui";
import { AiOutlineClose } from "react-icons/ai";
import Drawer from "../ui/drawer";
import { Modal as FluentiUiModal } from "@fluentui/react";
import { IoMdClose } from "react-icons/io";

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;
`;

const ModalComponent = styled(motion.div)<CSSProperties>`
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "300px"};
  border-radius: 20px;
  background: red;
  position: absolute;
  top: 37%;
  left: 20%;
  padding: 1%;
  overflow-y: scroll;
`;

export interface ModalProps {
  isOpen: boolean;
  toggle(): void;
  width?: number | string;
  showCloseButton?: boolean;
  size?: "small" | "medium" | "large";
  type: "modal" | "drawer";
  styles?: object;
  className?: string;
  color?: string;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  isOpen,
  width,
  toggle,
  showCloseButton,
  size,
  type,
  styles,
  ...rest
}) => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);

  return (
    <AnimatePresence>
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
    </AnimatePresence>
  );
};

export default Modal;
