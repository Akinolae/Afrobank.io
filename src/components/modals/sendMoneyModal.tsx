import Modal from "./modal";
import { SendMoneyForm, CardTrxForm } from "../forms/transactionForms";
import CustomDropDown from "../ui/dropdown";
import React, { useState } from "react";
import Ui from "../ui";

interface ModalProps {
  isOpen: boolean;
  toggle(): void;
}

const SendMoneyModal: React.FC<ModalProps> = ({ isOpen, toggle }) => {
  const [trxType, setTrxType] = useState("main");

  const handleChange = (e: any, val: any): void => {
    setTrxType(val?.key);
  };

  return (
    <Modal type="drawer" className="h-full" isOpen={isOpen} toggle={toggle}>
      <React.Fragment>
        <Ui.Text text="Send Money" className="font-black text-lg mb-10" />
        <div className="w-full">
          <CustomDropDown
            label="Pick a transaction mode"
            placeholder="Transaction mode"
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
              root: {
                width: "50%",
              },
              label: {
                fontSize: "10px",
              },
              caretDownWrapper: {
                height: "100%",
                display: "flex",
                alignItems: "center",
              },
              caretDown: {
                fontSize: "10px",
              },
              title: {
                height: "30px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                border: `1px solid #858282`,
                borderRadius: "10px",
                paddingLeft: "15px",
                paddingRight: "15px",
              },
              dropdownItem: {
                fontSize: "10px",
                background: "#3B1FA4",
              },
              dropdownItemSelected: {
                fontSize: "10px",
              },
            }}
          />
        </div>
        {trxType === "card" ? <CardTrxForm /> : <SendMoneyForm />}
      </React.Fragment>
    </Modal>
  );
};

export default SendMoneyModal;
