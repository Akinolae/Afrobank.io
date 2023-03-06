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

  // const card = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      {/* <Ui.Modal
        isOpen={visible}
        toggle={() => setVisible(!visible)}
        width={"500px"}
        size="small"
      >
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            eos suscipit cum? Deserunt excepturi vero, nostrum iste facere
            dolorem, harum est velit illo aperiam exercitationem. Ab iusto ea
            asperiores atque?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            reprehenderit corrupti debitis possimus ratione. Sunt qui labore
            aspernatur necessitatibus aliquam nam, nihil enim sequi dolores,
            optio quidem repudiandae eius nesciunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            reprehenderit corrupti debitis possimus ratione. Sunt qui labore
            aspernatur necessitatibus aliquam nam, nihil enim sequi dolores,
            optio quidem repudiandae eius nesciunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            reprehenderit corrupti debitis possimus ratione. Sunt qui labore
            aspernatur necessitatibus aliquam nam, nihil enim sequi dolores,
            optio quidem repudiandae eius nesciunt?
          </p>
        </div>
      </Ui.Modal> */}

      <div style={{ width: "100px" }}>
        <Ui.Button text="click" onClick={() => setVisible(!visible)} />
      </div>
    </>
  );
};

export default Dashboard;
