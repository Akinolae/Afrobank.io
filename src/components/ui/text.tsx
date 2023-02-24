import React, { HTMLAttributes } from "react";
import styled, { CSSProperties } from "styled-components";

const TextComponent = styled.p<CSSProperties>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`;

interface Props {
  text: string;
  style?: React.CSSProperties;
  fontWeight?: string | number;
  fontSize?: string;
}

const Text = (props: Props) => {
  const { text, ...rest } = props;
  return <TextComponent {...rest}>{text}</TextComponent>;
};

export default Text;
