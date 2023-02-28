import React, { useEffect } from "react";
import cards from "../../@core/cards/cards";
import auth from "../../@core/auth/auth";

const Dashboard = () => {
  useEffect(() => {
    async function fetchCards() {
      await Promise.all([cards.getCards(), auth.getProfile()]);
    }

    fetchCards();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
