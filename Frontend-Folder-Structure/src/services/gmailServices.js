import { http } from "./http-common";

const sendEmail = () => {
  return http.post("/gmail/send-email");
};

const gmailService = {
    sendEmail
};

export default gmailService;
