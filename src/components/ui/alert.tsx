import { useEffect, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Wrapper = styled.div<CSSProperties>`
  width: 380px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  transition: all ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
  display: ${(props) => props.display};
`;

interface AlertProps {
  text: string;
  type: "success" | "error" | "warning";
  hasBtn?: boolean;
}

const Alert = (props: AlertProps) => {
  const { text = "", type, hasBtn } = props;
  const [visible, setVisible] = useState(!!text ? true : false);

  useEffect(() => {
    !!text ? setVisible(true) : setVisible(false);
  }, [setVisible, text]);

  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={visible ? show : hide}
      transition={{ duration: "0.4", ease: "easeInOut" }}
    >
      {visible ? (
        <Wrapper
          id="alert"
          color={
            type === "success" ? "green" : type === "error" ? "red" : "gold"
          }
          background={
            type === "success"
              ? "#59b88c60"
              : type === "error"
              ? "#f3765d60"
              : "#f1c34f8f"
          }
        >
          {text}
          {visible ? (
            <>
              {hasBtn && (
                <IoMdClose
                  style={{ cursor: "pointer" }}
                  onClick={() => setVisible(false)}
                />
              )}
            </>
          ) : null}
        </Wrapper>
      ) : null}
    </motion.div>
  );
};

export default Alert;
