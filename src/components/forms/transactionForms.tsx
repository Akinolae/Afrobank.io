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
          <div className="mt-4">
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
          </div>
        );
      }}
    />
  );
};

const CardTrxForm = () => {
  const cards = [
    {
      cardNumber: "1233",
      name: "Akinola Makinde",
    },
    {
      cardNumber: "1234",
      name: "Akinola Makinde",
    },
  ];
  return (
    <>
      <h1>Card Trx form</h1>
    </>
  );
};

export { SendMoneyForm, CardTrxForm };
