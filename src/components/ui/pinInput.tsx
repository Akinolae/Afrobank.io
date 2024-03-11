import React, { useId } from "react";
import PinInput from "react-pin-input";
import { PinProps } from "../../interface/index.interface";

const Pin: React.FC<PinProps> = ({ length, onChange, type, ...rest }) => {
  return (
    <PinInput
      length={length}
      onChange={onChange}
      style={{
        margin: "auto",
        display: "flex",
        gap: "10px",
        marginBottom: "2%"
      }}
      inputStyle={{
        borderColor: "#858282",
        height: "50px",
        width: "50px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: "bold",
        margin: "auto",
      }}
      inputFocusStyle={{
        borderColor: "#3B1FA4",
        borderWidth: "2px",
        borderStyle: "solid",
      }}
      {...rest}
    />
  );
};

export default Pin;
