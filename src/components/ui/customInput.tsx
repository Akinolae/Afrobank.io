import React, { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Input = styled.input<CSSProperties>`
  border: none;
  outline: none;
  height: 100%;
  width: ${(props) => props.width || "100%"};
  padding-right: 15px;
  font-size: 15px;
  font-weight: bold;
`;
const Label = styled.span<CSSProperties>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  text-transform: capitalize;
  font-weight: 800;
`;

const InputWrapper = styled.div`
  height: 50px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
  border: 1px solid #858282;
`;

const Error = styled.span<CSSProperties>`
  color: red;
  font-weight: bold;
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
      {!!label ? <Label color={labelColor}>{label}</Label> : null}

      {rest?.type === "select" ? (
        <InputWrapper>
          {option?.map(({ label, value }, i) => {
            return (
              <select key={i} id={Label}>
                <option value={value}>{label}</option>
              </select>
            );
          })}
        </InputWrapper>
      ) : (
        <InputWrapper>
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
              <AiFillEye
                style={{ fontSize: "24px" }}
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : (
              <AiFillEyeInvisible
                style={{ fontSize: "24px" }}
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
