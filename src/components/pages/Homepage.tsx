import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const InnerWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ComponentWrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  transition: all ease 0.3s;
`;

interface Props {
  index: number;
}

const FirstPage = (props: Props) => (
  <ComponentWrapper
    style={{
      opacity: props.index === 0 ? 1 : 0,
    }}
  >
    <InnerWrapper>
      <h1>Hello first</h1>
      <button onClick={() => alert("KKKK")}>click me</button>
    </InnerWrapper>
  </ComponentWrapper>
);

const SecondPage = (props: Props) => (
  <ComponentWrapper
    style={{
      opacity: props.index === 1 ? 1 : 0,
    }}
  >
    <InnerWrapper>
      <h1>Hello second</h1>
    </InnerWrapper>
  </ComponentWrapper>
);

const ThirdPage = (props: Props) => (
  <ComponentWrapper
    style={{
      opacity: props.index === 2 ? 1 : 0,
    }}
  >
    <InnerWrapper>
      <h1>Hello third</h1>
    </InnerWrapper>
  </ComponentWrapper>
);

const components = [
  {
    component: FirstPage,
  },
  {
    component: SecondPage,
  },
  {
    component: ThirdPage,
  },
];

const Page = (props: Props) => {
  const { index } = props;

  return (
    <>
      {components.map((data, i) => {
        return <data.component index={index} key={i} />;
      })}
    </>
  );
};

const Homepage = () => {
  const [page, setPage] = React.useState(0);

  setInterval(() => {
    setPage(page === components.length ? 0 : page + 1);
  }, 4000);

  return (
    <Wrapper>
      <InnerWrapper>
        <Page index={page} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Homepage;
