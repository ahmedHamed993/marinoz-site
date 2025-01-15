import callApi from "@/helpers/callApi";
import { setTokenToCookies } from "../setTokenToCookies";
import {
  removeTokenFromCookies,
  removeUserIdFromCookies,
} from "../removeTokenFromCookies";
export const logout = async (onSuccess, onError) => {
  const userToken = localStorage.getItem("token");
  return await callApi(userToken, "multipart/form-data")
    .get(`/clients/auth/logout`)
    .then(async (data) => {
      if (data?.status === 200) {
        const token = await removeTokenFromCookies();
        const id = await removeUserIdFromCookies();
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        onSuccess();
        return data;
      }
      throw data;
    })
    .catch((error) => {
      onError(error?.response?.data?.message);
    });
};
