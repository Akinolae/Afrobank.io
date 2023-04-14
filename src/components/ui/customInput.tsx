import React, { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Input = styled.input<CSSProperties>`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  padding-right: 15px;
  font-size: 14px;
  font-weight: bold;
  background: none;
`;
const Label = styled.span<CSSProperties>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || "12px"};
  text-transform: capitalize;
  font-weight: 800;
`;

const InputWrapper = styled.div<CSSProperties>`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
  border: ${(props) => `1px solid ${props.borderColor}`};
  transition: all ease 0.9s;
  width: ${(props) => props.width};
`;

const Error = styled.span<CSSProperties>`
  color: red;
  font-weight: 700;
  font-size: 12px;
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  label?: string;
  labelColor?: string;
  error?: string | undefined;
  option?: [{ label: string; value: string }, { label: string; value: string }];
}

const CustomInput = (props: Props) => {
  const { onChange, label, labelColor, error, option, ...rest } = props;

  return (
    <>
      {!!label ? (
        <Label color={!!error ? "red" : labelColor}>{label}</Label>
      ) : null}

      {rest?.type === "select" ? (
        <InputWrapper borderColor={!!error ? "red" : "#858282"}>
          {option?.map(({ label, value }, i) => {
            return (
              <select key={i} id={Label}>
                <option value={value}>{label}</option>
              </select>
            );
          })}
        </InputWrapper>
      ) : (
        <InputWrapper borderColor={!!error ? "red" : "#858282"}>
          <Input onChange={onChange} {...rest} />
        </InputWrapper>
      )}
      {!!error ? <Error>{error}</Error> : null}
    </>
  );
};

const CustomPasswordInput = (props: Props) => {
  const { hasIcon, label, error, ...rest } = props;
  const [isVisible, setIsVisible] = useState<React.ComponentState>(false);
  return (
    <>
      {!!label ? (
        <Label color={!!error ? "red" : rest?.labelColor}>{label}</Label>
      ) : null}
      <InputWrapper borderColor={!!error ? "red" : "#858282"}>
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
              <AiFillEye
                style={{ fontSize: "20px" }}
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : (
              <AiFillEyeInvisible
                style={{ fontSize: "20px" }}
                onClick={() => setIsVisible(!isVisible)}
              />
            )}
          </div>
        ) : null}
      </InputWrapper>
      {!!error ? <Error>{error}</Error> : null}
    </>
  );
};

export { CustomInput, CustomPasswordInput };
