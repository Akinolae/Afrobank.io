import Ui from "../ui";
import { Links } from "./sidebar";

const NavModal = (props: any) => {
  return (
    <Ui.Drawer isOpen={props?.isOpen} dismissPanel={props?.toggle}>
      <div className="pt-11">
        <Links toggle={props?.toggle} />
      </div>
    </Ui.Drawer>
  );
};
export default NavModal;
