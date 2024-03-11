import { Cards } from "afrobank-sdk";
import response from "../../@utils/response";
import { store, cards as cardUpdate } from "../../@store/store";

const cards = new Cards("http://localhost:3005/Api/v1/");

const getCards = async (): Promise<void> => {
  try {
    const res = await cards.getCards();
    const data: any = response.extractData({});
    store.dispatch(cardUpdate(data?.message));
  } catch (error: any) {
    throw response.extractError(error);
  }
};

export default {
  getCards,
};
