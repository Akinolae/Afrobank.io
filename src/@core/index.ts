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

  return response.json();
};

export default apiFunctionCall;
