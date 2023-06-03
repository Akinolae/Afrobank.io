import styled, { CSSProperties } from "styled-components";
import Ui from "../ui";

const Box = styled.div<CSSProperties>``;

const NotificationsDrawer = (props: any) => {
  return (
    <Ui.Drawer isOpen={props?.isOpen} dismissPanel={props?.toggle}>
      <Box>
        <Ui.Text text="Notifications" className="font-black text-lg" />
        <Box className="mt-5">
          {props?.notifications.map((data: any, i: number) => {
            return (
              <Box
                className="h-14 flex flex-col justify-start rounded mb-2 p-2 hover:opacity-40 cursor-pointer transition-all"
                style={{ backgroundColor: "#e8e9e7" }}
                key={i}
              >
                <Ui.Text
                  text={data.title}
                  fontSize="12px"
                  className="text-sm font-black"
                />
                <Ui.Text
                  text={data.description}
                  className="font-black opacity-60"
                  fontSize="10px"
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Ui.Drawer>
  );
};

export default NotificationsDrawer