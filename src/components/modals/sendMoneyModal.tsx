import Modal from "./modal";

interface ModalProps {
  isOpen: boolean;
  toggle(): void;
}

const SendMoneyModal = (props: ModalProps) => {
  const { isOpen, toggle } = props;
  return (
    <Modal type="modal" isOpen={isOpen} toggle={toggle}>
      <h1>Send money</h1>
    </Modal>
  );
};

export default SendMoneyModal;
