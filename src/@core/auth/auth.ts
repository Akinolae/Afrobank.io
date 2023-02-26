import apiFunctionCall from "..";
import response, { Res } from "../../@utils/response";
import {
  store,
  updateSignIn,
  updateUser,
  updateToken,
} from "../../@store/store";

const login = async (params: object) => {
  try {
    const res: Res = await apiFunctionCall.axiosApi.post("login", params);
    return response.extractData(res);
  } catch (error: Res | any) {
    throw response.extractError(error);
  }
};

const register = async (params: object) => {
  try {
    const res = await apiFunctionCall.axiosApi.post("/register", params);

    // const data = localStorage.getItem("user");
    // console.log();

    // return response.extractData(res);
    return;
  } catch (error: Res | any) {
    throw response.extractError(error);
  }
};

const validate2fa = async (params: string) => {
  try {
    const res = await apiFunctionCall.axiosApi.post("/validate2fa", {
      code: params,
    });

    // const data = localStorage.getItem("user");
    // console.log();

    // return response.extractData(res);
    return;
  } catch (error: Res | any) {
    throw response.extractError(error);
  }
};

export default {
  login,
  validate2fa,
  register,
};
