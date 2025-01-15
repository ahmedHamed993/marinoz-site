import callApi from "@/helpers/callApi";
import { fireToastAlert } from "@/helpers/fireToastAlert";
import { setTokenToCookies } from "../setTokenToCookies";
export const register = async (formData, onSuccess, onError) => {
  return await callApi(undefined, "multipart/form-data")
    .post(`/clients/auth/register`, formData)
    .then(async (data) => {
      console.log("data", data);
      if (data?.status === 201) {
        const token = await setTokenToCookies(data?.data?.data?.token);
        const id = await setUserIdToCookies(data?.data?.data?.id);
        localStorage.setItem("token", data?.data?.data?.token);
        localStorage.setItem("userId", data?.data?.data?.id);
        onSuccess(data);
        return data;
      }
      throw data;
    })
    .catch((error) => {
      onError(error?.response?.data?.message);
    });
};
