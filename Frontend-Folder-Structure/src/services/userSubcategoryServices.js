import http from "./http-common";

const findAll = (id) => {
    console.log("======== GET ALL TAGS OF A USER =========" + id);
    return http.get(`/user_subcategory/${id}`);
};

const userSubcategoryService = {
    findAll,
};

export default userSubcategoryService;
