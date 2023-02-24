import React from "react";
import styled, { CSSProperties } from "styled-components";

const Wrapper = styled.div<CSSProperties>`
  background: ${(props) => props.background};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: auto;
`;

interface Props {
  children: React.ReactElement;
  style: CSSProperties;
  background: string;
}

const Badge = (props: Props) => {
  const { background, children, ...rest } = props;
  return (
    <Wrapper background={background} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Badge;
