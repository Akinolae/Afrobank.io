import React from 'react'
import SideBar from './sidebar'
import { Switch, Route } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import Dashboard from './dashboard'
import Wallet from './wallet'
import { connect } from 'react-redux'
import SendMoney from './sendmoney'
import Profile from './profile'
import Settings from './settings'
import AdminDash from './adminDash'

const Main = (props) => {
  const { account } = props.payLoad

  return (
    <Col style={{ overflow: 'hidden' }} className="p-0 m-0">
      <Row className="justify-content-between">
        <Col style={{ height: '100vh' }} md={3} xl={2} lg={3}>
          <SideBar />
        </Col>

        <Col
          md={9}
          lg={9}
          xl={9}
          style={{
            height: '100vh',
          }}
          className="m-auto"
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
      </Row>
    </Col>
  )
}
const mapStateToProps = (state) => ({
  payLoad: state.user.payLoad,
})
export default connect(mapStateToProps, {})(Main)
