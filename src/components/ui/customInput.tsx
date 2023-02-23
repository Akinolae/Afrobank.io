import React, { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Input = styled.input<CSSProperties>`
  border: none;
  outline: none;
  height: 100%;
  width: ${(props) => props.width || "100%"};
  padding-right: 15px;
`;
const Label = styled.span<CSSProperties>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

const InputWrapper = styled.div`
  height: 60px;
  width: 400px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  label?: string;
  labelColor?: string;
}

const CustomInput = (props: Props) => {
  const { onChange, label, labelColor, ...rest } = props;
  return (
    <>
      {!!label ? <Label color={labelColor}>{label}</Label> : null}
      <InputWrapper>
        <Input onChange={onChange} {...rest} />
      </InputWrapper>
    </>
  );
};

const CustomPasswordInput = (props: Props) => {
  const { hasIcon, label, ...rest } = props;
  const [isVisible, setIsVisible] = useState<React.ComponentState>(false);
  return (
    <>
      {!!label ? <Label>{label}</Label> : null}
      <InputWrapper>
        <Input type={isVisible ? "text" : "password"} {...rest} />
        {hasIcon ? (
          <div
            style={{
              cursor: "pointer",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isVisible ? (
              <AiFillEyeInvisible
                style={{ fontSize: "24px" }}
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : (
              <AiFillEye
                style={{ fontSize: "24px" }}
                onClick={() => setIsVisible(!isVisible)}
              />
            )}
          </div>
        ) : null}
      </InputWrapper>
    </>
  );
};

export { CustomInput, CustomPasswordInput };
