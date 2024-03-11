import React, { useState } from "react";
import auth from "../../@core/auth/auth";
import styled from "styled-components";
import Ui from "../ui";
import SendMoneyModal from "../modals/sendMoneyModal";
import { useBoolean } from "@fluentui/react-hooks";
import { FaEllipsisV } from "react-icons/fa";
import TransactionHistory from "./transactionHistory";
import ReceiveModal from "../modals/receiveMoneyModal";
import Cards from "react-credit-cards-2";

const Box = styled.div``;

const Card = styled.div`
  border-radius: 10px;
`;

const BtnWithIcon = (props: any) => (
  <Box>
    <Ui.Button
      // backgroundColor={"#213c9b"}
      className="flex hover justify-center items-center"
      width="56px"
      height={"56px"}
      color={"white"}
      fontSize={"300px"}
      borderRadius="10px"
      style={{
        border: "1px solid #E6E6E6",
      }}
      {...props}
    >
      {props.children}
    </Ui.Button>
    <Ui.Text
      fontSize="10px"
      style={{ color: "#697181" }}
      className="text-center pt-3 opacity-60 font-black"
      text={props?.btnText}
    />
  </Box>
);

const Dashboard = () => {
  const [isOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);
  const [receiveModal, { setTrue: show, setFalse: hide }] = useBoolean(false);

  // useEffect(() => {
  //   async function fetchCards() {
  //     await Promise.all([cards.getCards(), auth.getProfile()]);
  //   }

  //   fetchCards();
  // }, [cards]);

  const trxType = {
    CREDIT: "CREDIT",
    DEBIT: "DEBIT",
  };

  return (
    <>
      <Box className="flex flex-col lg:flex-row" style={{ height: "100vh" }}>
        <SendMoneyModal isOpen={isOpen} toggle={hideModal} />
        <ReceiveModal isOpen={receiveModal} toggle={hide} />
        <Box className="w-full lg:w-9/12 mr-6  m-auto md:h-full lg:h-full">
          <Card className="hidden md:block lg:block bg-white w-full h-80 m-0 md:mb-4 lg:mb-4 p-6">
            <Ui.Text
              text="Cash position"
              className="font-black"
              fontSize="14px"
            />
          </Card>
          <Card className="hidden md:block lg:block w-full h-72 bg-white"></Card>
        </Box>

        {/*  */}
        <Box className="w-full lg:w-2/6 m-auto h-full">
          <Card className="mt-4 md:mt-0 bg-white mb-5 w-full p-5">
            <Box className="flex flex-col h-full">
              <Box className="w-full flex justify-between">
                <Ui.Text
                  fontSize="15px"
                  className="font-[500] text-black"
                  text="My Cards"
                />
                <Ui.Button width="8px" className="flex justify-end">
                  <FaEllipsisV />
                </Ui.Button>
              </Box>
              <Card
                style={{ background: "#213c9b" }}
                className="h-[160px] w-full mt-5"
              >
                {/* <Cards
                cvc={"123"}
                expiry={"12/13"}
                name="Makinde Akinola"
                number={"12347800111899"}
                issuer="visa"
                /> */}
              </Card>
              <Box className="flex w-full m-auto justify-between mt-8 mb-6">
                <BtnWithIcon btnText="Send" onClick={showModal}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.22119 9.47961H14.7212M6.22119 17.4796H8.22119M10.7212 17.4796H14.7212"
                      stroke="#9671FF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.2212 15.0096V17.0896C22.2212 20.5996 21.3312 21.4796 17.7812 21.4796H6.66119C3.11119 21.4796 2.22119 20.5996 2.22119 17.0896V8.8696C2.22119 5.3596 3.11119 4.4796 6.66119 4.4796H14.7212M20.2212 10.4796V4.4796M20.2212 4.4796L22.2212 6.4796M20.2212 4.4796L18.2212 6.4796"
                      stroke="#9671FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </BtnWithIcon>
                <BtnWithIcon onClick={show} btnText="Receive">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5542 9.4796H15.0542M6.5542 17.4796H8.5542M11.0542 17.4796H15.0542"
                      stroke="#35CA6D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.5542 15.0096V17.0896C22.5542 20.5996 21.6642 21.4796 18.1142 21.4796H6.9942C3.4442 21.4796 2.5542 20.5996 2.5542 17.0896V8.86958C2.5542 5.35958 3.4442 4.47958 6.9942 4.47958H15.0542M20.5542 4.47958V10.4796M20.5542 10.4796L22.5542 8.47958M20.5542 10.4796L18.5542 8.47958"
                      stroke="#35CA6D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </BtnWithIcon>
                <BtnWithIcon btnText="Invoicing">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.88794 5.97961H13.8879M6.88794 9.97961H12.8879M4.61794 18.6796C5.43794 17.7996 6.68794 17.8696 7.40794 18.8296L8.41794 20.1796C9.22794 21.2496 10.5379 21.2496 11.3479 20.1796L12.3579 18.8296C13.0779 17.8696 14.3279 17.7996 15.1479 18.6796C16.9279 20.5796 18.3779 19.9496 18.3779 17.2896V6.01961C18.3879 1.98961 17.4479 0.979614 13.6679 0.979614H6.10794C2.32794 0.979614 1.38794 1.98961 1.38794 6.01961V17.2796C1.38794 19.9496 2.84794 20.5696 4.61794 18.6796Z"
                      stroke="#FED224"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </BtnWithIcon>
                <BtnWithIcon btnText="More">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.2212 9.24961V5.20961C22.2212 3.61961 21.5812 2.97961 19.9912 2.97961H15.9512C14.3612 2.97961 13.7212 3.61961 13.7212 5.20961V9.24961C13.7212 10.8396 14.3612 11.4796 15.9512 11.4796H19.9912C21.5812 11.4796 22.2212 10.8396 22.2212 9.24961ZM10.7212 9.49961V4.95961C10.7212 3.54961 10.0812 2.97961 8.49119 2.97961H4.45119C2.86119 2.97961 2.22119 3.54961 2.22119 4.95961V9.48961C2.22119 10.9096 2.86119 11.4696 4.45119 11.4696H8.49119C10.0812 11.4796 10.7212 10.9096 10.7212 9.49961ZM10.7212 20.7496V16.7096C10.7212 15.1196 10.0812 14.4796 8.49119 14.4796H4.45119C2.86119 14.4796 2.22119 15.1196 2.22119 16.7096V20.7496C2.22119 22.3396 2.86119 22.9796 4.45119 22.9796H8.49119C10.0812 22.9796 10.7212 22.3396 10.7212 20.7496Z"
                      stroke="#3D67FC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.7212 18.4796H20.7212M17.7212 21.4796V15.4796"
                      stroke="#3D67FC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </BtnWithIcon>
              </Box>
            </Box>
          </Card>
          <Card className="h-56 w-full mb-5 pb-28">
            {/* <TransactionHistory /> */}
          </Card>
          {/* <Card className="h-56 w-full bg-white"></Card> */}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
