export interface Res {
  message?: object;
  response?: object;
}

const extractData = (res: Res) => {
  return res.message;
};

const extractError = (res: Res) => {
  return res.response;
};

export default {
  extractData,
  extractError,
};
