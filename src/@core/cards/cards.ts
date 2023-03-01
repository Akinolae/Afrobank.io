import apiFunctionCall from "..";
import response, { Res } from "../../@utils/response";
import { store, updateSignIn, updateUser, cards } from "../../@store/store";
import auth from "../auth/auth";

const getCards = async (): Promise<void> => {
  const token = auth.getToken();
  try {
    const res = await apiFunctionCall.axiosApi.get("userCards", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    store.dispatch(cards(res.data?.message));
  } catch (error: any) {
    throw response.extractError(error);
  }
};

export default {
  getCards,
};
