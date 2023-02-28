import apiFunctionCall from "..";
import response, { Res } from "../../@utils/response";
import { store, updateSignIn, updateUser, cards } from "../../@store/store";

const getCards = async (): Promise<void> => {
  try {
    const res = await apiFunctionCall.axiosApi.get("userCards", {
      headers: {
        Authorization: `Bearer ${store.getState().user.payLoad?.token}`,
      },
    });

    store.dispatch(cards(res.data?.message));
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getCards,
};
