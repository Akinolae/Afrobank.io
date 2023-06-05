import React from "react";
import styled, { CSSProperties } from "styled-components";

const Wrapper = styled.div<CSSProperties>`
  background: ${(props) => props.background};
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.borderRadius || "50%"};
  margin: auto;
`;

interface Props {
  style: CSSProperties;
  background: string;
  borderRadius: string;
}

const Badge: React.FC<React.PropsWithChildren<Props>> = ({
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
