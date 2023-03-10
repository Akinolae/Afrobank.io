import { useEffect } from "react";
import cards from "../../@core/cards/cards";
import auth from "../../@core/auth/auth";

const Dashboard = () => {
  useEffect(() => {
    async function fetchCards() {
      await Promise.all([cards.getCards(), auth.getProfile()]);
    }

    fetchCards();
  }, [cards]);

  // const card = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return <></>;
};

export default Dashboard;
