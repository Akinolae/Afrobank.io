import styled, { CSSProperties } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import ui from "../ui";

const SideBarWrapper = styled.div<CSSProperties>``;

const Box = styled.div`
  width: 100%;
`;

export const Sidelink = styled((props) => <NavLink {...props} />)`
  transition: all ease 0.3s;
`;

const style = {
  fontSize: "22px",
  paddingRight: "10px",
};

const routes = [
  {
    name: "Dashboard",
    path: "/user-dashboard/",
    icon: <MdOutlineSpaceDashboard style={style} />,
  },
  {
    name: "Payment",
    path: "payment",
    icon: <FaRegMoneyBillAlt style={style} />,
  },
  {
    name: "Send Money",
    path: "/user-dashboard/send-money",
    icon: <BiWallet style={style} />,
  },
  {
    name: "Settings",
    path: "/user-dashboard/settings",
    icon: <FiSettings style={style} />,
  },
  {
    name: "Profile",
    path: "/user-dashboard/profile",
    icon: <BsFillPersonFill style={style} />,
  },
  {
    name: "Log out",
    path: "/sign-out",
    icon: <AiOutlinePoweroff style={style} />,
  },
];

const Sidebar = () => {
  return (
    <SideBarWrapper className="w-full flex justify-between flex-col h-full ">
      <Box className="flex flex-col justify-center">
        {routes.map((route, i) => {
          return (
            <Sidelink
              className="flex opacity-80 no-underline hover:opacity-50 text-black leading-10 rounded font-black w-full justify-start pl-5 items-center text-xs"
              key={i}
              to={route.path}
            >
              {route.icon}
              <ui.Text text={route.name} />
            </Sidelink>
          );
        })}
      </Box>
    </SideBarWrapper>
  );
};

export default Sidebar;
