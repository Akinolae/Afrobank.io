import React, { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import ui from "../ui";
import { Formik, Form } from "formik";
import auth from "../../@core/auth/auth";
import { FaKey } from "react-icons/fa";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Navigate, PathRouteProps } from "react-router-dom";

export const LoginWrapper = styled.div<CSSProperties>`
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || ""};
  height: ${(props) => props.height};
  padding: 0px;
  margin: 0px;
  overflow-y: scroll;
`;

export const FormWrapper = styled.div`
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required(),
    password: yup.string().required(),
  });

  const login = async (e: object) => {
    setLoading(true);
    try {
      const res = await auth.login(e);

      !!res ? (
        <Navigate to={"/authenticate"} replace />
      ) : (
        <Navigate to={"/user-dashboard"} replace />
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <LoginWrapper height="100vh">
      <FormWrapper>
        <ui.Badge
          background="#b5f7cd"
          style={{
            marginBottom: "10px",
          }}
        >
          <FaKey color="green" />
        </ui.Badge>
        <ui.Text
          text="Welcome Back"
          fontSize="28px"
          fontWeight={900}
          style={{
            textAlign: "center",
          }}
        />
        <ui.Text
          text="Welcome Back! please enter your details"
          fontWeight={500}
          style={{
            marginBottom: "25px",
            textAlign: "center",
          }}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(e) => login(e)}
        >
          {({ values, setFieldValue, errors }) => {
            return (
              <Form>
                <ui.CustomInput
                  type={"email"}
                  label="email"
                  placeholder="Enter your email"
                  value={values.email}
                  error={errors.email}
                  hasIcon={true}
                  onChange={(e: any) => setFieldValue("email", e.target.value)}
                />
                <div style={{ marginTop: "20px" }}>
                  <ui.CustomPasswordInput
                    value={values.password}
                    placeholder="Enter your password"
                    hasIcon={true}
                    error={errors.password}
                    label="password"
                    onChange={(e: any) =>
                      setFieldValue("password", e.target.value)
                    }
                  />
                </div>

                <ui.Button
                  isLoading={loading}
                  width="100%"
                  height={50}
                  text="Login"
                  fontSize={18}
                  color={"white"}
                  backgroundColor={"#3B1FA4"}
                  borderRadius={"10px"}
                  style={{ margin: "22px auto", fontWeight: 500 }}
                  type="submit"
                />
              </Form>
            );
          }}
        </Formik>
        <div style={{ display: "flex", placeContent: "center" }}>
          <Link
            to={"/signup"}
            style={{
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            I don't have an account
          </Link>
        </div>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
