import React from "react";
import { Form, Formik } from "formik";
import Ui from "../../ui";
import * as yup from "yup";
import { StagesInfo } from "./stages";

const FirstForm = (next: any, stagesData: StagesInfo) => {
  const initialValues = {
    firstName: stagesData?.firstName || "",
    lastName: stagesData?.lastName || "",
    // gender: stagesData?.gender || "",
    phoneNumber: stagesData?.phoneNumber || "",
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    // gender: yup.string().required(),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e) => next(e)}
      >
        {({ values, setFieldValue, errors }) => {
          return (
            <Form>
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
                  placeholder="Enter your phone number"
                  value={values.phoneNumber}
                  error={errors.phoneNumber}
                  onChange={(e: any) =>
                    setFieldValue("phoneNumber", e.target.value)
                  }
                />
              </div>
              {/* <div style={{ marginBottom: "20px" }}>
                <Ui.CustomInput
                  type={"select"}
                  option={[
                    { label: "male", value: "male" },
                    { label: "female", value: "female" },
                  ]}
                  label="Gender"
                  value={values.gender}
                  error={errors.gender}
                  onChange={(e: any) => setFieldValue("gender", e.target.value)}
                />
              </div> */}
              <Ui.Button
                width="100%"
                height={50}
                text={
                  values.firstName &&
                  values.lastName &&
                  // values.gender &&
                  values.phoneNumber
                    ? "Next"
                    : "Submit"
                }
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
    </>
  );
};

export default FirstForm;
