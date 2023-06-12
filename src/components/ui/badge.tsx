import React from "react";
import styled, { CSSProperties } from "styled-components";
import { BadgeProps } from "../../interface/index.interface";

const Wrapper = styled.div<CSSProperties>`
  background: ${(props) => props.background};
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.borderRadius || "50%"};
  margin: auto;
`;

const Badge: React.FC<React.PropsWithChildren<BadgeProps>> = ({
  background,
  children,
  borderRadius,
  ...rest
}) => {
  return (
    <Wrapper background={background} borderRadius={borderRadius} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Badge;
