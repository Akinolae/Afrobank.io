import apiFunctionCall from "..";
import response, { Res } from "../../@utils/response";

const login = async (params: object) => {
  try {
    const res = await apiFunctionCall("/login", params, "POST");

    localStorage.setItem("user", JSON.stringify(response.extractData(res)));
    return response.extractData(res);
  } catch (error: Res | any) {
    throw response.extractError(error);
  }
};

export default {
  login,
};
