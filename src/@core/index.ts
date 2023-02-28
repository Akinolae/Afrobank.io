import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:3005/Api/v1/",
});

const apiFunctionCall = async (
  url: string,
  data?: object | undefined | any,
  method?: "get" | string,
  options?: object
) => {
  const val = !!data ? { body: JSON.stringify(data) } : {};

  const response = await fetch(`http://localhost:3005/Api/v1/`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...options,
    },
    ...val,
  });
  if (!response?.ok) {
    console.log(response);
  }

  return response.json();
};

export default { apiFunctionCall, axiosApi };
