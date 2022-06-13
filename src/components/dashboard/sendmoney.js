import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'reactstrap'
import styled from 'styled-components'
import { transfer } from '../../services/transactions/index'
import { TransferForm } from '../forms/index'
import { PinModal } from '../../modals'

export const Type = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`
const AccountCard = styled(Card)`
  height: 100%;
  width: 100%;
  margin-top: 40px;
  border-radius: 10px;
  transition: all ease 0.3s;
`
const SendMoney = (props) => {
  const [formLoading, setFormLoading] = useState(false)
  const [error, setError] = useState('')
  const [pin, setPin] = useState('')
  const [pinModal, setPinModal] = useState(false)

  let formikForm = useRef()

  const handleSubmit = async () => {
    setFormLoading(true)
    setError('')
    try {
      await transfer({ ...formikForm.current.values }, pin)
      setFormLoading(false)
      setPinModal(false)
    } catch (error) {
      setError(error)
      setFormLoading(false)
    }
  }

  const toggleVisibility = () => {
    setPinModal(!pinModal)
  }

  useEffect(() => {}, [formikForm])

  return (
    <>
      <PinModal
        centered
        isVisible={pinModal}
        error={error}
        isLoading={formLoading}
        toggleVisibility={() => {
          toggleVisibility()
          setError('')
        }}
        payLoad={props.payLoad}
        onChange={(e) => setPin(e)}
        onSubmit={() => handleSubmit()}
      />
      <Row>
        <Col lg={12}>
          <div className="d-flex pt-4 align-items-center">
            <Type
              size="25"
              className="font-weight-bold mobile_pl"
              color="white"
            >
              Send money
            </Type>
          </div>
        </Col>
      </Row>
      <Col
        xl={6}
        style={{ height: '60%' }}
        className="d-flex justify-content-center align-items-center m-auto"
      >
        <Col className="m-auto pt-5" lg={6} xs={12} xl={8}>
          <AccountCard className="pr-3 pl-3 pt-3 pb-4">
            <TransferForm
              innerRef={formikForm}
              formSubmit={toggleVisibility}
              error={error}
              balance={props.payLoad.accountBalance}
            />
          </AccountCard>
        </Col>
      </Col>
    </>
  )
}

const mapStateToProps = (state) => ({
  payLoad: state.user.payLoad,
  balanceDisplay: state.user.balanceDisplay,
})
export default connect(mapStateToProps, {})(SendMoney)
