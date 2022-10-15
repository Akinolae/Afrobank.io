import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Text } from '../signin/signin'
import styled from 'styled-components'
import { connect } from 'react-redux'
import './style.css'
import 'swiper/swiper-bundle.css'
import { Button } from '../../globalcomponents'

const MainWrapper = styled.div`
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background: black;
`

const Container = styled.div`
  height: 100%;
  width: 75%;
  margin: auto;
`

const CustomLink = styled(Link)`
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
  color: white;
  transition: all ease 0.3s;
  &:hover {
    font-weight: 900;
  }
`

const HomePage = (props) => {
  // const isEmpty = Object.keys(payLoad || {}).length === 0

  // const name = isEmpty ? {} : `${payLoad.firstName[0]}${payLoad.lastName[0]}`
  // const { firstName, lastName } = props.payLoad || {}

  return (
    <>
      <MainWrapper className="pt-3">
        <Container>
          <Col className="d-flex justify-content-between align-items-center">
            <Col className="p-0 pl-4" xs={4} lg={6} sm={4}>
              <Row className="align-items-center justify-content-between">
                <Col className="p-0" xs={4} lg={4} sm={4}>
                  <p
                    className="font-weight-bold"
                    style={{
                      color: 'white',
                      fontSize: '40px',
                      fontWeight: 900,
                    }}
                  >
                    Afrobank
                  </p>
                </Col>
                <Col
                  xs={4}
                  className="d-flex justify-content-end"
                  lg={5}
                  sm={4}
                >
                  <Row className="justify-content-between align-items-center">
                    <Col>
                      <CustomLink to={'/'}>Category</CustomLink>
                    </Col>
                    <Col>
                      <CustomLink to={'/'}>Category</CustomLink>
                    </Col>
                    <Col>
                      <CustomLink to={'/'}>Category</CustomLink>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="d-flex justify-content-end">
              <Row>
                <Col className="p-0 pr-3">
                  <Button
                    text="Sign in"
                    bg={'#6f6f70'}
                    width="100px"
                    height="40px"
                    color="white"
                    style={{
                      borderRadius: '8px',
                      fontWeight: 700,
                    }}
                  />
                </Col>
                <Col className="p-0">
                  <Button
                    text="Register"
                    bg={'#175eeb'}
                    height="40px"
                    color="white"
                    width="150px"
                    style={{
                      borderRadius: '8px',
                      fontWeight: 700,
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Col>

          <div
            style={{ height: '90vh', backgroundColor: 'transparent' }}
            className="d-flex p-0 align-items-center  justify-content-center"
          >
            <Row>
              <Col lg={6} className="m-auto">
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '30px',
                    fontWeight: 700,
                  }}
                >
                  Afrobank, the next generation payment method
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: 400,
                    opacity: 0.6,
                  }}
                >
                  401k taxpayer retirement capitalization consulting prices
                  interest rate established gains exchange traded funds
                  financial health. Credit shares fluctuate.
                </Text>
                <div className="d-flex justify-content-center mt-5">
                  <Link style={{ textDecoration: 'none' }} to="/register">
                    <Button
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: 'white',
                        color: 'black',
                        height: '66px',
                        fontSize: '20px',
                        fontWeight: '550',
                        width: '200px',
                        borderRadius: '10px',
                      }}
                    >
                      Get started
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>

          {/* <TransferModal /> */}
          <section>
            <Col style={{ height: '100vh' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: 700,
                }}
              >
                What we offer
              </Text>
            </Col>
          </section>
        </Container>
      </MainWrapper>
    </>
  )
}
const mapStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
  payLoad: state.user.payLoad,
})

export default connect(mapStateToProps, {})(HomePage)
