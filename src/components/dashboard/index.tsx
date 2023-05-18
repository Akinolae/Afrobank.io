import { Routes, Route, Outlet } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import Profile from "./profile";
import { IoIosHelpCircleOutline, IoMdNotifications } from "react-icons/io";
import Ui from "../ui";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const MainWrapper = styled.div`
  background: #e8e9e7;
`;

const Box = styled.div<CSSProperties>``;

const Main = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  const notifications = [
    {
      title: "Transfer",
      description: "Fund Transfer of 10000 was successfull",
    },
    {
      title: "Transfer",
      description: "Fund Transfer of 10000 was successfull",
    },
    {
      title: "Transfer",
      description: "Fund Transfer of 10000 was successfull",
    },
    {
      title: "Transfer",
      description: "Fund Transfer of 10000 was successfull",
    },
    {
      title: "Transfer",
      description: "Fund Transfer of 10000 was successfull",
    },
  ];
  return (
    <MainWrapper className="w-full overflow-hidden relative pt-4 pb-10">
      <Ui.Drawer isOpen={isOpen} dismissPanel={toggle}>
        <Box>
          <Ui.Text text="Notifications" className="font-black text-lg" />
          <Box className="mt-5">
            {notifications.map((data: any, i: number) => {
              return (
                <Box
                  className="h-14 flex flex-col justify-start rounded mb-2 p-2 hover:opacity-40 cursor-pointer transition-all"
                  style={{ backgroundColor: "#e8e9e7" }}
                  key={i}
                >
                  <Ui.Text
                    text={data.title}
                    fontSize="12px"
                    className="text-sm font-black"
                  />
                  <Ui.Text
                    text={data.description}
                    className="font-black opacity-60"
                    fontSize="10px"
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Ui.Drawer>
      <Box className="max-w-7xl flex justify-between items-center pl-4 m-auto pr-2 pb-4">
        <Box>
          <Ui.Text className="font-black" text="Afrobank" />
        </Box>
        <Box className="w-full flex justify-end">
          <Ui.Button width="40px" height="40px">
            <IoIosHelpCircleOutline style={{ fontSize: "20px" }} />
          </Ui.Button>
          <Ui.Button onClick={toggle} width="40px" height="40px">
            <IoMdNotifications style={{ fontSize: "20px" }} />
          </Ui.Button>
          <Ui.Button width="40px" height="40px">
            <FaUserCircle style={{ fontSize: "20px" }} />
          </Ui.Button>
        </Box>
      </Box>
      <Box className="max-w-7xl m-auto flex h-full justify-between py-2.5">
        <Box className="w-36">
          <Sidebar />
        </Box>
        <Box className="w-11/12">
          <Outlet />
          <Routes>
            <Route path="/user-dashboard/*" element={<Profile />}>
              <Route index={false} path="payment" element={<>payment</>} />
              <Route path="profile" element={<Profile />} />
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
