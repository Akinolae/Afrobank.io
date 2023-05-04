import React, { useState } from "react";
import Ui from "../../ui";
import { Formik, Form } from "formik";
import * as yup from "yup";
import auth from "../../../@core/auth/auth";
import AuthWrapper from "../authWrapper";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState("");

  const validationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    password: yup.string().required(),
  });

  const submit = async (params: object) => {
    setLoading(true);
    setError("");
    try {
      await auth.register(params);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <AuthWrapper
      linkto="/login"
      error={error}
      headerText="Create account"
      subText="We're delighted to have you join us"
      routeText="I have an account"
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(e) => submit(e)}
      >
        {({ values, setFieldValue, errors }) => {
          return (
            <Form style={{ padding: "10px" }}>
              <div>
                <div style={{ marginBottom: "20px" }}>
                  <Ui.CustomInput
                    type={"email"}
                    label="Email"
                    placeholder="Enter your email"
                    value={values.email}
                    error={errors.email}
                    onChange={(e: any) =>
                      setFieldValue("email", e.target.value)
                    }
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ width: "48%" }}>
                    <Ui.CustomInput
                      label="Last name"
                      placeholder="Enter your last name"
                      width={"45px"}
                      value={values.lastName}
                      error={errors.lastName}
                      onChange={(e: any) =>
                        setFieldValue("lastName", e.target.value)
                      }
                    />
                  </div>
                  <div style={{ width: "48%" }}>
                    <Ui.CustomInput
                      label="First name"
                      placeholder="Enter your first name"
                      value={values.firstName}
                      error={errors.firstName}
                      onChange={(e: any) =>
                        setFieldValue("firstName", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Ui.CustomInput
                    label="Phone number"
                    type={"tel"}
                    placeholder="Enter your phone number"
                    value={values.phoneNumber}
                    error={errors.phoneNumber}
                    onChange={(e: any) =>
                      setFieldValue("phoneNumber", e.target.value)
                    }
                  />
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Ui.CustomPasswordInput
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
              <div className="flex-center">
                <Ui.Button
                  isLoading={loading}
                  text="Register"
                  fontSize={16}
                  color={"white"}
                  backgroundColor={"#3B1FA4"}
                  style={{
                    marginTop: "22px",
                    marginBottom: "22px",
                    fontWeight: 500,
                  }}
                  type="submit"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};

export default Register;
