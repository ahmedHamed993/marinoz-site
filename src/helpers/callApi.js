import axios from "axios";

const callApi = (token, contentType) => {
  console.log(
    process.env.NEXT_PUBLIC_REST_API_KEY,
    process.env.NEXT_PUBLIC_REST_BASE_URL,
  );
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_BASE_URL,
    // withCredentials: true,
    headers: {
      "Content-Type": contentType ?? "application/json",
      Authorization: token ? ` Bearer ${token} ` : undefined,
      "api-key": process.env.NEXT_PUBLIC_REST_API_KEY,
    },
  });

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      return {
        status: response.status,
        data: response.data,
      };
    },
    (error) => Promise.reject(error),
  );

  return instance;
};

export default callApi;
