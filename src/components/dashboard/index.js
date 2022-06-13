import React, { useState } from 'react'
import styled from 'styled-components'
import SideBar from './sidebar'
import { Switch, Route } from 'react-router-dom'
import {
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap'
import Dashboard, { Dashbody } from './dashboard'
import { NotificationsNone } from '@material-ui/icons'
import Wallet from './wallet'
import { deleteSingleNotification } from '../../services/notifications'
import { connect } from 'react-redux'
import SendMoney from './sendmoney'
import Profile from './profile'
import Settings from './settings'
import AdminDash from './adminDash'

const NotificationDiv = styled.div`
  height: 44px;
  width: 44px;
  background: #0f0f0f73;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Menu = styled(DropdownMenu)`
  background: #000000;
  width: 330px;
  max-height: 200px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: hidden;
  &:hover {
    background: #000000;
  }
`
const Item = styled(DropdownItem)`
  color: white;
  width: 100%;
  font-size: 14px;
  &:hover {
    background: #0f0f0fc7;
    color: white;
  }
`
const NameDiv = styled.div`
  height: 50px;
  width: 50px;
  background: #4004af;
  font-weight: 500;
  font-size: 14px;
  color: white;
`
const Main = (props) => {
  const [showNotification, setNotification] = useState(false)
  const [userNotification] = useState({
    notifications: [],
  })

  const toggleNotification = () => {
    setNotification((prevState) => !prevState)
  }

  const deleteNotification = async (id) => {
    await deleteSingleNotification(id)
  }

  const { firstName, lastName, account } = props.payLoad
  const name = !!Object.keys(props.payLoad).length
    ? `${firstName[0]}${lastName[0]}`
    : ''

  return (
    <Dashbody style={{ overflow: 'hidden' }} className="pb-4">
      <Col className="p-0 m-0">
        <Row>
          <Col md={3} xl={2}>
            <SideBar />
          </Col>

          <Col
            md={9}
            lg={9}
            xl={9}
            style={{
              height: '100vh',
              position: 'relative',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          >
            <Switch>
              <Route
                exact
                path="/dashboard"
                component={account === 'admin' ? AdminDash : Dashboard}
              />
              <Route exact path="/dashboard/wallet" component={Wallet} />
              <Route exact path="/dashboard/analysis" component={SendMoney} />
              <Route exact path="/dashboard/profile" component={Profile} />
              <Route exact path="/dashboard/Settings" component={Settings} />
            </Switch>
          </Col>
          <Col md={1} lg={1} xl={1} className="hide d-flex justify-content-end">
            <Row className="d-flex  pr-2 pt-3">
              <Col className="p-0 pt-1">
                <Dropdown
                  isOpen={showNotification}
                  toggle={toggleNotification}
                  className="p-0"
                >
                  <DropdownToggle
                    style={{
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                    }}
                    className="p-0 m-0"
                  >
                    <NotificationDiv>
                      <NotificationsNone
                        fontSize="small"
                        style={{ color: 'white' }}
                      />
                    </NotificationDiv>
                  </DropdownToggle>
                  <Menu right>
                    {!userNotification.notifications ? (
                      <Item
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: '40px' }}
                      >
                        You don't have any notification
                      </Item>
                    ) : (
                      userNotification.notifications.map((data, idx) => (
                        <Item
                          style={{
                            borderBottom: '1px solid white',
                            height: '50px',
                          }}
                          key={idx}
                          onClick={() => deleteNotification(data._id)}
                        >
                          {data.notification_text}
                        </Item>
                      ))
                    )}
                  </Menu>
                </Dropdown>
              </Col>

              <Col>
                <NameDiv
                  title={`${firstName} ${lastName}`}
                  className="rounded-circle d-flex justify-content-center align-items-center"
                >
                  {name.toUpperCase()}
                </NameDiv>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Dashbody>
  )
}
const mapStateToProps = (state) => ({
  payLoad: state.user.payLoad,
})
export default connect(mapStateToProps, {})(Main)
