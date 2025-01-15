import callApi from "@/helpers/callApi";
import { fireToastAlert } from "@/helpers/fireToastAlert";
export function setNewPassword(values, token) {
        return callApi(token, 'applicaton/json').post(`/clients/auth/reset-password`, JSON.stringify(values)).then(data => {
            if(data.status === 200){
                return data;
            }
            throw data;
        }).catch(error => {
            fireToastAlert("error",error?.response?.data?.message)
        })
}