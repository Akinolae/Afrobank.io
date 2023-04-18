import { Routes, Route } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";

const MainWrapper = styled.div`
  width: 100%;
  background: #e8e9e7;
  padding-bottom: 10%;
`;

const Box = styled.div<CSSProperties>`
  width: ${(props) => props.width};
  height: 100%;
`;

const Main = () => {
  return (
    <MainWrapper
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        style={{
          paddingLeft: "10%",
          paddingTop: "5%",
        }}
        width={"20%"}
      >
        <Sidebar />
      </Box>
      <Box
        style={{
          paddingRight: "10%",
          paddingTop: "5%",
        }}
        width={"80%"}
      >
        <Routes>
          <Route path="/user-dashboard//*" element={<Dashboard />}>
            <Route path="Payment" element={<>payment</>} />
            <Route path="send-money" element={<>send money</>} />
          </Route>
        </Routes>
        <Dashboard />
      </Box>
    </MainWrapper>
  );
};

export default Main;
