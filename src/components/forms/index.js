import { Formik } from 'formik'
import React from 'react'
import {
  loginSchema,
  transferSchema,
  signUpSchema,
  forgotPasswordSchema,
} from './validation'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Form } from 'reactstrap'
import {
  Button as Btn,
  ErrorComponent,
  FluentuiDropdown,
  FluentUiInput,
} from '../../globalcomponents'

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 600;
`
const Error = styled.p`
  color: red;
  font-weight: 600;
  text-align: start;
  font-size: 12px;
`
const Text = styled.p`
  color: white;
`

const Button = (props) => {
  return (
    <Btn
      bg="#0d3153"
      color="white"
      width="100%"
      height="40px"
      className="mt-3 bg-dark"
      {...props}
    />
  )
}
const LoginForm = (props) => {
  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(e) => props.handleSubmit(e)}
    >
      {({ errors, handleChange, values, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
            {!!props.error && (
              <ErrorComponent className="mb-3" text={props.error} />
            )}
            <div>
              <FluentUiInput
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Email"
                autoComplete="false"
              />
              {!!errors.email && (
                <span
                  className="font-weight-bold"
                  style={{ color: 'red', fontSize: '12px' }}
                >
                  {errors.email}
                </span>
              )}
            </div>

            <div className="pt-2">
              <FluentUiInput
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
                value={values.password}
                autoComplete="false"
                canRevealPassword
              />
              {!!errors.password && (
                <span
                  className="font-weight-bold"
                  style={{ color: 'red', fontSize: '12px' }}
                >
                  {errors.password}
                </span>
              )}
            </div>
            <div className="d-flex justify-content-end align-items-center pt-3">
              <Link
                style={{
                  color: 'grey',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
                to="/forgotpassword"
              >
                forgot password
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center pt-3">
              <Button
                type="submit"
                disabled={props.formLoading}
                text={
                  props.formLoading ? (
                    <Loader
                      type="ThreeDots"
                      height={30}
                      width={30}
                      color="white"
                    />
                  ) : (
                    'Sign In'
                  )
                }
              />
            </div>

            <div className="d-flex justify-content-center align-items-center pt-3">
              <Text>
                Don't have an account?
                <Link
                  style={{
                    color: 'grey',
                    fontWeight: 600,
                    paddingLeft: '5px',
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                  to="/register"
                >
                  register
                </Link>
              </Text>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

const ForgotPasswordForm = (props) => {
  const initialValues = {
    email: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      validationSchema={forgotPasswordSchema}
      onSubmit={props.handleSubmit}
    >
      {({ errors, handleChange, values, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <FluentUiInput
              onChange={handleChange}
              value={values.email}
              className="mb-2"
              placeholder="Email"
              type="email"
              name="email"
            />
            {!!errors.email && <ErrorText>{errors.email}</ErrorText>}

            <span
              style={{
                color: 'white',
                opacity: '0.5',
                fontSize: '13px',
              }}
              className="text-center mobile_text"
            >
              A four digit pin will be sent to the email provided, ensure it is
              valid.
            </span>

            <div className="d-flex justify-content-center align-items-center mt-3">
              <Button type="submit" text="Send" />
            </div>
            <div className="d-flex justify-content-center align-items-center pt-3">
              <Link
                style={{
                  color: 'grey',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
                to="/signin"
              >
                remember now ?
              </Link>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
const TransferForm = (props) => {
  const initialValues = {
    recipient: '',
    amount: '',
  }

  return (
    <Formik
      validateOnChange={true}
      initialValues={initialValues}
      validationSchema={transferSchema}
      onSubmit={props.formSubmit}
      {...props}
    >
      {({ errors, handleChange, handleSubmit, values }) => {
        const isValidBalance = +values.amount > +props.balance
        return (
          <Form onSubmit={handleSubmit}>
            <FluentUiInput
              type="number"
              name="recipient"
              placeholder="recipient"
              onChange={handleChange}
            />{' '}
            {!!errors.recipient && <Error>{errors.recipient}</Error>}
            <FluentUiInput
              type="number"
              name="amount"
              placeholder="amount"
              className="mt-2"
              onChange={handleChange}
            />
            {!!errors.amount && <Error>{errors.amount}</Error>}
            <div className="d-flex justify-content-end align-items-center">
              {isValidBalance && <ErrorText>insufficient balance</ErrorText>}
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button disabled={isValidBalance} type="submit" text={'send'} />
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

const SignUpForm = (props) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    phoneNumber: '',
  }

  const options = [
    { key: 'male', text: 'male' },
    { key: 'female', text: 'female' },
  ]

  return (
    <Formik
      validationSchema={signUpSchema}
      initialValues={initialValues}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={props.handleSubmit}
    >
      {({ errors, handleChange, handleSubmit, values, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
            {!!props.regError && (
              <ErrorComponent className="mb-3" text={props.regError} />
            )}
            <FluentUiInput
              placeholder="First name"
              value={values.firstName}
              type="text"
              name="firstName"
              onChange={handleChange}
              style={{ width: '100%' }}
              className="mb-2"
            />
            {!!errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}

            <FluentUiInput
              value={values.lastName}
              placeholder="Last name"
              type="text"
              name="lastName"
              onChange={handleChange}
              className="mb-2"
            />
            {!!errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}

            <FluentUiInput
              onChange={handleChange}
              value={values.email}
              className="mb-2"
              placeholder="Email"
              type="email"
              name="email"
            />
            {!!errors.email && <ErrorText>{errors.email}</ErrorText>}
            <FluentUiInput
              value={values.password}
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              className="mb-2"
              canRevealPassword
            />
            {!!errors.password && <ErrorText>{errors.password}</ErrorText>}
            <FluentUiInput
              type="text"
              placeholder="Phone number"
              value={values.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              className="mb-2"
            />
            {!!errors.phoneNumber && (
              <ErrorText>{errors.phoneNumber}</ErrorText>
            )}
            <FluentuiDropdown
              options={options}
              name="gender"
              placeholder="Gender"
              onChange={(e, val) => {
                setFieldValue('gender', val.text)
              }}
            />

            {!!errors.gender && <ErrorText>{errors.gender}</ErrorText>}

            <div className="d-flex justify-content-center align-items-center mt-3">
              <Button
                type="submit"
                text={
                  props.formLoading ? (
                    <Loader
                      type="ThreeDots"
                      height={30}
                      width={30}
                      color="#ffffff"
                    />
                  ) : (
                    'Create Account'
                  )
                }
              />
            </div>
            <div className="d-flex justify-content-center align-items-center pt-3">
              <Text>
                Do you have an account?
                <Link
                  style={{
                    color: 'grey',
                    fontWeight: 600,
                    fontSize: '16px',
                    textDecoration: 'none',
                    paddingLeft: '5px',
                  }}
                  to="/signin"
                >
                  sign in
                </Link>
              </Text>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

LoginForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  error: propTypes.string,
  formLoading: propTypes.bool.isRequired,
}
TransferForm.propTypes = {
  formSubmit: propTypes.func.isRequired,
  balance: propTypes.any.isRequired,
}
export { LoginForm, TransferForm, SignUpForm, ForgotPasswordForm }
