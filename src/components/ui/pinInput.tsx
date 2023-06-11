import React, { useId } from "react";
import PinInput from "react-pin-input";

interface PinProps {
  length: number;
  secrete?: boolean;
  type?: string;
  onChange: (params: any) => any;
}

const Pin: React.FC<PinProps> = ({ length, onChange, type, ...rest }) => {
  return (
    <PinInput
      length={length}
      onChange={onChange}
      inputStyle={{
        borderColor: "#858282",
        height: "60px",
        width: "60px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "10px",
        margin: "4px",
        fontSize: "16px",
        fontWeight: "bold"
        
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
