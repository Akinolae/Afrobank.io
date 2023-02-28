import apiFunctionCall from "..";
import response, { Res } from "../../@utils/response";
import {
  store,
  updateSignIn,
  updateUser,
  update2faStatus,
} from "../../@store/store";

const login = async (params: object) => {
  try {
    const res = await apiFunctionCall.axiosApi.post("login", params);

    const data: any = response.extractData(res);
    store.dispatch(updateSignIn(true));
    store.dispatch(updateUser(data?.data));

    return data?.data.has2fa;
  } catch (error: Res | any) {
    throw response.extractError(error);
  }
};

const getProfile = async () => {
  try {
    const res = await apiFunctionCall.axiosApi.get("getProfile", {
      headers: {
        Authorization: `Bearer ${store.getState().user.payLoad?.token}`,
      },
    });

    const data: any = response.extractData(res);
    console.log(data?.data);
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
    const res: any = await apiFunctionCall.axiosApi.post(
      "validate2fa",
      {
        code: params,
      },
      {
        headers: {
          Authorization: `Bearer ${store.getState().user.payLoad?.token}`,
        },
      }
    );

    res.data.message.toLowerCase() === "validate" &&
      store.dispatch(update2faStatus(true));

    return;

    // const data = localStorage.getItem("user");
    // console.log();

    // return response.extractData(res);
    return;
  } catch (error: Res | any) {
    throw response.extractError(error);
  }
};
const logOut = (): void => {
  localStorage.removeItem("user");
  store.dispatch(updateSignIn(false));
  store.dispatch(updateUser(""));
  localStorage.clear();
};

export default {
  login,
  logOut,
  validate2fa,
  register,
  getProfile,
};
