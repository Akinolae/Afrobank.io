export interface Res {
  message?: object;
  response?: {
    data: {
      message: string;
    };
  };
  data?: {
    message: string;
  };
}

const extractData = (res: Res) => {
  return res.data?.message;
};

const extractError = (res: Res) => {
  return res.response?.data.message;
};

export default {
  extractData,
  extractError,
};
