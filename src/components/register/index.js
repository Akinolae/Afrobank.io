import React from 'react'
import { Row, Col } from 'reactstrap'
import { SignUpForm } from '../forms'
import { registerUser } from '../../services/authentication'
import { Text } from '../signin/signin'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formLoading: false,
      regError: '',
    }
  }

  handleSubmit = async (values) => {
    this.setState({ formLoading: true, regError: '' })
    try {
      await registerUser(values)
      this.setState({ formLoading: false })
      this.props.history.push('/signin')
    } catch (error) {
      this.setState({
        formLoading: false,
        regError: error,
      })
    }
  }
  render() {
    return (
      <Col
        style={{
          height: '100vh',
          position: 'relative',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'black',
        }}
      >
        <Row
          style={{
            height: '100%',
          }}
        >
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
                className="text-center pb-3"
                style={{ color: 'white', opacity: '0.5' }}
              >
                Create an Account
              </Text>

              <Col className="m-auto" lg={6} md={12} xs={12} xl={10}>
                <SignUpForm
                  handleSubmit={this.handleSubmit}
                  formLoading={this.state.formLoading}
                  regError={this.state.regError}
                />
              </Col>
            </Col>
          </Col>
        </Row>

        {/* <Col className="bg-dark" style={{ height: '160px' }}></Col> */}
      </Col>
    )
  }
}

export default Register
