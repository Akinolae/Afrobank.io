import * as yup from "yup";
import Ui from "../ui";
import React from "react";
import { errors } from "../../@utils/error";
import { useAuth0 } from "@auth0/auth0-react";
import { Formik, Form } from "formik";
import { FormikProps } from "../../interface/index.interface";

export const FormWrapper: React.FC<React.PropsWithChildren<FormikProps>> = ({
  render,
  onSubmit,
  initialValues,
  validationSchema,
}) => {
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
  const { loginWithRedirect } = useAuth0();
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
            <div className="flex gap-3 flex-col">
              <Ui.CustomInput
                type="email"
                label="Email"
                placeholder="Enter your email"
                value={values.email}
                error={errors.email}
                onChange={(e: any) => setFieldValue("email", e.target.value)}
              />

              <Ui.CustomPasswordInput
                label="Password"
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
              className="hover h-12 text-sm font-black m-auto mt-5 mb-3 justify-center items-center"
              borderRadius="10px"
              backgroundColor={"#3B1FA4"}
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
          <div className="flex flex-col gap-5">
            <div>
              <Ui.CustomInput
                type={"email"}
                label="Email"
                placeholder="Enter email"
                value={values.email}
                error={errors.email}
                onChange={(e: any) => setFieldValue("email", e.target.value)}
              />
              <div className="flex justify-between mt-5 gap-8">
                <Ui.CustomInput
                  placeholder="Enter last name"
                  label="Last Name"
                  value={values.lastName}
                  error={errors.lastName}
                  onChange={(e: any) =>
                    setFieldValue("lastName", e.target.value)
                  }
                />
                <Ui.CustomInput
                  placeholder="Enter first name"
                  label="First Name"
                  value={values.firstName}
                  error={errors.firstName}
                  onChange={(e: any) =>
                    setFieldValue("firstName", e.target.value)
                  }
                />
              </div>
            </div>
            <Ui.CustomInput
              type={"tel"}
              label="Phone"
              placeholder="Enter phone number"
              value={values.phoneNumber}
              error={errors.phoneNumber}
              onChange={(e: any) =>
                setFieldValue("phoneNumber", e.target.value)
              }
            />
            <Ui.CustomPasswordInput
              value={values.password}
              label="Password"
              placeholder="Enter password"
              hasIcon={true}
              error={errors.password}
              onChange={(e: any) => setFieldValue("password", e.target.value)}
            />
            <Ui.Button
              isLoading={isSubmitting}
              text="Register"
              className="hover h-12 text-sm font-black justify-center items-center mt-5 mb-3 m-auto"
              color={"white"}
              backgroundColor={"#3B1FA4"}
              borderRadius="10px"
              disabled={isSubmitting}
              type="submit"
            />
          </div>
        );
      }}
    />
  );
}

export { LoginForm, RegisterForm };
