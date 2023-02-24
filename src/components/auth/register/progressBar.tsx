import React from "react";
import styled, { CSSProperties } from "styled-components";

const ProgressDotStyle = styled.div<CSSProperties | any>`
  border: ${(props) =>
    props.index <= props.progress ? ` 3px solid #3B1FA4` : `3px solid grey`};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 0.4s ease;
`;
export const ProgressDotDiv = styled.div<CSSProperties | any>`
  background: #3b1fa4;
  transform: translateY(-40%);
  border-radius: 5px;
  width: ${(props) =>
    props.progress === 0
      ? "0%"
      : props.progress === 1
      ? "33%"
      : props.progress === 2
      ? "66%"
      : props.progress === 3
      ? "99%"
      : null};
  height: 4px;
  z-index: 1;
  transition: 0.4s ease;
`;

interface Props {
  index?: number;
  progress?: number;
}

const ProgressBar = (props: Props) => {
  return (
    <ProgressDotDiv progress={props.progress}>
      <ProgressDotStyle
        progress={props.progress}
        index={props.index}
      ></ProgressDotStyle>
    </ProgressDotDiv>
  );
};

export default ProgressBar;
