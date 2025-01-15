import callApi from "@/helpers/callApi";
import { fireToastAlert } from "@/helpers/fireToastAlert";

export const resetPassword = (values, onError422) => {
  const token = localStorage.getItem("token");
  callApi(token, "application/json")
    .post(`/clients/auth/client-change-password`, values)
    .then((data) => {
      if (data.status === 200) {
        fireToastAlert("success", "Password Reseted Successfully");
        return;
      }
      throw data;
    })
    .catch((error) => {
      if (error?.response?.status === 422) {
        onError422(error?.response?.data?.errors);
        return;
      }
      fireToastAlert("error", error?.response?.data?.message || error.message);
    });
};
