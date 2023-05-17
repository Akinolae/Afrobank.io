import { useEffect, useState } from "react";
import cards from "../../@core/cards/cards";
import auth from "../../@core/auth/auth";
import styled from "styled-components";
import Ui from "../ui";

const Box = styled.div``;

const Card = styled.div`
  border-radius: 10px;
`;

const Dashboard = () => {
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
    <Box className="flex justify-between w-full h-full">
      <Box className="w-3/5 m-auto h-full">
        <Card className="bg-white w-full h-72 mb-4 p-6">
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
        <Card className="bg-white mb-4 w-full p-6 h-56">
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
            <Ui.Button
              text="send money"
              height={"35px"}
              color={"white"}
              backgroundColor={"#3B1FA4"}
              className="rounded-full text-xs hover"
            />
            <Ui.Button
              text="Add money"
              height={"35px"}
              backgroundColor={"none"}
              style={{
                border: "0.5px solid black",
              }}
              className="rounded-full text-xs hover mt-2 text-black"
            />
          </Box>
        </Card>
        <Card className="h-56 w-full bg-white mb-4"></Card>
        <Card className="h-56 w-full bg-white mb-4"></Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
