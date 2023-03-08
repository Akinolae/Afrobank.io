/*
 used Fetch instead of  Axios
 exended to accomodate token verification and authorizations
*/

import auth from "./auth/auth";
import { store } from "../@store/store";
import response from "../@utils/response";

type api = {
  url: string;
  method: "GET" | "PATCH" | "POST" | "PUT";
  options?: any;
  data?: any;
  hasAuth?: boolean;
};

//
const validateToken = async () => {
  const { email, token } = store.getState().user.payLoad;
  try {
    await apiFunctionCall({
      url: "verify-token",
      method: "POST",
      data: { token },
    });

    return;
  } catch (error: any) {
    /*
    If error is invalid it runs this bloc of code
    */

    if (["invalid", "expired"].includes(error)) {
      await apiFunctionCall({
        url: `new-token?${email}`,
        method: "GET",
      });
      await auth.getProfile();
    }
    throw response.extractError(error) || error;
  }
};

const apiFunctionCall = async (params: api) => {
  const {
    method,
    url,
    data,
    options = { "Content-Type": "application/json" },
    hasAuth,
  } = params;
  const val = !!data
    ? { body: typeof data !== "string" ? JSON.stringify(data) : data }
    : {};

  /*
    only validate token when @params(hasAuth) => true
  */

  if (hasAuth) {
    await validateToken();
    const token = store.getState().user.payLoad.token;
    options.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`http://localhost:3005/Api/v1/${url}`, {
    method: method,
    headers: options,
    ...val,
  });

  if (!response?.ok) {
    throw (await response.json()) || "Network Error";
  }

  return response.json();
};

export default { apiFunctionCall };
