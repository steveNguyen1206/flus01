const { TEXTFLOW_API } = process.env;
const textflow = require("textflow.js");
textflow.useKey(TEXTFLOW_API);

const sendCode = async (req, res) => {
    const {phone_number} = req.body;

    const verificationOptions = {
        service_name: "FLUS sms verification",
        second: 600, // valid in 10 minutes
    };

    // OTP Verification
    const result = await textflow.sendVerificationSMS(phone_number, verificationOptions);

    return res.status(result.status).json({"message": result.message, "phone_nuber": phone_number});
    };

const verifyCode = async (req, res) => {
    const {phone_number, code} = req.body;

     // The user has submitted the code
     let result = await textflow.verifyCode(phone_number, code);
     
     if (result.valid) {
         // The code is valid
         return res.status(200).json(result.message);
     }

     return res.status(result.status).json(result.message);
 
  };

module.exports = {
    sendCode,
    verifyCode
};
    