import styled from "styled-components";
import Ui from "./components/ui";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ErrorBoundary = (props: any) => {
  return (
    <Wrapper>
      <span
        style={{
          fontSize: "30px",
        }}
      >
        😩
      </span>
      <h1>OOOps!!</h1>
      <p>An error occured</p>
      <Ui.Button
        text="Homepage"
        backgroundColor={"#3B1FA4"}
        color={"white"}
        fontSize={16}
        style={{
          margin: "30px auto",
          fontWeight: 500,
          width: "200px",
          cursor: "pointer",
        }}
      />
    </Wrapper>
  );
};

export default ErrorBoundary;
