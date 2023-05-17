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
        color={"white"}
        fontSize={16}
        borderRadius="10px"
        backgroundColor={"#3B1FA4"}
        className="hover h-12  text-sm font-black"
        width="150px"
        style={{ margin: "30px auto" }}
      />
    </Wrapper>
  );
};

export default ErrorBoundary;
