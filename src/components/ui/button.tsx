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
  display: flex;
  justify-content: center;
  align-items: center;
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
  text: string;
  color?: string;
  borderRadius?: string;
  backgroundColor?: string;
  fontSize?: number;
  height?: number | string;
  isLoading?: boolean;
  width?: string | string;
}

const Button = (props: Props) => {
  const { isLoading } = props;
  return (
    <ButtonComponent
      width={isLoading ? "45px" : "100%"}
      height={isLoading ? "45px" : "50px"}
      borderRadius={isLoading ? "50%" : "10px"}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader /> : props.text}
    </ButtonComponent>
  );
};

export default Button;
