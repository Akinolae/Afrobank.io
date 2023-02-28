export interface Res {
  message?: object | any;
  response?: {
    data: {
      message: string | any;
    };
  };
  data?: {
    message?: {
      has2fa: boolean;
      token: string;
      email: string;
    };
  };
}

const extractData = (res: Res): object => {
  return {
    data: res.data?.message,
  };
};

const extractError = (res: Res) => {
  return res.response?.data.message;
};

export default {
  extractData,
  extractError,
};
