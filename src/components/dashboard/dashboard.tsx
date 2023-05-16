import { useEffect } from "react";
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

  // const card = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <Box className="flex justify-between w-full">
      <Box className="w-9/12">
        <Card
          style={{
            background: "white",
            height: "500px",
            marginBottom: "20px",
          }}
        ></Card>
        <Card style={{ background: "white", height: "300px" }}></Card>
      </Box>

      {/*  */}
      <Box className="w-2/5 ml-8">
        <Card
          className="bg-white mb-5 w-full p-4"
          style={{
            height: "270px",
          }}
        >
          <Box className="flex justify-center items-center flex-col h-full">
            <Box className="flex-between">
              <Ui.Text text="Info" />
              <Ui.Text text="Info 2" />
            </Box>
            <Box style={{ marginTop: "20%" }} className="flex-between">
              <Ui.Text text="Info" />
              <Ui.Text text="Info 2" />
            </Box>
            <Ui.Button
              text="Hello"
              width="80%"
              fontSize={16}
              height={"40px"}
              color={"white"}
              backgroundColor={"#3B1FA4"}
              style={{
                margin: "30px auto",
                fontWeight: 500,
                borderRadius: "50px",
              }}
            />
          </Box>
        </Card>
        <Card
          style={{
            width: "100%",
            background: "white",
            height: "270px",
            marginBottom: "20px",
          }}
        ></Card>
        <Card
          style={{ width: "100%", background: "white", height: "270px" }}
        ></Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
