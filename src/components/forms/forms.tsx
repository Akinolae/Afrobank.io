import React from "react";
import { Formik, Form } from "formik";
import Ui from "../ui";
import * as yup from "yup";
import { errors } from "../../@utils/error";

interface FormikProps {
  children?: React.ReactElement;
  initialValues: object;
  validationSchema: object;
  onSubmit: () => void;
  render: (props: any) => React.ReactElement;
}

export const FormWrapper = (props: FormikProps) => {
  const { initialValues, onSubmit, validationSchema, render } = props;

  const RenderComponent = render;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(val) => {
        return (
          <Form className="w-full">
            <RenderComponent {...val} />
          </Form>
        );
      }}
    </Formik>
  );
};

function LoginForm(props: any) {
  const initialValues = { email: "", password: "" };
  const validationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required(errors.email),
    password: yup.string().required(errors.password),
  });
  return (
    <FormWrapper
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={props?.onSubmit}
      render={(props) => {
        const { values, errors, setFieldValue, isSubmitting } = props;
        return (
          <React.Fragment>
            <Ui.CustomInput
              type="email"
              placeholder="Enter your email"
              value={values.email}
              error={errors.email}
              onChange={(e: any) => setFieldValue("email", e.target.value)}
            />
            <div style={{ marginTop: "15px" }}>
              <Ui.CustomPasswordInput
                value={values.password}
                placeholder="Enter your password"
                hasIcon={true}
                error={errors.password}
                onChange={(e: any) => setFieldValue("password", e.target.value)}
              />
            </div>

            <Ui.Button
              isLoading={isSubmitting}
              text="Login"
              color={"white"}
              className="hover h-12  text-sm font-black"
              borderRadius="10px"
              backgroundColor={"#3B1FA4"}
              style={{ margin: "30px auto" }}
              type="submit"
            />
          </React.Fragment>
        );
      }}
    />
  );
}

function RegisterForm(props: any) {
  const validationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required(),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phoneNumber: yup.string().required(),
    password: yup.string().required(),
  });

  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  return (
    <FormWrapper
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={props?.onSubmit}
      render={(props) => {
        const { values, errors, setFieldValue, isSubmitting } = props;

        return (
          <React.Fragment>
            <div>
              <div style={{ marginBottom: "20px" }}>
                <Ui.CustomInput
                  type={"email"}
                  placeholder="Enter email"
                  value={values.email}
                  error={errors.email}
                  onChange={(e: any) => setFieldValue("email", e.target.value)}
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
                    placeholder="Enter last name"
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
                    placeholder="Enter first name"
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
                  type={"tel"}
                  placeholder="Enter phone number"
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
                placeholder="Enter password"
                hasIcon={true}
                error={errors.password}
                onChange={(e: any) => setFieldValue("password", e.target.value)}
              />
            </div>
            <div className="flex-center">
              <Ui.Button
                isLoading={isSubmitting}
                text="Register"
                className="hover h-12  text-sm font-black"
                color={"white"}
                backgroundColor={"#3B1FA4"}
                borderRadius="10px"
                disabled={isSubmitting}
                style={{
                  marginTop: "22px",
                  marginBottom: "22px",
                }}
                type="submit"
              />
            </div>
          </React.Fragment>
        );
      }}
    />
  );
}

export { LoginForm, RegisterForm };
