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
  line-height: 50px;
`;

const style = {
  fontSize: "25px",
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
    path: "send",
    icon: <BiWallet style={style} />,
  },
  {
    name: "Settings",
    path: "settings",
    icon: <FiSettings style={style} />,
  },
  {
    name: "Profile",
    path: "profile",
    icon: <BsFillPersonFill style={style} />,
  },
  {
    name: "Log out",
    path: "/sign-out",
    icon: <AiOutlinePoweroff style={style} />,
  },
];

export const Links = (props: any) => (
  <>
    <Box className="flex flex-col justify-center">
      {routes.map((route, i) => {
        return (
          <Sidelink
            className="flex text-black opacity-80 pl-4 no-underline hover:opacity-50 hover:bg-gray-400 rounded font-black w-full justify-start items-center text-sm lg:text-white"
            key={i}
            to={route.path}
            onClick={props?.toggle}
          >
            {route.icon}
            <ui.Text text={route.name} />
          </Sidelink>
        );
      })}
    </Box>
  </>
);

const Sidebar = (props: any) => {
  return (
    <SideBarWrapper className=" w-full flex justify-between flex-col h-full ">
      <Box className="flex flex-col justify-center">
        <Links {...props} />
      </Box>
    </SideBarWrapper>
  );
};

export default Sidebar;
