import styled, { CSSProperties } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import ui from "../ui";

const SideBarWrapper = styled.div<CSSProperties>`
  width: 100%;
  flex-direction: column;
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
    <SideBarWrapper>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexFlow: "wrap",
        }}
      >
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
    </SideBarWrapper>
  );
};

export default Sidebar;
