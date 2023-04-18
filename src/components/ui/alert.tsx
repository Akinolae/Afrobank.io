import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageBar, MessageBarType } from "@fluentui/react";

interface AlertProps {
  text: string;
  type:
    | MessageBarType.error
    | MessageBarType.warning
    | MessageBarType.success
    | MessageBarType.info
    | MessageBarType.severeWarning;
  hasBtn?: boolean;
}

const Alert = (props: AlertProps) => {
  const { text = "", type } = props;
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
        <MessageBar
          id="alert"
          messageBarType={type}
          dismissButtonAriaLabel="Close"
          onDismiss={() => setVisible(false)}
          style={{ fontWeight: "bolder" }}
        >
          {text}
        </MessageBar>
      ) : null}
    </motion.div>
  );
};

export default Alert;
