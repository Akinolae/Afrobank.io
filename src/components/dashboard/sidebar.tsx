import styled, { CSSProperties } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdDashboard, MdOutlineSpaceDashboard, MdPayment } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import ui from "../ui";

const SideBarWrapper = styled.div<CSSProperties>``;

const Box = styled.div`
  width: 100%;
`;

const style = {
  fontSize: "25px",
  paddingRight: "10px",
};

const routes = [
  {
    name: "Dashboard",
    path: "/user-dashboard/",
    icon: <MdDashboard style={style} />,
  },
  {
    name: "Payment",
    path: "payment",
    icon: <FaRegMoneyBillAlt style={style} />,
  },
  // {
  //   name: "Profile",
  //   path: "profile",
  //   icon: <BsFillPersonFill style={style} />,
  // },
  {
    name: "Transactions",
    path: "transactions",
    icon: <MdPayment style={style} />,
  },
  {
    name: "Log out",
    path: "/sign-out",
    icon: <AiOutlinePoweroff style={style} />,
  },
];

export const Links = (props: any) => (
  <Box className="flex flex-col justify-center">
    {routes.map((route, i) => {
      return (
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "bg-[#3B1FA4] text-white rounded-[8px] ml-[2%]" : ""
            } flex text-[14px] pl-4 leading-[150%] justify-start items-center text-sm no-underline h-[48px] ease-in-out duration-[0.3s] text-black md:text-white lg:text-white font-black w-[181px]`
          }
          key={i}
          to={route.path}
          onClick={props?.toggle}
        >
          {route.icon}
          <ui.Text text={route.name} />
        </NavLink>
      );
    })}
  </Box>
);

const Sidebar = (props: any) => {
  return (
    <SideBarWrapper className=" w-full h-screen flex justify-between flex-col overflow-hidden">
      <Box className="flex flex-col justify-center">
        <Links {...props} />
      </Box>
    </SideBarWrapper>
  );
};

export default Sidebar;
