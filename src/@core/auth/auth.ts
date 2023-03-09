import apiFunctionCall from "..";
import response from "../../@utils/response";
import {
  store,
  updateUser,
  initialState,
  updateSignIn,
  update2faStatus,
} from "../../@store/store";

const getToken = (): string | undefined => {
  const token = store.getState().user.payLoad.token;
  return token;
};

const has2fa = (): boolean => {
  return store.getState().user.has2fasStatus;
};

const login = async (params: object) => {
  try {
    const res = await apiFunctionCall.apiFunctionCall({
      url: "login",
      method: "POST",
      data: params,
    });

    const data: any = response.extractData(res);

    if (!data?.has2fa) {
      store.dispatch(updateSignIn(true));
    }

    store.dispatch(updateUser(data));

    return data?.has2fa;
  } catch (error: any) {
    throw error.message;
  }
};

const isSignedIn = (): boolean => {
  return store.getState().user.isSignedIn;
};

const getProfile = async () => {
  const email = store.getState().user.payLoad.email;
  try {
    const res = await apiFunctionCall.apiFunctionCall({
      url: `getProfile?email=${email}`,
      method: "GET",
    });

    const data: any = response.extractData(res);

    store.dispatch(updateUser(data?.message));
  } catch (error: any) {
    throw error.message || error;
  }
};

const register = async (params: object) => {
  try {
    await apiFunctionCall.apiFunctionCall({
      url: "register",
      method: "POST",
      data: params,
    });

    return;
  } catch (error: any) {
    throw error.message;
  }
};

const validate2fa = async (params: string) => {
  try {
    await apiFunctionCall.apiFunctionCall({
      method: "POST",
      url: "validate2fa",
      data: { code: params },
      hasAuth: true,
    });

    store.dispatch(update2faStatus(true));
    store.dispatch(updateSignIn(true));

    return;
  } catch (error: any) {
    throw error.message || error;
  }
};

const logOut = (): void => {
  localStorage.removeItem("user");
  store.dispatch(updateSignIn(initialState.isSignedIn));
  store.dispatch(updateUser(initialState.payLoad));
  store.dispatch(update2faStatus(initialState.has2fasStatus));
  localStorage.clear();
};

export default {
  login,
  has2fa,
  logOut,
  register,
  getToken,
  isSignedIn,
  getProfile,
  validate2fa,
};
