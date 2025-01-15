import callApi from "@/helpers/callApi"
import { fireToastAlert } from "@/helpers/fireToastAlert";

export const askOtpToResetPassword = (values)=>{
    const token = localStorage.getItem("token");
    return callApi(token, 'applicaton/json').post(`/clients/auth/forget-password`,JSON.stringify(values)).then(data => {
        if(data.status === 200){
            return data;
        }
        throw data;
    }).catch(error => {
        fireToastAlert("error",error?.response?.data?.message)
    })
}