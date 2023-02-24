import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Ui from "../../ui";
import { StagesInfo } from "./stages";

const SecondForm = (next: any, stagesData: StagesInfo) => {
  const initialValues = {
    email: stagesData?.email || "",
    password: stagesData?.password || "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required(),
    password: yup.string().required(),
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(e) => console.log(e)}
      >
        {({ values, errors, setFieldValue }) => {
          return (
            <Form>
              <div style={{ marginBottom: "20px" }}>
                <Ui.CustomInput
                  type={"email"}
                  label="Email"
                  placeholder="Enter your email"
                  value={values.email}
                  error={errors.email}
                  hasIcon={true}
                  onChange={(e: any) => setFieldValue("email", e.target.value)}
                />
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
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SecondForm;
