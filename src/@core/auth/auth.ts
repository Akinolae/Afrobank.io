import {
  store,
  updateUser,
  initialState,
  updateSignIn,
  update2faStatus,
} from "../../@store/store";
import { Auth } from "afrobank-sdk";
import { LoggedInUser } from "../../interface/index.interface";

class Authnew extends Auth {
  public isSignedIn = (): boolean => {
    return store.getState().user.isSignedIn;
  };

  public getToken = (): string => {
    const token = store.getState().user.payLoad.token;
    return token;
  };

  public has2fa = (): boolean => {
    return store.getState().user.has2fasStatus;
  };

  public updateLoggedInUser = (data: LoggedInUser): void => {
    store.dispatch(updateUser(data));
    store.dispatch(updateSignIn(true));
  };

  public logOut = (): void => {
    localStorage.removeItem("user");
    store.dispatch(updateSignIn(initialState.isSignedIn));
    store.dispatch(updateUser(initialState.payLoad));
    store.dispatch(update2faStatus(initialState.has2fasStatus));
    localStorage.clear();
  };
}

const newAuth = new Authnew(store, "http://localhost:3005/Api/v1/", {});

export default newAuth;
