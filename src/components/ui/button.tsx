import React from "react";
import styled, { CSSProperties } from "styled-components";
import { TailSpin } from "react-loader-spinner";
import { ButtonProps } from "../../interface/index.interface";

const ButtonComponent = styled.button<CSSProperties | any>`
  border: none;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius || ""};
  font-size: ${(props) => `${props.fontSize}px` || "14px"};
  transition: width ease 0.3s;
  opacity: ${(props) => (props.disabled ? 0.8 : 1)};
  font-weight: 700;
`;

const Loader = () => (
  <TailSpin
    height="35"
    width="35"
    color="white"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  text,
  width,
  height,
  children,
  isLoading,
  className,
  borderRadius,
  ...rest
}) => {
  return (
    <ButtonComponent
      className={`flex ${className}`}
      width={isLoading ? "45px" : !!width ? width : "100%"}
      height={isLoading ? "45px" : height}
      borderRadius={isLoading ? "50%" : borderRadius}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Loader /> : text}
      {children}
    </ButtonComponent>
  );
};

export default Button;
