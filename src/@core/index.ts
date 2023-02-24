import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://afrobank-backend-production.up.railway.app/Api/v1/",
});

const apiFunctionCall = async (
  url: string,
  data?: object | undefined | any,
  method?: "get" | string,
  options?: object
) => {
  const val = !!data ? { body: JSON.stringify(data) } : {};

  const response = await fetch(
    `https://afrobank-backend-production.up.railway.app/Api/v1${url}`,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...options,
      },
      ...val,
    }
  );
  if (!response?.ok) {
    console.log(response);
  }

  return response.json();
};

export default { apiFunctionCall, axiosApi };
