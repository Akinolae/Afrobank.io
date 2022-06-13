import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { Button } from '../../globalcomponents'
import { connect } from 'react-redux'

export const Type = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`
const Profile = (props) => {
  const { payLoad } = props

  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="d-flex pt-4 align-items-center">
            <Type size="25" className="font-weight-bold" color="white">
              Profile
            </Type>
          </div>
        </Col>
      </Row>
      <Col
        style={{ height: '75%' }}
        className="d-flex justify-content-center pt-5"
      >
        <Col lg={6} sm={11} xs={12}>
          <h1>hello</h1>
          <Col
            style={{ height: '40%', borderRadius: '0.8rem' }}
            className="d-flex pl-4 pr-4 flex-column justify-content-around bg-dark"
          >
            <Row className="d-flex justify-content-between">
              <Col className="d-flex flex-column">
                <Type
                  style={{
                    color: 'whitesmoke',
                    fontSize: '14px',
                    opacity: 0.5,
                  }}
                >
                  Display name
                </Type>
                <Type color="white" className="font-weight-bold">
                  {`${payLoad.firstName} ${payLoad.lastName}`}
                </Type>
              </Col>
              <Col className="d-flex justify-content-end">
                <Button
                  height="40px"
                  className="rounded"
                  text="Edit"
                  color="white"
                  bg="grey"
                  width="100px"
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-between align-items-center">
              <Col className="d-flex flex-column">
                <Type
                  style={{
                    color: 'whitesmoke',
                    fontSize: '14px',
                    opacity: 0.5,
                  }}
                >
                  Email
                </Type>
                <Type color="white" className="font-weight-bold">
                  {payLoad.email}
                </Type>
              </Col>
              <Col className="d-flex justify-content-end">
                <Button
                  height="40px"
                  className="rounded"
                  text="Edit"
                  color="white"
                  bg="grey"
                  width="100px"
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-between align-items-center">
              <Col className="d-flex flex-column">
                <Type
                  style={{
                    color: 'whitesmoke',
                    fontSize: '14px',
                    opacity: 0.5,
                  }}
                >
                  Password
                </Type>
                <Type color="white" className="font-weight-bold">
                  Akinola Makinde
                </Type>
              </Col>
              <Col className="d-flex justify-content-end">
                <Button
                  text="Change"
                  height="40px"
                  className="rounded"
                  width="100px"
                  color="white"
                  bg="grey"
                />
              </Col>
            </Row>
          </Col>
          <Col
            style={{ height: '20%', borderRadius: '0.8rem' }}
            className="d-flex mt-4 flex-column justify-content-around bg-dark"
          >
            <h1>hey</h1>
          </Col>
        </Col>
      </Col>
    </>
  )
}

const mapStateToProps = (state) => ({
  payLoad: state.user.payLoad,
})

export default connect(mapStateToProps, {})(Profile)
