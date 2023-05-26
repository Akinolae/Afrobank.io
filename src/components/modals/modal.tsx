import React, { JSXElementConstructor, useEffect } from "react";
import styled, { CSSProperties } from "styled-components";
import { motion, usePresence, AnimatePresence } from "framer-motion";
import Ui from "../ui";
import { AiOutlineClose } from "react-icons/ai";
import Drawer from "../ui/drawer";
import { Modal as FluentiUiModal } from "@fluentui/react";

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
  children?: React.ReactElement<any, string | JSXElementConstructor<any>>;
  isOpen: boolean;
  toggle(): void;
  width?: number | string;
  showCloseButton?: boolean;
  size?: "small" | "medium" | "large";
  type: "modal" | "drawer";
}

const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    width,
    toggle,
    showCloseButton,
    size,
    type,
    ...rest
  } = props;
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
        <FluentiUiModal isOpen={isOpen} onDismiss={toggle}>
          {/* {showCloseButton ? (
              <div
                style={{
                  width: "50px",
                  position: "absolute",
                  transform: "translate(460px, 0px)",
                }}
              >
                <Ui.Button
                  onClick={toggle}
                  style={{ background: "transparent" }}
                >
                  <AiOutlineClose size={"24px"} />
                </Ui.Button>
              </div>
            ) : null} */}
          {children}
        </FluentiUiModal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
