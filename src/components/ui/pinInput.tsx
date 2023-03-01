import React, { useId } from "react";
import styled from "styled-components";

interface PinProps extends React.InputHTMLAttributes<HTMLInputElement> {
  length: number;
  secrete?: boolean;
  type?: string;
}

const Input = styled.input`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const PinWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PinInput = (props: PinProps) => {
  const { length, onChange, type, ...rest } = props;

  return (
    <PinWrapper>
      {Array(length)
        .fill("")
        .map((_, index) => {
          const id = useId();

          return (
            <Input
              type={type}
              //   value={"******"}
              id={`pin-${id}`}
              key={index}
              onChange={onChange}
              {...rest}
            />
          );
        })}
    </PinWrapper>
  );
};

export default PinInput;
