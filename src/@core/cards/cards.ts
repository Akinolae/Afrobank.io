import apiFunctionCall from "..";
import { store, cards } from "../../@store/store";
import auth from "../auth/auth";

const getCards = async (): Promise<void> => {
  const token = auth.getToken();
  try {
    const res = await apiFunctionCall.apiFunctionCall({
      url: "userCards",
      method: "GET",
      options: {
        Authorization: `Bearer ${token}`,
      },
    });

    store.dispatch(cards(res.data?.message));
  } catch (error: any) {
    throw error.message;
  }
};

export default {
  getCards,
};
