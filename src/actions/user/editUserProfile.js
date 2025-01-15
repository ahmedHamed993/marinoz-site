import callApi from "@/helpers/callApi";
import { fireToastAlert } from "@/helpers/fireToastAlert";
export const editUserProfile = (formData, onError422) => {
  const token = localStorage.getItem("token");
  callApi(token, "multipart/form-data")
    .post(`/clients/auth/update-client-profile`, formData)
    .then((data) => {
      if (data.status === 200) {
        fireToastAlert("success", "Profile Updated Successfully");
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
