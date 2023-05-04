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

// const activeClass = "active";
export const Sidelink = styled((props) => <NavLink {...props} />)`
    color: ${(props) => props.color || "black"};
    font-weight: 900;
    font-size: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 15px;
    line-height: 55px;
    border-radius: 10px;
    transition: all ease 0.3s;
    opacity: 0.8;
    &:hover {
      background: yellow,
      color: red;
    }
  `;

const style = {
  fontSize: "14px",
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
