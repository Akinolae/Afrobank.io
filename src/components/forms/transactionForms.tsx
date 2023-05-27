import { FormWrapper } from "./forms";
import * as yup from "yup";
import ui from "../ui";

const SendMoneyForm = () => {
  return (
    <FormWrapper
      initialValues={{}}
      onSubmit={() => {}}
      validationSchema={{}}
      render={() => {
        return (
          <>
            <ui.CustomInput />
            <ui.CustomInput />
            <ui.CustomInput />
            <ui.CustomInput />
            <ui.Button
              // isLoading={isSubmitting}
              text="Proceed"
              className="hover h-12  text-sm font-black"
              color={"white"}
              backgroundColor={"#3B1FA4"}
              borderRadius="10px"
              // disabled={isSubmitting}
              style={{
                marginTop: "22px",
                marginBottom: "22px",
              }}
              type="submit"
            />
          </>
        );
      }}
    />
  );
};

const CardTrxForm = () => {
  return (
    <>
      <h1>Card Trx form</h1>
    </>
  );
};

export { SendMoneyForm, CardTrxForm };
