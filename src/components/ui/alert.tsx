import { MessageBar } from "@fluentui/react";
import { AlertProps } from "../../interface/index.interface";

const Alert: React.FC<AlertProps> = ({ text = "", type, resetChoice }) => {
  return (
    <MessageBar
      messageBarType={type}
      dismissButtonAriaLabel="Close"
      onDismiss={resetChoice}
      style={{
        fontWeight: "500",
      }}
    >
      {text}
    </MessageBar>
  );
};

export default Alert;
