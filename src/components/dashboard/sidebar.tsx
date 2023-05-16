import styled, { CSSProperties } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import ui from "../ui";

const SideBarWrapper = styled.div<CSSProperties>`
  width: 100%;
  flex-direction: column;
  height: 80%;
`;

const Box = styled.div`
  width: 100%;
`;

export const Sidelink = styled((props) => <NavLink {...props} />)`
  transition: all ease 0.3s;
`;

const style = {
  fontSize: "21px",
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
    path: "/user-dashboard/Payment",
    icon: <FaRegMoneyBillAlt style={style} />,
  },
  {
    name: "Send Money",
    path: "/user-dashboard/send-money",
    icon: <BiWallet style={style} />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: <FiSettings style={style} />,
  },
];

const Sidebar = () => {
  return (
    <SideBarWrapper className="flex justify-between">
      <Box className="h-44 flex flex-col justify-center items-center">
        {routes.map((route, i) => {
          return (
            <Sidelink
              className="flex opacity-80 hover:bg-yellow-300 hover:text-red-500 text-black leading-10 rounded font-black w-full justify-start pl-5 items-center text-xs"
              style={{ textDecoration: "none" }}
              key={i}
              to={route.path}
            >
              {route.icon}
              <ui.Text text={route.name} />
            </Sidelink>
          );
        })}
      </Box>
      <Box className="h-10 flex justify-center items-center">
        <Sidelink to="/" className="flex justify-start items-center text-xs">
          <AiOutlinePoweroff style={style} />
          <ui.Text text="log out" />
        </Sidelink>
      </Box>
    </SideBarWrapper>
  );
};

export default Sidebar;
