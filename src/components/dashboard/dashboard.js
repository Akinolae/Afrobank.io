import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Table } from 'reactstrap'
import {
  getFormatedDate,
  calculateAllDebit,
  formatMoney,
  getFormatedTime,
} from '../../utils'
import { Person, ShowChart, FileCopy, AddCircle } from '@material-ui/icons'
import { Chart } from '../../globalcomponents'
import styled from 'styled-components'

const AccountCard = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 20px;
  background: #4004af;
  box-shadow: -1px 8px 20px -1px rgba(3, 2, 2, 0.53);
  transition: all ease 0.3s;
`
const SearchSection = styled(Col)`
  height: ${(props) => props.height};
  width: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Dashbody = styled.div`
  height: 100%;
  width: 100%;
  background: white;
`
export const Type = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`

const Text = styled.h5`
  color: ${(props) => props.color || 'white'};
  font-size: 24px;
  font-weight: ${(props) => props.fw || 550};
`

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  renderTransactions = () => {
    const { transactions } = this.props
    const trx = transactions || []
    return trx
      .map((transaction, i) => {
        const { transaction_id, amount, transaction_date, transaction_type } =
          transaction

        const formatDay = getFormatedDate(transaction_date)
        const formatTime = getFormatedTime(transaction_date)
        return (
          <tr key={i}>
            <td>{transaction_id}</td>
            <td
              style={{
                color: `${transaction_type === 'credit' ? 'green' : 'red'}`,
                fontWeight: 600,
              }}
            >
              {formatMoney(amount)}
            </td>
            <td
              style={{
                color: `${transaction_type === 'credit' ? 'green' : 'red'}`,
                fontWeight: 600,
              }}
            >
              {transaction_type}
            </td>
            <td>{`${formatDay} ${formatTime}`}</td>
          </tr>
        )
      })
      .reverse()
  }

  render() {
    const { payLoad, transactions } = this.props
    const { loading } = this.state
    const accountBalance = formatMoney(payLoad.accountBalance)
    const trx = transactions || []

    console.log(this.props)
    // const name = !!Object.keys(payLoad).length
    //   ? `${payLoad.firstName.toUpperCase()}${payLoad.lastName.toUpperCase()}`
    //   : ''

    return (
      <div>
        <Row
          style={{ height: '100px' }}
          className="justify-content-between  align-items-center"
        >
          <Col className="p-0">
            <Text color="black" fw={900}>
              Dashboard
            </Text>
          </Col>
          <Col className="d-flex justify-content-end p-0">
            <AddCircle
              style={{
                color: '#4004af',
              }}
              onClick={() => alert('done')}
            />
          </Col>
        </Row>
        <SearchSection
          className="d-flex justify-content-center flex-column align-items-center p-0 m-0"
          height="82%"
        >
          <Col className="p-0 pt-4">
            <Row className="d-flex justify-content-between">
              <Col xl={4}>
                <AccountCard className="d-flex flex-column justify-content-center align-items-center">
                  <Person fontSize="large" style={{ color: 'white' }} />
                  <Text
                    className="pt-3"
                    style={{
                      color: 'whitesmoke',
                      fontSize: '14px',
                      opacity: 0.3,
                    }}
                  >
                    {/* {`Name: ${name}`} */}
                  </Text>
                </AccountCard>
              </Col>
              <Col xl={4}>
                <AccountCard className="d-flex flex-column justify-content-center align-items-center">
                  <ShowChart style={{ color: 'white', fontSize: '40px' }} />
                  <Text
                    className="pt-3"
                    style={{
                      color: 'whitesmoke',
                      fontSize: '14px',
                    }}
                  >
                    {`You've spent ${calculateAllDebit(transactions)} so far`}
                  </Text>
                </AccountCard>
              </Col>
              <Col xl={4}>
                <AccountCard className="d-flex justify-content-center align-items-center">
                  <FileCopy style={{ cursor: 'pointer', color: 'white' }} />
                  <Text
                    className="pl-2 pt-3 font-weight-bold"
                    style={{
                      color: 'white',
                      letterSpacing: '0.7rem',
                      fontSize: '20px',
                    }}
                  >
                    {payLoad.accountNumber} <br />
                  </Text>
                </AccountCard>
              </Col>
            </Row>
          </Col>

          <Col className="p-0 pt-4">
            <Text
              style={{
                color: 'whitesmoke',
                fontSize: '18px',
                opacity: 0.3,
              }}
            >
              Balance
            </Text>
            <Text className="pt-1">{loading ? '...' : accountBalance}</Text>
            <Col style={{ height: '350px' }} className="p-0 m-0 rounded pt-2">
              <Chart className="p-0" data={trx} datakey="amount" />
            </Col>
          </Col>
          <Col lg={10} className="p-0 pt-3">
            <Text
              style={{
                color: 'whitesmoke',
                fontSize: '18px',
                opacity: 0.3,
              }}
            >
              History
            </Text>
            <Col className="p-0" style={{ height: '650px' }}>
              {!!trx.length ? (
                <SearchSection className="p-0" height="60%">
                  <Table
                    className="p-0"
                    style={{ overflowY: 'scroll' }}
                    striped
                    responsive
                    borderless
                  >
                    <thead style={{ color: 'whitesmoke' }}>
                      <tr>
                        <th>Transaction ID</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date/Time</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: 'white' }}>
                      {this.renderTransactions()}
                    </tbody>
                  </Table>
                </SearchSection>
              ) : (
                <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                  <Text className="is-center">
                    You don't have any transactions
                  </Text>
                </div>
              )}
            </Col>
          </Col>
        </SearchSection>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  balanceDisplay: state.user.balanceDisplay,
  payLoad: state.user.payLoad,
  transactions: state.user.transactions,
})

export default connect(mapStateToProps, {})(Dashboard)
