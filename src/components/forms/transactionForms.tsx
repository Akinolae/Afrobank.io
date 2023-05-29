import { FormWrapper } from "./forms";
import * as yup from "yup";
import ui from "../ui";
import AnimationWrapper from "../ui/animationWrapper";

const SendMoneyForm = () => {
  return (
    <AnimationWrapper
      height={"auto"}
      className="pl-12 pr-12 h-full w-full"
      render={() => {
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
                  <div className="w-36 flex justify-end ml-auto">
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
                </div>
              );
            }}
          />
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
    <AnimationWrapper
      height={"auto"}
      className="pl-12 pr-12 h-full w-full"
      render={() => {
        return (
          <>
            <h1>Hello ther</h1>
          </>
        );
      }}
    />
  );
};

export { SendMoneyForm, CardTrxForm };
