import Modal from "./modal";
import { SendMoneyForm, CardTrxForm } from "../forms/transactionForms";
import { motion } from "framer-motion";
import CustomDropDown from "../ui/dropdown";
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  toggle(): void;
}

const AnimationWrapper = (props: any) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: 10,
      opacity: 1,
    }}
    transition={{
      type: "spring",
      duration: 3,
    }}
    className="p-12 h-full w-full"
    {...props}
  >
    {props.children}
  </motion.div>
);

const SendMoneyModal = (props: ModalProps) => {
  const { isOpen, toggle } = props;
  const [trxType, setTrxType] = useState("");

  const handleChange = (e: any, val: any): void => {
    setTrxType(val?.key);
  };

  return (
    <Modal
      type="modal"
      styles={{
        main: {
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          padding: "10px",
        },
      }}
      isOpen={isOpen}
      toggle={toggle}
    >
      <React.Fragment>
        <div className="w-48 pl-12">
          <CustomDropDown
            label="transaction type"
            placeholder="select transaction mode"
            options={[
              {
                key: "card",
                text: "card",
              },
              {
                key: "main",
                text: "main",
              },
            ]}
            onChange={(event, option) => handleChange(event, option)}
            styles={{
              label: {
                fontSize: "10px",
              },
            }}
          />
        </div>
        {trxType === "card" ? (
          <AnimationWrapper>
            <CardTrxForm />
          </AnimationWrapper>
        ) : (
          <AnimationWrapper>
            <SendMoneyForm />
          </AnimationWrapper>
        )}
      </React.Fragment>
    </Modal>
  );
};

export default SendMoneyModal;
