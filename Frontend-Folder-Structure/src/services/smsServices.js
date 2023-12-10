import http from "./http-common";

const sendCode = (data) => {
    return http.post("sms/send-code", data);
    }
const verifyCode = (data) => {
    return http.post("sms/verify-code", data);
    }


const smsServices = {
    sendCode,
    verifyCode
};

export default smsServices;