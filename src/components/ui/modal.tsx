import React, { JSXElementConstructor, useEffect } from "react";
import styled, { CSSProperties } from "styled-components";
import { motion, usePresence, AnimatePresence } from "framer-motion";
import Ui from ".";
import { AiOutlineClose } from "react-icons/ai";
import Drawer from "./drawer";

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

interface ModalProps {
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
    <Wrapper>
      <AnimatePresence>
        {type === "drawer" ? (
          <Drawer isOpen={isOpen} dismissPanel={toggle} {...rest}>
            <>{children}</>
          </Drawer>
        ) : (
          <ModalComponent
            className="scroll-bar"
            width={width}
            initial={{ y: "6rem", scale: 0.95, opacity: 0 }}
            animate={
              isOpen
                ? { y: 0, scale: 1, opacity: 1 }
                : { opacity: 0, y: "6rem", scale: 0.95 }
            }
            exit={{ opacity: 0 }}
            style={{
              boxShadow: "3px 3px 6px rgba(0,0,0,0.035)",
              width:
                size === "large"
                  ? "90%"
                  : size === "medium"
                  ? "70%"
                  : size === "small"
                  ? "30%"
                  : "",
            }}
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
                <Ui.Button
                  onClick={toggle}
                  style={{ background: "transparent" }}
                >
                  <AiOutlineClose size={"24px"} />
                </Ui.Button>
              </div>
            ) : null}
            {children}
          </ModalComponent>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Modal;
