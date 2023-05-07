import React from "react";
import styled, { CSSProperties } from "styled-components";
import { breakpoints } from "../../breakpoints";

const { xScreen } = breakpoints();

const TextComponent = styled.p<CSSProperties | any>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  ${xScreen} {
    font-size: ${(props) => props.size || props.fontSize};
  }
`;

interface Props {
  text: string;
  style?: React.CSSProperties;
  fontWeight?: string | number;
  fontSize?: string;
  className?: string;
}

const Text = (props: Props) => {
  const { text, className, ...rest } = props;
  return (
    <TextComponent className={className} {...rest}>
      {text}
    </TextComponent>
  );
};

export default Text;
