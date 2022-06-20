import React from 'react'
import { Type } from './sendmoney'
import { Col, Row, Table } from 'reactstrap'
import { connect } from 'react-redux'
import {
  getAllUsers,
  activateUser,
  deactivateUser,
} from '../../services/authentication'
import { Button } from '../../globalcomponents'
import {
  formatMoney,
  calculateAllDebit,
  calculateAllCredit,
} from '../../utils/money'
import styled from 'styled-components'

const Card = styled.div``

class AdminDash extends React.Component {
  componentDidMount = async () => {
    await getAllUsers()
  }

  handleActivate = async (e) => {
    try {
      await activateUser({ email: e })
    } catch (error) {
      console.log(e)
    }
  }

  handleDeactivate = async (e) => {
    try {
      await deactivateUser({ email: e })
    } catch (error) {
      console.log(e)
    }
  }

  render() {
    const users = this.props.users || []
    const credit = formatMoney(
      users
        .map((data) => calculateAllCredit(data.transactions))
        .reduce((a, b) => +a + +b || 0, 0)
    )

    const debit = formatMoney(
      users
        .map((data) => calculateAllDebit(data.transactions))
        .reduce((a, b) => +a + +b || 0, 0)
    )

    console.log(users)
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
        <Type size="25" className="font-weight-bold mobile_pl" color="white">
          {debit}
        </Type>
        <Type size="25" className="font-weight-bold mobile_pl" color="white">
          {credit}
        </Type>
        <Col>
          <Table borderless>
            <thead
              style={{
                background: 'grey',
                fontSize: '14px',
                fontWeight: '500',
                color: 'white',
              }}
            >
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Balance</th>
                <th>Account Number</th>
                <th>Phone number</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody
              style={{
                color: 'white',
                fontWeight: 550,
                fontSize: '14px',
              }}
            >
              {users.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.email}</td>
                    <td>{data.name}</td>
                    <td>{formatMoney(data.accountBalance)}</td>
                    <td>{data.accountNumber}</td>
                    <td>{data.phoneNumber}</td>
                    <td>
                      {
                        <Button
                          bg={data.active ? 'red' : 'lightgreen'}
                          text={data.active ? 'Deactivate' : 'Activate'}
                          width="120px"
                          height="35px"
                          style={{
                            fontWeight: 700,
                          }}
                          onClick={() =>
                            data.active
                              ? this.handleDeactivate(data.email)
                              : this.handleActivate(data.email)
                          }
                        />
                      }
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Col>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users,
})

export default connect(mapStateToProps, {})(AdminDash)
