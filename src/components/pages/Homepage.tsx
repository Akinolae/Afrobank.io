import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;

const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NavWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: yellow;
  padding-left: 2%;
`;

const FirstPage = () => {
  return (
    <ComponentWrapper
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavWrapper>
        <h1>Hello first</h1>
      </NavWrapper>
      <button onClick={() => alert("KKKK")}>click me</button>
    </ComponentWrapper>
  );
};

const Homepage = () => {
  return (
    <Wrapper>
      <FirstPage />
      {/* <FirstPage /> */}
    </Wrapper>
  );
};

export default Homepage;
