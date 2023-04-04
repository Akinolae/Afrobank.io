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

export const LoginWrapper = styled(motion.div)<CSSProperties>`
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || "#050406"};
  height: ${(props) => props.height};
  padding: 0px;
  margin: 0px;
  overflow-y: scroll;
  transition: all ease 0.03s;
`;

export const FormWrapper = styled.div`
  min-width: 375px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;
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
            color: "white"
          }}
        />
        <ui.Text
          text="Welcome Back! please enter your details"
          fontWeight={500}
          style={{
            marginBottom: "25px",
            textAlign: "center",
            color: "white"
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
                <ui.Alert type="error" text={erorr} hasBtn />

                <Form>
                  <ui.CustomInput
                    type={"email"}
                    label="email"
                    placeholder="Enter your email"
                    value={values.email}
                    error={errors.email}
                    hasIcon={true}
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
                    fontSize={18}
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
              fontSize: "16px",
              fontWeight: 400,
              color: "#bdc1c6"
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
