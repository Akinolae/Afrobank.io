import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorBoundary = (props: any) => {
  return (
    <Wrapper>
        <h1>OOOps!!</h1>
      <p>An error occured</p>
    </Wrapper>
  );
};

export default ErrorBoundary;
