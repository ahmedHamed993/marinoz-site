import callApi from "@/helpers/callApi";
export async function verifyByOtp(otp, onSuccess, onError) {
  const userToken = localStorage.getItem("token");
  return await callApi(userToken, "application/json")
    .post(
      `/clients/auth/otp/verify`,
      JSON.stringify({
        otp: otp,
      }),
    )
    .then(async (data) => {
      console.log("data", data);
      if (data?.status === 200) {
        onSuccess(data);
      }
      throw data;
    })
    .catch((error) => {
      onError(error?.response?.data?.message);
    });
}
