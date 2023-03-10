import styled, { CSSProperties } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import ui from "../ui";

const SideBarWrapper = styled.div<CSSProperties>`
  width: 16%;
  background: red;
  padding: 2%;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Box = styled.div`
  width: 80%;
  margin: auto;
`;

// const activeClass = "active";
export const Sidelink = styled((props) => <NavLink {...props} />)`
    color: ${(props) => props.color};
    font-wight: bold;
    font-size: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 47px;
    margin-top: ${(props) => (props.index === 0 ? "" : "25px")};
    padding-left: 15px;
    border-radius: 10px;
    transition: all ease 0.3s;
    &:hover {
      background: yellow,
      color: red;
    }
  `;

const style = {
  fontSize: "24px",
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
    <SideBarWrapper className="flex">
      <Box>
        {routes.map((route, i) => {
          return (
            <Sidelink
              style={{ textDecoration: "none" }}
              key={i}
              to={route.path}
            >
              <ui.Text text={route.name} />
            </Sidelink>
          );
        })}
      </Box>
    </SideBarWrapper>
  );
};

export default Sidebar;
