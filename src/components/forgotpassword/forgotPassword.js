import React from 'react'
import { Col } from 'reactstrap'
import { ForgotPasswordForm } from '../forms/index'
import { Text } from '../signin/signin'

const ForgotPassword = () => {
  return (
    <Col style={{ height: '100vh', background: 'black' }}>
      <Col
        style={{ height: '100%' }}
        className="d-flex justify-content-center align-items-center"
      >
        <Col
          lg={4}
          xs={12}
          style={{
            paddingBottom: '50px',
            paddingTop: '50px',
            boxShadow: '-1px 8px 20px -1px rgba(3,2,2,0.53)',
          }}
        >
          <Text
            style={{ color: 'white', opacity: '0.5' }}
            className="text-center mobile_text pb-3"
          >
            Forgot password
          </Text>

          <Col className="m-auto" lg={6} xs={12} xl={10}>
            <ForgotPasswordForm />
          </Col>
        </Col>
      </Col>
    </Col>
  )
}

export default ForgotPassword
