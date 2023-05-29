import React from "react";
import styled, { CSSProperties } from "styled-components";
import { TailSpin } from "react-loader-spinner";

const ButtonComponent = styled.button<CSSProperties>`
  border: none;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius || ""};
  font-size: ${(props) => `${props.fontSize}px` || "14px"};
  transition: all ease 0.3s;
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

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactElement;
  text?: string;
  color?: string;
  borderRadius?: string;
  backgroundColor?: string;
  fontSize?: number;
  height?: number | string;
  isLoading?: boolean;
  width?: string | string;
  className?: string;
}

const Button = (props: Props) => {
  const {
    isLoading,
    children,
    className,
    width,
    height,
    borderRadius,
    ...rest
  } = props;
  return (
    <ButtonComponent
      className={`flex ${className}`}
      width={isLoading ? "45px" : !!width ? width : "100%"}
      height={isLoading ? "45px" : height}
      borderRadius={isLoading ? "50%" : borderRadius}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Loader /> : props.text}
      {children}
    </ButtonComponent>
  );
};

export default Button;
