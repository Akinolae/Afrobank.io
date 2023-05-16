import { Routes, Route } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";

const MainWrapper = styled.div`
  background: #e8e9e7;
`;

const Box = styled.div<CSSProperties>``;

const Main = () => {
  return (
    <MainWrapper className="w-full overflow-hidden relative pt-10 pb-10">
      <Box className="flex h-full justify-center py-2.5">
        <Box className="w-40 mr-8">
          <Sidebar />
        </Box>
        <Box className="w-4/5">
          <Routes>
            <Route path="/user-dashboard//*" element={<Dashboard />}>
              <Route path="Payment" element={<>payment</>} />
              <Route path="send-money" element={<>send money</>} />
            </Route>
          </Routes>
          <Dashboard />
        </Box>
      </Box>
    </MainWrapper>
  );
};

export default Main;
