import Modal from "./modal";
import React, { useEffect, useState } from "react";
import QRcode from "qrcode";

interface ModalProps {
  isOpen: boolean;
  toggle(): void;
}

const ReceiveModal: React.FC<ModalProps> = ({ isOpen, toggle }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function generateQrcode() {
      try {
        const url = await QRcode.toDataURL(
          '{"bank": "gtb","account": "0128949662" }'
        );
        setUrl(url);
      } catch (error) {
        console.log(error);
      }
    }

    generateQrcode();
  }, [QRcode]);
  return (
    <Modal type="drawer" isOpen={isOpen} toggle={toggle}>
      <React.Fragment>
        <img src={url} alt="" className="w-[160px] h-full m-auto bg-yellow-500" />
      </React.Fragment>
    </Modal>
  );
};

export default ReceiveModal;
