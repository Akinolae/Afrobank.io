import apiFunctionCall from "..";
import { store, cards } from "../../@store/store";
import response from "../../@utils/response";

const getCards = async (): Promise<void> => {
  try {
    const res = await apiFunctionCall.apiFunctionCall({
      url: "userCards",
      method: "GET",
      hasAuth: true,
    });

    const data: any = response.extractData(res);

    store.dispatch(cards(data?.message));
  } catch (error: any) {
    throw response.extractError(error);
  }
};

export default {
  getCards,
};
