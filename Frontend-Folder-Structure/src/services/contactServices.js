import { http } from "./http-common";

const create = (data) => {
    return http.post("/contact", data);
};

const findAll = () => {
  return http.get("/contact");
};

// findOnebyId
const findOne = id => {
  return http.get(`/contact/${id}`);
};

const contactService = {
    create,
    findAll,
    findOne,
};

export default contactService;
