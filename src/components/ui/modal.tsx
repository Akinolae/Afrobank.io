import React from "react";
import styled, { CSSProperties } from "styled-components";
import { motion, usePresence, AnimatePresence } from "framer-motion";
import Ui from ".";
import { AiOutlineClose } from "react-icons/ai";

const ModalComponent = styled(motion.div)<CSSProperties>`
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "300px"};
  border-radius: 20px;
  background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  padding: 1%;
  overflow: scroll;
`;

interface ModalProps {
  /* 
  
  */
  children?: React.ReactElement;
  isOpen: boolean;
  toggle: () => void;
  width?: number | string;
  showCloseButton?: boolean;
}

const Modal = (props: ModalProps) => {
  const { children, isOpen, width, toggle, showCloseButton, ...rest } = props;
  return (
    <AnimatePresence>
      <ModalComponent
        width={width}
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        {...rest}
      >
        {showCloseButton ? (
          <div
            style={{
              width: "50px",
              position: "absolute",
              transform: "translate(460px, 0px)",
            }}
          >
            <Ui.Button onClick={toggle} style={{ background: "transparent" }}>
              <AiOutlineClose size={"24px"} />
            </Ui.Button>
          </div>
        ) : null}
        {children}
      </ModalComponent>
    </AnimatePresence>
  );
};

export default Modal;
