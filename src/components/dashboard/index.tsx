import { Routes, Route, Outlet, Link } from "react-router-dom";
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
    <MainWrapper className="w-full relative pt-4 pb-10 h-full overflow-auto scroll-mx-12">
      {/* Drawer section starts */}
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
      {/* Drawer section ends */}

      {/* Top nav starts */}
      <Box className="max-w-7xl m-auto">
        <Box className="flex justify-between items-center pl-4 pr-4 pb-4">
          <Box>
            <Ui.Text className="font-black text-lg" text="Afrobank" />
          </Box>
          <Box className="w-28 flex justify-between">
            <Ui.Button width="25px" height="25px">
              <IoIosHelpCircleOutline className="w-full h-full" />
            </Ui.Button>
            <Ui.Button onClick={toggle} width="25px" height="25px">
              <IoMdNotifications className="w-full h-full" />
            </Ui.Button>
            <Link to={"profile"} className="w-8 flex justify-center">
              <Ui.Button width="25px" height="25px">
                <FaUserCircle className="w-full h-full" />
              </Ui.Button>
            </Link>
          </Box>
        </Box>
        {/* Top nav ends */}

        {/* Sidebar and navigation Outlet for /user-dashboard */}
        <Box className="m-auto flex h-full justify-between py-2.5">
          <Box className="w-56 mr-5">
            <Sidebar />
          </Box>
          <Box className="w-11/12">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </MainWrapper>
  );
};

export default Main;
