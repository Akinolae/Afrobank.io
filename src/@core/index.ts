type api = {
  url: string;
  method: "GET" | "PATCH" | "POST" | "PUT";
  options?: object | undefined;
  data?: any;
};

const apiFunctionCall = async (params: api) => {
  const { method, url, data, options } = params;
  const val = !!data
    ? { body: typeof data !== "string" ? JSON.stringify(data) : data }
    : {};

  console.log(val);

  const response = await fetch(`http://localhost:3005/Api/v1/${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...options,
    },
    ...val,
  });
  if (!response?.ok) {
    throw await response.json();
  }

  return response.json();
};

export default { apiFunctionCall };
