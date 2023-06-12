import React from "react";
import styled, { CSSProperties } from "styled-components";
import { breakpoints } from "../../breakpoints";
import { TextProps } from "../../interface/index.interface";

const { xScreen } = breakpoints();

const TextComponent = styled.p<CSSProperties | any>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  ${xScreen} {
    font-size: ${(props) => props.size || props.fontSize};
  }
`;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  text,
  className,
  children,
  ...rest
}) => {
  return (
    <TextComponent className={className} {...rest}>
      {children}
      {text}
    </TextComponent>
  );
};

export default Text;
