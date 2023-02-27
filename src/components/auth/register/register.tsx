import React, { useState } from "react";
import Ui from "../../ui";
import { FormWrapper, LoginWrapper } from "../login";
import { Formik, Form, FormikConfig, useFormikContext } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import auth from "../../../@core/auth/auth";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    password: yup.string().required(),
  });

  const submit = async (params: object) => {
    try {
      await auth.register(params);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginWrapper height="100%">
      <FormWrapper>
        <Ui.Badge
          background="#b5f7cd"
          style={{
            marginBottom: "10px",
          }}
        >
          <FaKey color="green" />
        </Ui.Badge>
        <Ui.Text
          text="Create account"
          fontSize="28px"
          fontWeight={900}
          style={{
            textAlign: "center",
          }}
        />

        <Ui.Text
          text="We're delighted to have you join us"
          fontWeight={500}
          style={{
            marginBottom: "25px",
            textAlign: "center",
          }}
        />
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
              <Form>
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
                  <div style={{ marginBottom: "20px" }}>
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
                  <div style={{ marginBottom: "20px" }}>
                    <Ui.CustomInput
                      label="Last name"
                      placeholder="Enter your last name"
                      value={values.lastName}
                      error={errors.lastName}
                      onChange={(e: any) =>
                        setFieldValue("lastName", e.target.value)
                      }
                    />
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

                <Ui.Button
                  isLoading={loading}
                  width="100%"
                  height={50}
                  text="Register"
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
            to={"/"}
            style={{
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 400,
            }}
          >
            I have an account
          </Link>
        </div>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Register;
