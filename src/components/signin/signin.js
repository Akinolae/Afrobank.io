import React, { useState } from 'react'
import { Col, Row, Button as btn, Modal, ModalBody } from 'reactstrap'
import { userLogin } from '../../services/authentication'
import { LoginForm } from '../forms/index'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import Privacy from './privacy'

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #065340;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.02rem;
`
export const Button = styled(btn)`
  background-color: transparent;
  border: 2px solid white;
  width: 150px;
  height: 50px;
  color: white;
`

const SignIn = (props) => {
  const [state, setState] = useState({
    error: '',
    formLoading: false,
  })
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const handleSubmit = async (value) => {
    setState({
      formLoading: true,
      error: '',
    })
    try {
      await userLogin(value)

      setState({
        formLoading: false,
      })
      props.history.push({
        pathName: '/dashboard',
        state: { value },
      })
    } catch (error) {
      setState({
        error: error || 'An error occured',
        formLoading: false,
      })
    }
  }

  return (
    <>
      {props.isSignedIn ? (
        <Redirect to="/dashboard" />
      ) : (
        <Col
          style={{
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: 'black',
          }}
        >
          <Row style={{ height: '100%' }}>
            <Col
              lg={8}
              className="d-flex justify-content-center align-items-center m-auto"
            >
              <Col
                lg={6}
                xs={12}
                md={7}
                style={{
                  paddingBottom: '50px',
                  paddingTop: '50px',
                  boxShadow: '-1px 8px 20px -1px rgba(3,2,2,0.53)',
                }}
              >
                <Text
                  style={{ color: 'white' }}
                  className="text-center mobile_text pb-3"
                >
                  Welcome back
                </Text>

                <Col className="m-auto" lg={6} xs={12} xl={10}>
                  <LoginForm
                    handleSubmit={handleSubmit}
                    formLoading={state.formLoading}
                    error={state.error}
                  />
                </Col>
                <Col
                  style={{
                    position: 'absolute',
                    top: '130%',
                    bottom: 0,
                  }}
                >
                  <Text
                    style={{
                      fontSize: '14px',
                      cursor: 'pointer',
                      color: 'white',
                      opacity: '0.5',
                    }}
                    className="text-center"
                    onClick={() => toggle()}
                  >
                    policy . Terms & conditions
                  </Text>
                </Col>
              </Col>
            </Col>
          </Row>

          <Modal isOpen={open} toggle={() => toggle()} centered>
            <ModalBody style={{ background: '#00000099' }}>
              <Col>
                <Privacy />
              </Col>
            </ModalBody>
          </Modal>
          {/* <Col className="bg-dark" style={{ height: '160px' }}></Col> */}
        </Col>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
})

export default connect(mapStateToProps, {})(SignIn)
