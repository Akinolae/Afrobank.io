import React from "react";
import styled, { CSSProperties } from "styled-components";

const ButtonComponent = styled.button<CSSProperties>`
  border: none;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => `${props.height}px`};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius || ""};
  font-size: ${(props) => `${props.fontSize}px` || "14px"};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
  borderRadius?: string;
  backgroundColor?: string;
  fontSize?: number;
  height?: number;
}

const Button = (props: Props) => {
  return <ButtonComponent {...props}>{props.text}</ButtonComponent>;
};

export default Button;
