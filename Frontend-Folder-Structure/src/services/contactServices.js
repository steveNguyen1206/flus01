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

const findAllBids = freelancer_post_id => {
  return http.get(`/contact/allbids/${freelancer_post_id}`);
};

const countBids = freelancer_post_id => {
  return http.get(`/contact/countbids/${freelancer_post_id}`);
}

const contactService = {
    create,
    findAll,
    findOne,
    findAllBids,
    countBids
};

export default contactService;
