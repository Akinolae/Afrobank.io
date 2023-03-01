import apiFunctionCall from "..";
import response, { Res } from "../../@utils/response";
import {
  store,
  updateUser,
  updateSignIn,
  update2faStatus,
  initialState,
} from "../../@store/store";

const getToken = (): string | undefined => {
  const token = store.getState().user.payLoad.token;
  return token;
};

const login = async (params: object) => {
  try {
    const res = await apiFunctionCall.axiosApi.post("login", params);

    const data: any = response.extractData(res);
    if (!data?.data.has2fa) {
      store.dispatch(updateSignIn(true));
    }

    return data?.data.has2fa;
  } catch (error: any) {
    throw response.extractError(error);
  }
};

const isSignedIn = (): boolean => {
  return store.getState().user.isSignedIn;
};

const getProfile = async () => {
  const token = getToken();

  try {
    const res = await apiFunctionCall.axiosApi.get("getProfile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!!Object.keys(store.getState().user.payLoad).length) {
      return;
    }

    const data: any = response.extractData(res);
    store.dispatch(updateUser(data?.data));
  } catch (error: any) {
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
  } catch (error: any) {
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

    store.dispatch(update2faStatus(true));
    store.dispatch(updateSignIn(true));

    return;
  } catch (error: any) {
    throw response.extractError(error);
  }
};
const logOut = (): void => {
  localStorage.removeItem("user");
  store.dispatch(updateSignIn(initialState.isSignedIn));
  store.dispatch(updateUser(initialState.payLoad));
  localStorage.clear();
};

export default {
  login,
  logOut,
  register,
  getToken,
  isSignedIn,
  getProfile,
  validate2fa,
};
