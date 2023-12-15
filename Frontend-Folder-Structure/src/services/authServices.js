import http from "./http-common";

const signin = (data) => {
  return http.post("/auth/signin", data);
};

const signup = (data) => {
    return http.post("/auth/signup", data);
  };
  
const authServices = {
 signin,
 signup
};

export default authServices;
