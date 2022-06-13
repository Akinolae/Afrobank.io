import React from 'react'
import { Type } from './sendmoney'
import { Col, Row } from 'reactstrap'
import { connect } from 'react-redux'
import { getAllUsers } from '../../services/authentication'
import {
  calculateAllCredit,
  // calculateAllDebit
} from '../../utils/money'

class AdminDash extends React.Component {
  componentDidMount = async () => {
    await getAllUsers()
  }

  render() {
    const { users } = this.props

    console.log(users.map((data) => data.transactions))
    calculateAllCredit(users.map((data) => data.transactions))
    return (
      <Col
        style={{
          height: '100vh',
          position: 'relative',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Row>
          <Col lg={12}>
            <div className="d-flex pt-4 align-items-center">
              <Type
                size="25"
                className="font-weight-bold mobile_pl"
                color="white"
              >
                Admin Dashboard
              </Type>
            </div>
          </Col>
        </Row>
      </Col>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users,
})

export default connect(mapStateToProps, {})(AdminDash)
