import http from "./http-common";

const create = () => {
    return http.post("/subcategory");
};

const findAll = () => {
  return http.get("/subcategory");
};

// findOnebyId
const findOne = id => {
  return http.get(`/subcategory/${id}`);
};

const update = (id, data) => {
  return http.put(`/subcategory/${id}`, data);
};

const deleteSubcategory = id => {
  return http.delete(`/subcategory/${id}`);
};

const subcategoryService = {
    create,
    findAll,
    findOne,
    update,
    deleteSubcategory,
};

export default subcategoryService;
