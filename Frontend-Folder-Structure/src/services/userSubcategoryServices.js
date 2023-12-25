import http from "./http-common";

const findAll = (id) => {
    return http.get(`/user_subcategory/${id}`);
};

const userSubcategoryService = {
    findAll,
};

export default userSubcategoryService;
