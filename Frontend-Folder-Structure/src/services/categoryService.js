import http from "./http-common";

const create = (data) => {
    return http.post("/category", data);
};

const findAll = () => {
  return http.get("/category");
};

// findOnebyId
const findOne = id => {
  return http.get(`/category/${id}`);
};

const update = (id, data) => {
  return http.put(`/category/${id}`, data);
};

const deleteCategory = id => {
  return http.delete(`/category/${id}`);
};

const findAllwithSubcate = (searchKey) => {
  return http.get(`/category/all/${searchKey}`);
}

const categoryService = {
    create,
    findAll,
    findOne,
    update,
    deleteCategory,
    findAllwithSubcate,
};

export default categoryService;
