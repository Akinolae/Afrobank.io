import { FormWrapper } from "./forms";
import ui from "../ui";
import AnimationWrapper from "../ui/animations/animationWrapper";
import { useBoolean } from "@fluentui/react-hooks";
import * as yup from "yup";
import Pin from "../modals/pinModal";
import { banks } from "../../@utils/data";
import { useMemo } from "react";

const SendMoneyForm: React.FC = () => {
  const [isOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);

  const validationSchema = yup.object().shape({
    accountNumber: yup.string().required(),
    amount: yup.string().required(),
    bank: yup.string().required(),
  });

  const bankList = useMemo(() => {
    return banks.map((bank) => ({
      key: bank.bank_code,
      text: bank.bank_name,
    }));
  }, [banks]);

  return (
    <>
      <Pin
        isOpen={isOpen}
        toggle={hideModal}
        onChange={(e) => console.log(e)}
      />
      <AnimationWrapper
        height={"auto"}
        className="h-full w-full"
        render={() => {
          return (
            <FormWrapper
              initialValues={{
                accountNumber: "",
                amount: "",
                bank: "",
              }}
              onSubmit={(e) => {
                console.log(e);
              }}
              validationSchema={validationSchema}
              render={(props) => {
                const { values, errors, setFieldValue, isSubmitting } = props;

                console.log({ errors });
                return (
                  <div className="h-full flex flex-col justify-between">
                    <div className="mt-4">
                      <ui.CustomInput
                        placeholder="Enter account number"
                        value={values.accountNumber}
                        error={errors.accountNumber}
                        onChange={(e: any) =>
                          setFieldValue("accountNumber", e.target.value)
                        }
                      />
                      <div className="mt-4">
                        <ui.CustomInput
                          placeholder="Enter amount"
                          value={values.amount}
                          error={errors.amount}
                          onChange={(e: any) =>
                            setFieldValue("amount", e.target.value)
                          }
                        />
                      </div>
                      <ui.CustomDropDown
                        placeholder="Select bank"
                        className="mt-4"
                        options={bankList}
                        error={errors.bank}
                        onChange={(e, option) =>
                          setFieldValue("bank", option?.key)
                        }
                      />
                      <div className="mt-4">
                        <ui.Switch />
                      </div>
                    </div>
                    <div className="absolute top-100 bottom-0 left-0 right-0 pl-4 pr-4">
                      <ui.Button
                        // isLoading={true}
                        disabled={
                          !!errors.accountNumber ||
                          !!errors.amount ||
                          !!errors.bank
                        }
                        text="Proceed"
                        className="hover h-10 font-black justify-center m-auto items-center"
                        color={"white"}
                        backgroundColor={"#3B1FA4"}
                        borderRadius="10px"
                        width="100%"
                        onClick={showModal}
                        style={{
                          marginTop: "22px",
                          marginBottom: "22px",
                          fontSize: "12px",
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
    </>
  );
};

const CardTrxForm = () => {
  const [isOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);

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
      className="h-full w-full"
      render={() => {
        return (
          <div className="h-full flex flex-col justify-between">
            <div className="mt-4">
              <ui.CustomInput placeholder="Enter card number" />
              <div className="mt-4">
                <ui.CustomInput placeholder="Enter amount" />
              </div>
              <ui.CustomDropDown
                placeholder="Select bank"
                className="mt-4"
                options={[
                  {
                    key: "card",
                    text: "Card",
                  },
                  {
                    key: "main",
                    text: "Main",
                  },
                ]}
              />
              <div className="mt-4">
                <ui.Switch />
              </div>
            </div>
            <div className="absolute top-100 bottom-0 left-0 right-0 pl-4 pr-4">
              <ui.Button
                // isLoading={true}
                text="Proceed"
                className="hover h-10 font-black justify-center m-auto items-center"
                color={"white"}
                backgroundColor={"#3B1FA4"}
                borderRadius="10px"
                width="100%"
                style={{
                  marginTop: "22px",
                  marginBottom: "22px",
                  fontSize: "12px",
                }}
                type="submit"
              />
            </div>
          </div>
        );
      }}
    />
  );
};

export { SendMoneyForm, CardTrxForm };
