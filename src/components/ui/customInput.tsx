import React, { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Input = styled.input<CSSProperties>`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  padding-right: 15px;
  font-size: 12px;
  background: none;
`;
const Label = styled.span<CSSProperties>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || "12px"};
  text-transform: capitalize;
  font-weight: 800;
`;

const InputWrapper = styled.div<CSSProperties>`
  height: 45px;
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

const Error = styled.p<CSSProperties>`
  color: red;
  font-size: 10px;
  &::first-letter {
    text-transform: capitalize;
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  label?: string;
  labelColor?: string;
  error?: string | undefined;
  option?: [{ label: string; value: string }, { label: string; value: string }];
}

const CustomInput: React.FC<Props> = ({
  onChange,
  label,
  labelColor,
  error,
  option,
  ...rest
}) => {
  return (
    <>
      {!!label ? (
        <Label color={labelColor} className="font-black">
          {label}
        </Label>
      ) : null}

      {rest?.type === "select" ? (
        <InputWrapper borderColor={"#858282"}>
          {option?.map(({ label, value }, i) => {
            return (
              <select key={i} id={Label}>
                <option value={value}>{label}</option>
              </select>
            );
          })}
        </InputWrapper>
      ) : (
        <InputWrapper borderColor={"#858282"}>
          <Input onChange={onChange} {...rest} />
        </InputWrapper>
      )}
      {!!error ? <Error className="font-black text-xs">{error}</Error> : null}
    </>
  );
};

const CustomPasswordInput: React.FC<Props> = ({
  hasIcon,
  label,
  error,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState<React.ComponentState>(false);
  return (
    <>
      {!!label ? <Label color={rest?.labelColor}>{label}</Label> : null}
      <InputWrapper borderColor={"#858282"}>
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
      {!!error ? <Error className="font-black text-xs">{error}</Error> : null}
    </>
  );
};

export { CustomInput, CustomPasswordInput };
