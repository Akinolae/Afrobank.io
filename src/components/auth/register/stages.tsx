import FirstForm from "./firstForm";
import SecondForm from "./secondeForm";

export const regStages = ["NAME_N_GENDER", "EMAIL_N_PASSWORD"];
export const regStageData = [
  {
    progress: 0,
    nextStage: "EMAIL_N_PASSWORD",
    component: FirstForm,
  },
  {
    progress: 0,
    nextStage: "EMAIL_N_PASSWORD",
    component: SecondForm,
  },
];

export interface StagesInfo {
  email?: string | undefined;
  password?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  gender?: string | undefined;
  phoneNumber?: string | undefined;
}

export interface RegStageData {
  NAME_N_GENDER?: object | any;
  EMAIL_N_PASSWORD?: object | any;
}
