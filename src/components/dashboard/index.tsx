import { Routes, Route, Outlet, Link } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import Profile from "./profile";
import { IoIosHelpCircleOutline, IoMdNotifications } from "react-icons/io";
import Ui from "../ui";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import NotificationsDrawer from "./notificationsModal";
import NavModal from "./navModal";

const MainWrapper = styled.div`
  background: black;
`;

const Box = styled.div<CSSProperties>``;

const Main = () => {
  const [isOpen, setIsopen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  
  const toggleNav = () => {
    setNavOpen(!navOpen);
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
      <NotificationsDrawer
        isOpen={isOpen}
        notifications={notifications}
        toggle={toggle}
      />

      <NavModal isOpen={navOpen} toggle={toggleNav} />
      {/* Drawer section ends */}

      {/* Top nav starts */}
      <Box className="max-w-7xl m-auto">
        <Box className="flex fixed z-50 h-16 bg-black top-0 right-0 left-0 bottom-0 lg:relative justify-between items-center pl-4 pr-4 pb-4">
          <Box>
            <Ui.Text
              className="font-black text-white text-lg"
              text="Afrobank"
            />
          </Box>
          <Box className="hidden w-28 lg:flex justify-between">
            <Ui.Button width="25px" height="25px">
              <IoIosHelpCircleOutline className="w-full h-full text-white" />
            </Ui.Button>
            <Ui.Button onClick={toggle} width="25px" height="25px">
              <IoMdNotifications className="w-full h-full text-white" />
            </Ui.Button>
            <Link to={"profile"} className="w-8 flex justify-center">
              <Ui.Button width="25px" height="25px">
                <FaUserCircle className="w-full h-full text-white" />
              </Ui.Button>
            </Link>
          </Box>
          <Box className="flex lg:hidden">
            <Ui.Button onClick={toggleNav} width="25px" height="25px">
              <BiMenuAltRight className="w-full h-full text-white text-lg" />
            </Ui.Button>
          </Box>
        </Box>
        {/* Top nav ends */}

        {/* Sidebar and navigation Outlet for /user-dashboard */}
        <Box className="mt-14 lg:mt-0 m-auto flex h-full justify-between py-2.5">
          <Box className="hidden lg:block w-full lg:w-56 mr-5">
            <Sidebar />
          </Box>
          <Box className="w-11/12 md:w-3/4 lg:w-11/12 m-auto lg:m-0">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </MainWrapper>
  );
};

export default Main;
