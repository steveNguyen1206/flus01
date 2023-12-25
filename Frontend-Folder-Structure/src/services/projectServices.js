import { http } from "./http-common";

const create = (data) => {
    return http.post("/project", data);
};

const createNull = () => {
  return http.post("/project/createNull");
};

const projectServices = {
    create,
    createNull
};

export default projectServices;
