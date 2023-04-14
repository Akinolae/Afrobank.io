import React, { useState, useEffect } from "react";
import styled, { CSSProperties } from "styled-components";
import ui from "../ui";
import { Formik, Form } from "formik";
import auth from "../../@core/auth/auth";
import { FaKey } from "react-icons/fa";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { errors } from "../../@utils/error";
import { LoginParams } from "afrobank-sdk/interface/index.interface";
import { MessageBarType } from "@fluentui/react";

export const LoginWrapper = styled(motion.div)<CSSProperties>`
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || ""};
  height: ${(props) => props.height};
  padding: 0px;
  margin: 0px;
  overflow-y: scroll;
  transition: all ease 0.03s;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: auto;
  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.8%;
  background: white;
  border-radius: 10px;
`;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [erorr, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.isSignedIn() && navigate("/user-dashboard");
  }, []);

  const validationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required(errors.email),
    password: yup.string().required(errors.password),
  });

  const login = async (e: LoginParams) => {
    setLoading(true);
    setError("");

    try {
      const res = await auth.login(e);
      setLoading(false);
      return res ? navigate("/authenticate") : navigate("/user-dashboard");
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <LoginWrapper background={"#E8E9E7"} height="100vh">
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
          fontSize="24px"
          fontWeight={900}
          style={{
            textAlign: "center",
          }}
        />
        <ui.Text
          text="Welcome Back! please enter your details"
          fontSize="14px"
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
              <React.Fragment>
                <ui.Alert type={MessageBarType.error} text={erorr} hasBtn />

                <Form>
                  <ui.CustomInput
                    type={"email"}
                    label="email"
                    placeholder="Enter your email"
                    value={values.email}
                    error={errors.email}
                    onChange={(e: any) =>
                      setFieldValue("email", e.target.value)
                    }
                  />
                  <div style={{ marginTop: "10px" }}>
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
                    text="Login"
                    fontSize={16}
                    color={"white"}
                    backgroundColor={"#3B1FA4"}
                    style={{ margin: "30px auto", fontWeight: 500 }}
                    type="submit"
                  />
                </Form>
              </React.Fragment>
            );
          }}
        </Formik>
        <div style={{ display: "flex", placeContent: "center" }}>
          <Link
            to={"/signup"}
            style={{
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            I don't have an account
          </Link>
        </div>
      </FormWrapper>

      <ui.Text
        text={`${new Date().getFullYear()}`}
        fontSize="12px"
        fontWeight={900}
        style={{
          textAlign: "center",
          paddingBottom: '20px'
        }}
      />
    </LoginWrapper>
  );
};

export default Login;
