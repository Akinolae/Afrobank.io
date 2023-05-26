import Modal from "./modal";

interface ModalProps {
  isOpen: boolean;
  toggle(): void;
}

const SendMoneyModal = (props: ModalProps) => {
  const { isOpen, toggle } = props;
  return (
    <Modal
      type="modal"
      styles={{
        main: {
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          padding: "1%",
          height: "500px"
        },
      }}
      isOpen={isOpen}
      toggle={toggle}
    >
      <h1>Send money</h1>
    </Modal>
  );
};

export default SendMoneyModal;
