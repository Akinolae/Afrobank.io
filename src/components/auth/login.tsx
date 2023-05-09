import React, { useState, useEffect } from "react";
import ui from "../ui";
import { Formik, Form } from "formik";
import auth from "../../@core/auth/auth";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { errors } from "../../@utils/error";
// import { LoginParams } from "afrobank-sdk/interface/index.interface";
import AuthWrapper from "./authWrapper";

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

  const login = async (e: any) => {
    setLoading(true);
    setError("");

    try {
      const res = await auth.login(e);
      setLoading(false);
      // return res ? navigate("/authenticate") : navigate("/user-dashboard");
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <AuthWrapper
      error={erorr}
      headerText="Welcome Back"
      subText="Welcome Back! please enter your details"
      routeText="I don't have an account"
      linkto="/signup"
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(e) => login(e)}
      >
        {({ values, setFieldValue, errors }) => {
          return (
            <React.Fragment>
              <Form style={{ padding: "10px" }}>
                <ui.CustomInput
                  type={"email"}
                  placeholder="Enter your email"
                  value={values.email}
                  error={errors.email}
                  onChange={(e: any) => setFieldValue("email", e.target.value)}
                />
                <div style={{ marginTop: "15px" }}>
                  <ui.CustomPasswordInput
                    value={values.password}
                    placeholder="Enter your password"
                    hasIcon={true}
                    error={errors.password}
                    onChange={(e: any) =>
                      setFieldValue("password", e.target.value)
                    }
                  />
                </div>

                <ui.Button
                  isLoading={loading}
                  text="Login"
                  color={"white"}
                  className="hover h-12  text-sm font-black"
                  borderRadius="10px"
                  backgroundColor={"#3B1FA4"}
                  style={{ margin: "30px auto" }}
                  type="submit"
                />
              </Form>
            </React.Fragment>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};

export default Login;
