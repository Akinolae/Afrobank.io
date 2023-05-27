import Modal from "./modal";
import { SendMoneyForm, CardTrxForm } from "../forms/transactionForms";
import CustomDropDown from "../ui/dropdown";
import React, { useState } from "react";
import Ui from "../ui";

interface ModalProps {
  isOpen: boolean;
  toggle(): void;
}

const SendMoneyModal = (props: ModalProps) => {
  const { isOpen, toggle } = props;
  const [trxType, setTrxType] = useState("main");

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
                text: "Card",
              },
              {
                key: "main",
                text: "Main",
              },
            ]}
            onChange={(event, option) => handleChange(event, option)}
            styles={{
              label: {
                fontSize: "10px",
              },
              dropdownOptionText: {
                fontSize: "10px",
              },
              title: {
                fontSize: "10px",
              },
              caretDown: {
                fontSize: "9px",
              },
            }}
          />
        </div>
        {trxType === "card" ? (
          <Ui.AnimationWrapper
            height={10}
            className="pl-12 pr-12 h-full w-full"
            render={CardTrxForm}
          />
        ) : (
          <Ui.AnimationWrapper
            height={"10"}
            className="pl-12 pr-12 h-full w-full"
            render={SendMoneyForm}
          />
        )}
      </React.Fragment>
    </Modal>
  );
};

export default SendMoneyModal;
