import React, { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import ui from "../ui";
import { Formik, Form } from "formik";
import auth from "../../@core/auth/auth";

const LoginWrapper = styled.div<CSSProperties>`
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || ""};
  height: ${(props) => props.height};
  padding: 0px;
  margin: 0px;
  position: relative;
`;

const FormWrapper = styled.div``;

const Login = () => {
  const [loading, setLoading] = useState(false);

  const login = async (e: object) => {
    setLoading(true);
    try {
      await auth.login(e);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <LoginWrapper background={"red"} height="100vh">
      <FormWrapper>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(e) => login(e)}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form>
                <ui.CustomInput
                  type={"email"}
                  label="email"
                  value={values.email}
                  hasIcon={true}
                  onChange={(e: any) => setFieldValue("email", e.target.value)}
                />
                <div style={{ marginTop: "20px" }}>
                  <ui.CustomPasswordInput
                    value={values.password}
                    hasIcon={true}
                    label="password"
                    onChange={(e: any) =>
                      setFieldValue("password", e.target.value)
                    }
                  />
                </div>

                <ui.Button
                  isLoading={loading}
                  width="200px"
                  height={40}
                  text="Login"
                  fontSize={18}
                  color={"white"}
                  borderRadius={"10px"}
                  style={{ marginTop: "20px" }}
                  type="submit"
                />
              </Form>
            );
          }}
        </Formik>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
