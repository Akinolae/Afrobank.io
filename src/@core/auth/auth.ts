import apiFunctionCall from "..";
import response, { Res } from "../../@utils/response";

const login = async (params: object) => {
  try {
    const res = await apiFunctionCall("/login", params, "POST");

    const data = localStorage.getItem("user");
    // console.log();

    // return response.extractData(res);
    return;
  } catch (error: Res | any) {
    throw response.extractError(error);
  }
};

export default {
  login,
};
