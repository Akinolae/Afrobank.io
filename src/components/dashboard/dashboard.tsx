import { useEffect, useState } from "react";
import cards from "../../@core/cards/cards";
import auth from "../../@core/auth/auth";
import styled from "styled-components";
import Ui from "../ui";
import { Link } from "react-router-dom";
import SendMoneyModal from "../modals/sendMoneyModal";
import { useBoolean } from "@fluentui/react-hooks";

const Box = styled.div``;

const Card = styled.div`
  border-radius: 10px;
`;

const Dashboard = () => {
  const [isOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);

  useEffect(() => {
    async function fetchCards() {
      await Promise.all([cards.getCards(), auth.getProfile()]);
    }

    fetchCards();
  }, [cards]);

  const userCards = [
    {
      cardNumber: "12345678012",
      name: "Makinde Akinola Emmanuel",
    },
    {
      cardNumber: "12345678012",
      name: "Makinde Akinola Emmanuel",
    },
    {
      cardNumber: "12345678012",
      name: "Makinde Akinola Emmanuel",
    },
  ];
  return (
    <>
      <Box className="flex" style={{ height: "100vh" }}>
        <SendMoneyModal isOpen={isOpen} toggle={hideModal} />
        <Box className="w-9/12 mr-6 m-auto h-full">
          <Card className="bg-white w-full h-80 mb-4 p-6">
            <Ui.Text
              text="Cash position"
              className="font-black"
              fontSize="14px"
            />
          </Card>
          <Card className="w-full h-72 bg-white"></Card>
        </Box>

        {/*  */}
        <Box className="w-2/6 m-auto h-full">
          <Card className="bg-white mb-5 w-full p-6 h-56">
            <Box className="flex justify-center items-center flex-col h-full">
              <Box className="w-full flex justify-between">
                <Ui.Text
                  fontSize="13px"
                  className="opacity-60 text-black"
                  text="Info"
                />
                <Ui.Text
                  fontSize="13px"
                  className=" text-black font-black"
                  text="₦ 1,000,000.00"
                />
              </Box>
              <Box className="w-full flex justify-between mb-5 mt-6">
                <Ui.Text
                  fontSize="13px"
                  className="opacity-60 text-black"
                  text="Info"
                />
                <Ui.Text
                  fontSize="13px"
                  className="font-black text-black"
                  text="₦ 1,000,000.00"
                />
              </Box>
              <Box className="w-full">
                {/* <Link to={"send"} className="w-40"> */}
                <Ui.Button
                  text="send money"
                  height={"40px"}
                  color={"white"}
                  backgroundColor={"#3B1FA4"}
                  className="rounded-full text-xs hover pl-1 pr-1 max-w-sm justify-center items-center"
                  onClick={showModal}
                />
                {/* </Link> */}
                <Ui.Button
                  text="Add money"
                  height={"40px"}
                  backgroundColor={"none"}
                  style={{
                    border: "0.5px solid black",
                  }}
                  className="rounded-full text-xs hover text-black mt-4 justify-center items-center"
                />
              </Box>
            </Box>
          </Card>
          <Card className="h-56 w-full bg-white mb-5"></Card>
          <Card className="h-56 w-full bg-white"></Card>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
