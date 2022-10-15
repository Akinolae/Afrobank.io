import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Styled from 'styled-components'

import styled from 'styled-components'
import { Row } from 'reactstrap'
import { connect } from 'react-redux'
import { MdSpaceDashboard } from 'react-icons/md'
import { FaMoneyBillAlt, FaUserAlt } from 'react-icons/fa'
import { RiSettings2Fill, RiLogoutCircleRFill } from 'react-icons/ri'

export const Type = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`
export const activeClass = 'active'
export const Sidelink = Styled((props) => (
  <NavLink {...props} activeClassName={activeClass} />
))`
  color: black;
  font-weight: 900;
  font-size: 13px;
  // width: 52%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 45px;
  padding-left: 13px;
  border-radius: 10px;
  transition: all ease 0.2s;
  margin-top: 20px;
  &:hover {
    scale: 1.005;
  }
  &.${activeClass} {
    background: #4004af;
    color: white;
    box-shadow: -1px 8px 20px -1px rgba(3,2,2,0.53);

  }
`
export const BottomNavLink = Styled((props) => (
  <NavLink {...props} activeClassName={activeClass} />
))`
  color: white;
  font-wight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: all ease 0.3s;
  &.${activeClass} {
    background: #4004af;
    color: white;
  }
`

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <MdSpaceDashboard />,
  },
  {
    path: '/dashboard/analysis',
    name: 'Send money',
    icon: <FaMoneyBillAlt />,
  },
  {
    path: '/dashboard/profile',
    name: 'Profile',
    icon: <FaUserAlt />,
  },
  {
    path: '/dashboard/Settings',
    name: 'Settings',
    icon: <RiSettings2Fill />,
  },
  {
    path: '/signout',
    name: 'Log out',
    icon: <RiLogoutCircleRFill />,
  },
]

const SideBar = (props) => {
  return (
    <Row
      className="p-0 m-0 d-flex flex-column "
      style={{
        overflow: 'hidden',
        width: '100%',
        position: 'static',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        height: '100%',
        borderRight: '1px solid #bec2bf',
        background: '#00000052',
      }}
    >
      <div className="pt-4">
        <Link to="/">
          <Type size="25" className="font-weight-bold pl-4" color="black">
            Afrobank
          </Type>
        </Link>
      </div>
      <div
        className="pl-4 pr-4"
        style={{
          marginTop: '20%',
          width: '100%',
        }}
      >
        {dashboardRoutes.map((routes, i) => {
          return (
            <Sidelink
              key={i}
              style={{ textDecoration: 'none' }}
              exact
              to={routes.path}
            >
              <span style={{ fontSize: '18px' }}>{routes.icon}</span>
              <span className="pl-2">{routes.name}</span>
            </Sidelink>
          )
        })}
      </div>

      <div className="bottom_nav bg-dark m-0 ">
        {dashboardRoutes.map((data, idx) => {
          return (
            <div key={idx}>
              <BottomNavLink
                exact
                to={data.path}
                style={{ textDecoration: 'none' }}
              >
                {data.icon}
                <span className="pl-3 hide">{data.name}</span>
              </BottomNavLink>
            </div>
          )
        })}
      </div>
    </Row>
  )
}
const mapStateToProps = (state) => ({
  payLoad: state.user.payLoad,
})

export default connect(mapStateToProps, {})(SideBar)
