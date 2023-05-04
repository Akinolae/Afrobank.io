import { useEffect } from "react";
import cards from "../../@core/cards/cards";
import auth from "../../@core/auth/auth";
import styled from "styled-components";
import Ui from "../ui";

const Box = styled.div`
  width: 100%;
`;

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
    <Box style={{ display: "flex", justifyContent: "space-between" }}>
      <Box style={{ width: "63%", backgroundColor: "yellow" }}>
        <Card
          style={{
            width: "100%",
            background: "white",
            height: "500px",
            marginBottom: "20px",
          }}
        ></Card>
        <Card
          style={{ width: "100%", background: "white", height: "300px" }}
        ></Card>
      </Box>

      {/*  */}
      <Box style={{ width: "35%" }}>
        <Card
          style={{
            width: "100%",
            background: "white",
            height: "270px",
            marginBottom: "20px",
          }}
        >
          <Box
            className="flex-column"
            style={{
              width: "80%",
              paddingTop: "20px",
              margin: "auto",
              display: "flex",
            }}
          >
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
