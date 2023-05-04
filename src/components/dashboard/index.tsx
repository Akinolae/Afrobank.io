import { Routes, Route } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";

const MainWrapper = styled.div`
  width: 100%;
  background: #e8e9e7;

  position: relative;
  height: 100vh;
`;

const Box = styled.div<CSSProperties>`
  width: ${(props) => props.width || "100px"};
  height: 100%;
`;

const Main = () => {
  return (
    <MainWrapper>
      <Box
        style={{
          width: "80%",
          height: "100%",
          margin: "auto",
          display: "flex",
          paddingTop: "2%",
        }}
      >
        <Box
          width={"100%"}
          style={{
            maxWidth: "150px",
          }}
        >
          <Sidebar />
        </Box>
        <Box width={"80%"}>
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
