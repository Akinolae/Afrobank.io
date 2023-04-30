import {
  store,
  updateUser,
  initialState,
  updateSignIn,
  update2faStatus,
} from "../../@store/store";
// import { Auth } from "afrobank-sdk";
// import { LoginParams } from "afrobank-sdk/interface/index.interface";

// const auth = new Auth(store, "http://localhost:3005/Api/v1/", {
//   updateUser,
// });

const getToken = (): string | undefined => {
  const token = store.getState().user.payLoad.token;
  return token;
};

const has2fa = (): boolean => {
  return store.getState().user.has2fasStatus;
};

const login = async (params: any) => {
  try {
    // const res = await auth.login(params);
    // if (!res?.has2fa) {
    //   store.dispatch(updateSignIn(true));
    // }
    store.dispatch(updateUser({}));
    // return res?.has2fa;
  } catch (error: any) {
    throw error.message;
  }
};

const isSignedIn = (): boolean => {
  return store.getState().user.isSignedIn;
};

const getProfile = async () => {
  try {
    // await auth.getProfile();
  } catch (error: any) {
    throw error.message || error;
  }
};

const register = async (params: object) => {
  try {
    // await auth.register(params);

    return {};
  } catch (error: any) {
    throw error.message;
  }
};

const validate2fa = async (params: string) => {
  try {
    // await auth.validate2FA(params);

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
