import { Routes, Route } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";

const MainWrapper = styled.div`
  width: 100%;
`;

const Box = styled.div<CSSProperties>`
  width: ${(props) => props.width};
  height: 100vh;
`;

const Main = () => {
  return (
    <MainWrapper className="flex-between">
      <Box width={"20%"}>
        <Sidebar />
      </Box>
      <Box width={"80%"} style={{ background: "yellow" }}>
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
