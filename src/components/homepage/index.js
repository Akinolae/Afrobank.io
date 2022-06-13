import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Button, Text } from '../signin/signin'
import styled from 'styled-components'
import { connect } from 'react-redux'

const MainWrapper = styled(Col)`
  height: 100vh;
  background: #065340;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

const NameDiv = styled.div`
  height: 50px;
  width: 50px;
  background: #4004af;
  font-weight: 500;
  font-size: 14px;
  color: white;
`

const HomePage = (props) => {
  const payLoad = props.payLoad || {}

  const isEmpty = Object.keys(payLoad).length === 0
  const name = isEmpty ? {} : `${payLoad.firstName[0]}${payLoad.lastName[0]}`
  const { firstName, lastName } = props.payLoad | {}

  const linkStyle = {
    fontSize: '18px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 500,
  }
  return (
    <MainWrapper className="pt-3">
      <Row className="d-flex justify-content-evenly align-items-center">
        <Col className="pl-4" xs={4} lg={4} sm={4}>
          <p
            className="font-weight-bold"
            style={{ color: 'whitesmoke', fontSize: '32px' }}
          >
            Afrobank
          </p>
        </Col>
        <Col>
          <Row className="justify-content-between align-items-center">
            <Link style={linkStyle} to={'/'}>
              Category
            </Link>
            <Link style={linkStyle} to={'/'}>
              Category
            </Link>
            <Link style={linkStyle} to={'/'}>
              Category
            </Link>
            <Link style={linkStyle} to={'/'}>
              Category
            </Link>
            <Link style={linkStyle} to={'/'}>
              Category
            </Link>
          </Row>
        </Col>
        <Col
          lg={4}
          sm={4}
          xs={4}
          className="d-flex align-items-center justify-content-end  pr-4"
        >
          {props.isSignedIn ? (
            <Link to="/dashboard">
              <NameDiv
                title={`${firstName} ${lastName}`}
                className="rounded-circle d-flex justify-content-center align-items-center"
              >
                {name.toUpperCase()}
              </NameDiv>
            </Link>
          ) : (
            <Link to="/signin">
              <Button
                className="rounded-pill"
                style={{
                  backgroundColor: 'white',
                  color: '#065340',
                  fontWeight: '550',
                }}
              >
                sign in
              </Button>
            </Link>
          )}
        </Col>
      </Row>
      <Col
        className="bg-dark d-flex align-items-center"
        style={{ height: '100%' }}
      >
        <Row className="d-flex justify-content-between align-items-center">
          <Col lg={6}>
            <div style={{ width: '70%' }}>
              <Text
                className="is-center "
                style={{
                  color: 'white',
                  fontSize: '35px',
                  fontWeight: 700,
                }}
              >
                Afrobank, the next generation payment method
              </Text>
              <Text
                className="is-center"
                style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 400,
                  opacity: 0.6,
                }}
              >
                401k taxpayer retirement capitalization consulting prices
                interest rate established gains exchange traded funds financial
                health. Credit shares fluctuate.
              </Text>
            </div>
            <div className="d-flex mt-5">
              <Link style={{ textDecoration: 'none' }} to="/register">
                <Button
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: 'white',
                    color: '#065340',
                    height: '66px',
                    fontSize: '20px',
                    fontWeight: '550',
                    width: '250px',
                    borderRadius: '10px',
                  }}
                >
                  Get started
                </Button>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                to="/register"
                className="ml-3"
              >
                <Button
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1.5px solid white',
                    height: '66px',
                    fontSize: '20px',
                    fontWeight: '550',
                    width: '250px',
                    borderRadius: '10px',
                  }}
                >
                  Get started
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg={6}></Col>
        </Row>
      </Col>
      {/* <TransferModal /> */}
    </MainWrapper>
  )
}
const mapStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
  payLoad: state.user.payLoad,
})

export default connect(mapStateToProps, {})(HomePage)
