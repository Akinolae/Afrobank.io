import {
  store,
  updateUser,
  initialState,
  updateSignIn,
  update2faStatus,
} from "../../@store/store";
import { Auth } from "afrobank-sdk";

class Authnew extends Auth {
  public async verifyEmail(email: string, code: string): Promise<void> {
    try {
      await this.auth.apiFunctionCall({
        url: "confirmSignUp",
        method: "POST",
        data: { email, code },
      });
    } catch (error: any) {
      throw error?.message;
    }
  }

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
