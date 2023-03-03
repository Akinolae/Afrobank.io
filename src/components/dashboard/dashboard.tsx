import React, { useEffect, useState } from "react";
import cards from "../../@core/cards/cards";
import auth from "../../@core/auth/auth";
import Ui from "../ui";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function fetchCards() {
      await Promise.all([cards.getCards(), auth.getProfile()]);
    }

    fetchCards();
  }, []);

  return (
    <>
      <div style={{ width: "100px" }}>
        <Ui.Button text="click" onClick={() => setVisible(!visible)} />
      </div>
    </>
  );
};

export default Dashboard;
